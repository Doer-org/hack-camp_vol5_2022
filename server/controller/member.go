package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/model"
	"github.com/Doer-org/hack-camp_vol5_2022/server/view"
)

func newMember(c *gin.Context) {
	name := c.PostForm("name")
	age, err := strconv.Atoi(c.PostForm("age"))
	gender := c.PostForm("gender")
	github := c.PostForm("github")
	twitter := c.PostForm("twitter")
	room := c.Query("room")

	if name == "" || age == 0 || room == "" {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "name or age or room valid error",
			},
		)
		return
	}

	if err != nil {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "age must be integer",
			},
		)
		return
	}

	member := model.NewMember(name, age, gender, github, twitter, room)
	memberJSON := view.MemberToJson(member)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)

}
