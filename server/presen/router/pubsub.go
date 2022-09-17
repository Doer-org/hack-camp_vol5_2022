package router

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/pubsub"

	"github.com/gin-gonic/gin"
)

func initPubsubRouter(r *gin.Engine) {
	r.GET("/ws", pubsub.PubSubHandler)
}
