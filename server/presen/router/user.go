package router

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/handler"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/gin-gonic/gin"
)

func initUserRouter(e *gin.Engine, db db.DB) {
	userRepo := repository.NewUserRepository(db)
	userUC := usecase.NewUserUseCase(userRepo)
	userHandler := handler.NewUserHandler(userUC)

	ur := e.Group("/user")
	ur.POST("/login/github", userHandler.PostGithubLogin)
	ur.GET("/:uid", userHandler.GetUserProfile)
	ur.PUT("/:uid", userHandler.PutUpdateUser)
}
