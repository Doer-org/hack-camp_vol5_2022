package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func initHealthRouter(r *gin.Engine) {
	// health check
	r.GET("/", func(c *gin.Context) { c.JSON(http.StatusOK, gin.H{"message": "hello, gin 🍸"}) })
}
