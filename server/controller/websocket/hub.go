package websocket

// hubはclientの全体情報とメッセージを管理している
type Hub struct {
	// 登録済みclient
	clients map[*Client]bool

	// clientからのメッセージ
	broadcast chan []byte

	// client登録リクエスト
	register chan *Client

	// client登録解除リクエスト
	unregister chan *Client
}

func NewHub() *Hub {
	return &Hub{
		broadcast:  make(chan []byte),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		clients:    make(map[*Client]bool),
	}
}

// goroutineで動かす
func (h *Hub) Run() {
	for {
		select {
		case client := <-h.register:
			// client登録
			h.clients[client] = true
		case client := <-h.unregister:
			// client解除
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
			}
		case message := <-h.broadcast:
			// broadcastチャネルに値が入った場合
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
		}
	}
}
