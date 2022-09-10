package router

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/handler"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"

	"github.com/gin-gonic/gin"
)

func initMemberRouter(r *gin.Engine, db db.DB) {
	repoMember := repository.NewMemberRepository(db)
	ucMember := usecase.NewMemberUsecase(repoMember)
	hMember := handler.NewMemberHandler(ucMember)

	rm := r.Group("/member")
	rm.POST("/new", hMember.NewMember)
	rm.GET("/all", hMember.GetAllMember)
	rm.GET("/:id", hMember.GetMemberByID)
}
