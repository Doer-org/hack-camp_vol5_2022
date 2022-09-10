package router

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/middleware"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"

	"github.com/gin-gonic/gin"
)

func InitRouter(db db.DB) *gin.Engine {
	// default routerの用意
	r := gin.Default()

	//middlewareの設定
	middleware.Cors(r)

	// 各routerの初期化
	initHealthRouter(r)
	initRoomRouter(r, db)
	initMemberRouter(r, db)
	initPubsubRouter(r)

	return r
}
