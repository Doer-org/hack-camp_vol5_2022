package controller

import (
	"net/http"
	"log"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/controller/websocket"
)

func InitRouter() *gin.Engine {
	r := gin.Default()

	//CORSの設定
	configCors(r)

	// health check
	r.GET("/", func(c *gin.Context) { c.JSON(http.StatusOK, gin.H{"message": "hello, gin 🍸"}) })

	// room
	r.GET("/room/all", getAllRoom)
	r.POST("/room/new", newRoom)
	r.GET("/room/:id", getRoomByID)

	//member
	r.POST("/member/new", newMember)

	// websocket 以下は mahiro72にお任せ
	// hub := websocket.NewHub()
	// go hub.Run()

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
