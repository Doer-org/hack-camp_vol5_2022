package router

import (
	"log"
	"net/http"

	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/middleware"
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/websocket"
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/handler"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"

	"github.com/gin-gonic/gin"
)

func InitRouter(db db.DB) *gin.Engine {
	r := gin.Default()

	//CORSの設定
	middleware.Cors(r)

	// health check
	r.GET("/", func(c *gin.Context) { c.JSON(http.StatusOK, gin.H{"message": "hello, gin 🍸"}) })

	// room
	repoRoom := repository.NewRoomRepotisory(db)
	ucRoom := usecase.NewRoomUsecase(repoRoom)
	hRoom := handler.NewRoomHandler(ucRoom)


	r.GET("/room/all", hRoom.GetAllRoom)
	r.POST("/room/new", hRoom.NewRoom)
	r.GET("/room/:id", hRoom.GetRoomByID)
	r.GET("/room/finish/:id", hRoom.ChangeRoomStatus)

	//member
	repoMember := repository.NewMemberRepository(db)
	ucMember := usecase.NewMemberUsecase(repoMember)
	hMember := handler.NewMemberHandler(ucMember)

	r.POST("/member/new", hMember.NewMember)
	r.GET("/member/all", hMember.GetAllMember)
	r.GET("/member/:id", hMember.GetMemberByID)

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
