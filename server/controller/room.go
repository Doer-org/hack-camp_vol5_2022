package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/model"
	"github.com/Doer-org/hack-camp_vol5_2022/server/view"
)

func getAllRoom(c *gin.Context) {
	rooms := model.GetAllRoom()
	roomsJSON := view.RoomsToJSON(rooms)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomsJSON,
		},
	)
}

func newRoom(c *gin.Context) {
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

	room := model.NewRoom(name, max_count)
	roomJSON := view.RoomJSON(room)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func getRoomByID(c *gin.Context) {
	id := c.Param("id")
	room := model.GetRoomByID(id) //Goの型式でdbからデータを返す
	roomJSON := view.RoomToJSON(room)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func changeRoomStatus(c *gin.Context) {
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

	room := model.ChangeRoomStatus(id)
	roomJSON := view.RoomToJSON(room)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": roomJSON,
		},
	)
}

func getRandomMember(c *gin.Context) {
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

	member := model.GetRandomMember(room)
	memberJSON := view.MemberToJSON(member)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)

}
