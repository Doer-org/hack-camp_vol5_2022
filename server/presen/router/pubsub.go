package router

import (
	// "log"

	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/pubsub"
	// "github.com/Doer-org/hack-camp_vol5_2022/server/presen/websocket"

	"github.com/gin-gonic/gin"
)

func initPubsubRouter(r *gin.Engine) {
	// websocket
	// roomIDとHubの紐づけ
	// hubs := make(map[string]*websocket.Hub)

	// ws?room=<roomID>
	r.GET("/ws", func(c *gin.Context) {
		// roomId := c.Query("room")

		// var hub *websocket.Hub
		// // hubsに登録されているか確認
		// log.Println(hubs)
		// if h, ok := hubs[roomId]; ok {
		// 	// 登録されていたら既存のものを利用
		// 	hub = h
		// 	log.Println("OK true")
		// } else {
		// 	// 登録されていなかったら, 新しく用意する
		// 	log.Println("No true")
		// 	hub = websocket.NewHub()
		// 	hubs[roomId] = hub
		// 	go hub.Run()
		// }
		// websocket.ServeWs(hub, c.Writer, c.Request)

		pubsub.Pubsub(c.Writer, c.Request)
	})
}
