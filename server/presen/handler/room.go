package handler

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/handler/response"
)

type roomHandler struct {
	uc usecase.RoomUsecase
}

func NewRoomHandler(uc usecase.RoomUsecase) roomHandler {
	return roomHandler{
		uc: uc,
	}
}

func (con roomHandler) GetAllRoom(ctx *gin.Context) {
	rooms := con.uc.GetAllRoom()
	roomsJSON := response.RoomsToJSON(rooms)
	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": roomsJSON,
		},
	)
}

func (con roomHandler) NewRoom(ctx *gin.Context) {
	name := ctx.PostForm("name")
	max_count, err := strconv.Atoi(ctx.PostForm("max_count"))

	if name == "" || max_count == 0 {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "name or max_count valid error",
			},
		)
		return
	}

	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "max_count must be integer",
			},
		)
		return
	}

	room := con.uc.NewRoom(name, max_count)
	roomJSON := response.RoomJSON(room)

	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func (con roomHandler) GetRoomByID(ctx *gin.Context) {
	id := ctx.Param("id")
	room := con.uc.GetRoomByID(id)
	roomJSON := response.RoomToJSON(room)
	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func (con roomHandler) ChangeRoomStatus(ctx *gin.Context) {
	id := ctx.Param("id")

	if id == "" {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "id is required",
			},
		)
		return
	}

	room := con.uc.ChangeRoomStatus(id)
	roomJSON := response.RoomToJSON(room)
	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}
