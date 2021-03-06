package controller

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/controller/websocket"
)

func InitRouter() *gin.Engine {
	r := gin.Default()

	//CORSã®è¨­å®
	configCors(r)

	// health check
	r.GET("/", func(c *gin.Context) { c.JSON(http.StatusOK, gin.H{"message": "hello, gin ð¸"}) })

	// room
	r.GET("/room/all", getAllRoom)
	r.POST("/room/new", newRoom)
	r.GET("/room/:id", getRoomByID)
	r.GET("/room/finish/:id", changeRoomStatus)

	//member
	r.POST("/member/new", newMember)
	r.GET("/member/all", getAllMember)
	r.GET("/member/:id", getMemberByID)
	r.GET("/member/random", getRandomMember)

	// websocket ä»¥ä¸ã¯ mahiro72ã«ãä»»ã
	// hub := websocket.NewHub()
	// go hub.Run()

	// roomIDã¨Hubã®ç´ã¥ã
	hubs := make(map[string]*websocket.Hub)

	// ws?room=<roomID>
	r.GET("/ws", func(c *gin.Context) {
		roomId := c.Query("room")

		var hub *websocket.Hub
		// hubsã«ç»é²ããã¦ãããç¢ºèª
		log.Println(hubs)
		if h, ok := hubs[roomId]; ok {
			// ç»é²ããã¦ãããæ¢å­ã®ãã®ãå©ç¨
			hub = h
			log.Println("OK true")
		} else {
			// ç»é²ããã¦ããªãã£ãã, æ°ããç¨æãã
			log.Println("No true")
			hub = websocket.NewHub()
			hubs[roomId] = hub
			go hub.Run()
		}
		websocket.ServeWs(hub, c.Writer, c.Request)
	})

	return r
}
