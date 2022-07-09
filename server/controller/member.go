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
	question := c.PostForm("question")
	room := c.Query("room")

	if name == "" || age == 0 || room == "" || question=="" {
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "name, age, room or question valid error",
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

	member := model.NewMember(name, age, gender, github, twitter, question, room)
	memberJSON := view.MemberToJSON(member)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)

}


func getAllMember(c *gin.Context){
	room := c.Query("room")
	
	if room == ""{
		c.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "room valid error",
			},
		)
		return
	}

	members := model.GetAllMember(room)
	membersJSON := view.MembersToJSON(members)

	c.JSON(
		http.StatusOK,
		gin.H{
			"data": membersJSON,
		},
	)
}


func getMemberByID(c *gin.Context) {
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

	member := model.GetMemberByID(id) //Goの型式でdbからデータを返す
	memberJSON := view.MemberToJSON(member)
	c.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)
}
