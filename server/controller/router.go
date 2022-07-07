package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/controller/websocket"
)

func InitRouter() *gin.Engine {
	r := gin.Default()

	// health check
	r.GET("/",func(c *gin.Context) {c.JSON(
		http.StatusOK,
		gin.H{
			"message":"hello, hikari",
		},
	)})

	// room
	r.GET("/room/all",getAllRoom)
	
	r.GET("/room/:id/:a", getRoomByID)

	// websocket 以下は mahiro72にお任せ
	// hub := websocket.NewHub()
	// go hub.Run()

	// roomIDとHubの紐づけ
	var hubs map[string]*websocket.Hub

	r.GET("/ws", func(c *gin.Context) {

		roomId := c.Query("room")

		var hub *websocket.Hub
	
		// hubsに登録されているか確認
		if h, ok := hubs[roomId]; ok {
			// 登録されていたら既存のものを利用
			hub = h
		} else {
			// 登録されていなかったら, 新しく用意する
			hub = websocket.NewHub()
			go hub.Run()
		}
		websocket.ServeWs(hub, c.Writer, c.Request)
	})

	// http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
	// 	websocket.ServeWs(hub, w, r)
	// })

	// log.Printf("local : http://localhost:8000 \n")
	// log.Fatal(http.ListenAndServe(":8000", nil))

	return r
}