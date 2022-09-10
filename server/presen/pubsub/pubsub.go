package pubsub

import (
	"context"
	"log"
	"net/http"

	"github.com/go-redis/redis/v8"
	"github.com/gorilla/websocket"
)


var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	// Add this lines
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}
var rd = redis.NewClient(&redis.Options{
	Addr: "redis-hack-camp_vol5_2022:6379",
})
var ctx = context.Background()

// should handle more errors
func Pubsub(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("websocket connection err:", err)
		return
	}
	defer conn.Close()

	go func() {
	loop:
		for {
			sub := rd.Subscribe(ctx, "test-channel")
			ch := sub.Channel()

			// should break outer for loop if err
			for msg := range ch {
				err := conn.WriteMessage(websocket.TextMessage, []byte(msg.Payload))
				if err != nil {
					log.Println("websocket write err:", err)
					break loop
				}
			}
		}
	}()

	for {
		_, msg, err := conn.ReadMessage()
		if err != nil {
			log.Println("websocket read err:", err)
			break
		}
		log.Println(string(msg))

		if err := rd.Publish(ctx, "test-channel", msg).Err(); err != nil {
			log.Println("redis publish err:", err)
			break
		}
	}

}
