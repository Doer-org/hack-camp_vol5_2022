package handler

import (
	"fmt"
	"net/http"

	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/gin-gonic/gin"
)

type UserHandler struct {
	userUseCase usecase.UserUseCase
}

func NewUserHandler(uU usecase.UserUseCase) UserHandler {
	return UserHandler{
		userUseCase: uU,
	}
}

// POST /login/github
func (uH UserHandler) PostGithubLogin(ctx *gin.Context) {
	json := new(userJSON)
	err := ctx.BindJSON(&json)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": fmt.Errorf("bad parameter: %s", err).Error(),
			},
		)
		return
	}

	user, err := uH.userUseCase.LoginWithGithub(json.Uid, json.Name)

	if err != nil {
		ctx.JSON(
			http.StatusInternalServerError,
			gin.H{
				"error": fmt.Errorf("failed to login: %s", err).Error(),
			},
		)
		return
	}
	ctx.JSON(
		http.StatusOK,
		user,
	)
}

// Get /:uid
func (uH UserHandler) GetUserProfile(ctx *gin.Context) {
	uid := ctx.Param("uid")
	user, err := uH.userUseCase.GetuserProfile(uid)
	if err != nil {
		ctx.JSON(
			http.StatusUnauthorized,
			gin.H{
				"error": fmt.Errorf("failed to get profile: %s", err).Error(),
			},
		)
		return
	}
	ctx.JSON(
		http.StatusOK,
		user,
	)
}

// PUT /:uid ユーザ情報を更新
func (uH UserHandler) PutUpdateUser(ctx *gin.Context) {
	user := new(entity.User)
	err := ctx.BindJSON(&user)

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": fmt.Errorf("bad parameter: %s", err).Error(),
			},
		)
		return
	}

	err = uH.userUseCase.UpdateUserProfile(user)

	if err != nil {
		ctx.JSON(
			http.StatusInternalServerError,
			gin.H{
				"error": fmt.Errorf("failed to login: %s", err).Error(),
			},
		)
		return
	}
	ctx.JSON(
		http.StatusOK,
		user,
	)
}

type userJSON struct {
	Uid  string `json:"uid"`
	Name string `json:"name"`
}
