package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/response"
)

type roomController struct {
	uc usecase.RoomUsecase
}

func NewRoomController(uc usecase.RoomUsecase) roomController {
	return roomController{
		uc: uc,
	}
}

func (con roomController) GetAllRoom(ctx *gin.Context) {
	rooms := con.uc.GetAllRoom()
	roomsJSON := response.RoomsToJSON(rooms)
	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": roomsJSON,
		},
	)
}

func (con roomController) NewRoom(ctx *gin.Context) {
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

func (con roomController) GetRoomByID(ctx *gin.Context) {
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

func (con roomController) ChangeRoomStatus(ctx *gin.Context) {
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

