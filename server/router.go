package main

import (
	"log"
	"net/http"

	"github.com/Doer-org/hack-camp_vol5_2022/server/controller"
	"github.com/Doer-org/hack-camp_vol5_2022/server/controller/config"
	"github.com/Doer-org/hack-camp_vol5_2022/server/controller/websocket"
	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/gin-gonic/gin"
)

func InitRouter(db db.DB) *gin.Engine {
	r := gin.Default()

	//CORSの設定
	config.ConfigCors(r)

	// health check
	r.GET("/", func(c *gin.Context) { c.JSON(http.StatusOK, gin.H{"message": "hello, gin 🍸"}) })

	// room
	repoRoom := repository.NewRoomRepotisory(db)
	ucRoom := usecase.NewRoomUsecase(repoRoom)
	conRoom := controller.NewRoomController(ucRoom)

	r.GET("/room/all", conRoom.GetAllRoom)
	r.POST("/room/new", conRoom.NewRoom)
	r.GET("/room/:id", conRoom.GetRoomByID)
	r.GET("/room/finish/:id", conRoom.ChangeRoomStatus)

	//member
	repoMember := repository.NewMemberRepository(db)
	ucMember := usecase.NewMemberUsecase(repoMember)
	conMember := controller.NewMemberController(ucMember)

	r.POST("/member/new", conMember.NewMember)
	r.GET("/member/all", conMember.GetAllMember)
	r.GET("/member/:id", conMember.GetMemberByID)

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
