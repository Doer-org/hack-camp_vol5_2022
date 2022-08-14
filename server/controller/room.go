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

func (con roomController) GetAllRoom(c *gin.Context) {
	rooms := con.uc.GetAllRoom()
	roomsJSON := response.RoomsToJSON(rooms)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomsJSON,
		},
	)
}

func (con roomController) NewRoom(c *gin.Context) {
	name := c.PostForm("name")
	max_count, err := strconv.Atoi(c.PostForm("max_count"))

	if name == "" || max_count == 0 {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "name or max_count valid error",
			},
		)
		return
	}

	if err != nil {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "max_count must be integer",
			},
		)
		return
	}

	room := con.uc.NewRoom(name, max_count)
	roomJSON := response.RoomJSON(room)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func (con roomController) GetRoomByID(c *gin.Context) {
	id := c.Param("id")
	room := con.uc.GetRoomByID(id)
	roomJSON := response.RoomToJSON(room)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func (con roomController) ChangeRoomStatus(c *gin.Context) {
	id := c.Param("id")

	if id == "" {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "id is required",
			},
		)
		return
	}

	room := con.uc.ChangeRoomStatus(id)
	roomJSON := response.RoomToJSON(room)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

