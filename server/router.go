package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/Doer-org/hack-camp_vol5_2022/server/controller"
	"github.com/Doer-org/hack-camp_vol5_2022/server/controller/websocket"
	"github.com/Doer-org/hack-camp_vol5_2022/server/controller/config"
)

func InitRouter() *gin.Engine {
	r := gin.Default()

	//CORSの設定
	config.ConfigCors(r)

	// health check
	r.GET("/", func(c *gin.Context) { c.JSON(http.StatusOK, gin.H{"message": "hello, gin 🍸"}) })

	// room
	r.GET("/room/all", controller.GetAllRoom)
	r.POST("/room/new", controller.NewRoom)
	r.GET("/room/:id", controller.GetRoomByID)
	r.GET("/room/finish/:id", controller.ChangeRoomStatus)

	//member
	r.POST("/member/new", controller.NewMember)
	r.GET("/member/all", controller.GetAllMember)
	r.GET("/member/:id", controller.GetMemberByID)
	r.GET("/member/random", controller.GetRandomMember)

	// websocket
	// roomIDとHubの紐づけ
	hubs := make(map[string]*websocket.Hub)

	// ws?room=<roomID>
	r.GET("/ws", func(c *gin.Context) {
		roomId := c.Query("room")

		var hub *websocket.Hub
		// hubsに登録されているか確認
		log.Println(hubs)
		if h, ok := hubs[roomId]; ok {
			// 登録されていたら既存のものを利用
			hub = h
			log.Println("OK true")
		} else {
			// 登録されていなかったら, 新しく用意する
			log.Println("No true")
			hub = websocket.NewHub()
			hubs[roomId] = hub
			go hub.Run()
		}
		websocket.ServeWs(hub, c.Writer, c.Request)
	})

	return r
}
