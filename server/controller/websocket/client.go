package websocket

import (
	"bytes"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

const (
	// 書き込み時間
	writeWait = 10 * time.Second

	// 次のメッセージを読むための時間
	pongWait = 60 * time.Second

	// この周期で送信する
	pingPeriod = (pongWait * 9) / 10

	// サイズ
	maxMessageSize = 512
)

var (
	newline = []byte{'\n'}
	space   = []byte{' '}
)


// wsコネクションの基本設定
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,

	// Cross-Originのチェックを無効　余裕あれば対応したい
	// https://godoc.org/github.com/gorilla/websocket#hdr-Origin_Considerations
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}


// クライアントは、ウェブソケット接続とハブの中間的な存在
type Client struct {
	hub  *Hub
	conn *websocket.Conn
	send chan []byte
}


// チャネルの読み込み用ゴルーチン
func (c *Client) readPump() {
	// 関数終了時にclientをunregisterする
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()

	// 読み取りサイズ
	c.conn.SetReadLimit(maxMessageSize)
	// 読み取り期限
	c.conn.SetReadDeadline(time.Now().Add(pongWait))
	c.conn.SetPongHandler(func(string) error { c.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })

	for {
		_, message, err := c.conn.ReadMessage()

		// 例外処理
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}

		message = bytes.TrimSpace(bytes.Replace(message, newline, space, -1))
		c.hub.broadcast <- message
	}
}


// チャネルの書き出し用ゴルーチン
func (c *Client) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		c.conn.Close()
	}()
	for {
		select {
		case message, ok := <-c.send:
			//ネットワーク接続の書き込み期限の設定
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))

			//ok はチャネルから受信した場合は true
			if !ok {
				// The hub closed the channel.
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := c.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}
			w.Write(message)

			// Add queued chat messages to the current websocket message.
			n := len(c.send)
			for i := 0; i < n; i++ {
				w.Write(newline)
				w.Write(<-c.send)
			}

			if err := w.Close(); err != nil {
				return
			}
		case <-ticker.C:
			// pingPeriod分経過したとき
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}


// websocketサーバー
func ServeWs(hub *Hub, w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}

	client := &Client{hub: hub, conn: conn, send: make(chan []byte, 256)}
	client.hub.register <- client

	go client.writePump()
	go client.readPump()
}
