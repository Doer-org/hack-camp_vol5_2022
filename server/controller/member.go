package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/service"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/response"
)

func NewMember(c *gin.Context) {
	name := c.PostForm("name")
	comment := c.PostForm("comment")
	lang := c.PostForm("lang")
	github := c.PostForm("github")
	twitter := c.PostForm("twitter")
	question := c.PostForm("question")
	room := c.Query("room")

	if name == "" || room == "" || question == "" {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "name, room or question valid error",
			},
		)
		return
	}

	member := service.NewMember(name, comment, lang, github, twitter, question, room)
	memberJSON := response.MemberJSON(member)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)
}

func GetAllMember(c *gin.Context) {
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

	members := service.GetAllMember(room)
	membersJSON := response.MembersToJSON(members)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": membersJSON,
		},
	)
}

func GetMemberByID(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))

	if id == 0 {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "id is required",
			},
		)
		return
	}
	if err != nil {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "id must be integer",
			},
		)
		return
	}

	member := service.GetMemberByID(id) //Goの型式でdbからデータを返す
	memberJSON := response.MemberToJSON(member)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)
}
