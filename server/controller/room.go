package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/response"
)

func GetAllRoom(c *gin.Context) {
	rooms := usecase.GetAllRoom()
	roomsJSON := response.RoomsToJSON(rooms)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomsJSON,
		},
	)
}

func NewRoom(c *gin.Context) {
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

	room := usecase.NewRoom(name, max_count)
	roomJSON := response.RoomJSON(room)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func GetRoomByID(c *gin.Context) {
	id := c.Param("id")
	room := usecase.GetRoomByID(id)
	roomJSON := response.RoomToJSON(room)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func ChangeRoomStatus(c *gin.Context) {
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

	room := usecase.ChangeRoomStatus(id)
	roomJSON := response.RoomToJSON(room)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func GetRandomMember(c *gin.Context) {
	room := c.Query("room")

	if room == "" {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "room valid error",
			},
		)
		return
	}

	member := usecase.GetRandomMember(room)
	memberJSON := response.MemberToJSON(member)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)

}
