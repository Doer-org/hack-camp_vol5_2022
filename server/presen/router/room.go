package router

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/handler"

	"github.com/gin-gonic/gin"
)

func initRoomRouter(r *gin.Engine, db db.DB) {
	repoRoom := repository.NewRoomRepotisory(db)
	ucRoom := usecase.NewRoomUsecase(repoRoom)
	hRoom := handler.NewRoomHandler(ucRoom)

	rr := r.Group("/room")
	rr.GET("/all", hRoom.GetAllRoom)
	rr.POST("/new", hRoom.NewRoom)
	rr.GET("/:id", hRoom.GetRoomByID)
	rr.GET("/finish/:id", hRoom.ChangeRoomStatus)
}
