package controller

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/response"
)

type memberController struct {
	uc usecase.MemberUsecase
}

func NewMemberController(uc usecase.MemberUsecase) memberController {
	return memberController{
		uc: uc,
	}
}

func (con memberController) NewMember(ctx *gin.Context) {
	name := ctx.PostForm("name")
	comment := ctx.PostForm("comment")
	lang := ctx.PostForm("lang")
	github := ctx.PostForm("github")
	twitter := ctx.PostForm("twitter")
	question := ctx.PostForm("question")
	room := ctx.Query("room")

	if name == "" || room == "" || question == "" {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "name, room or question valid error",
			},
		)
		return
	}

	member := con.uc.NewMember(name, comment, lang, github, twitter, question, room)
	
	memberJSON := response.MemberJSON(member)

	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)
}

func (con memberController) GetAllMember(ctx *gin.Context) {
	room := ctx.Query("room")

	if room == "" {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "room valid error",
			},
		)
		return
	}

	members := con.uc.GetAllMember(room)
	membersJSON := response.MembersToJSON(members)

	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": membersJSON,
		},
	)
}

func (con memberController) GetMemberByID(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))

	if id == 0 {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "id is required",
			},
		)
		return
	}
	if err != nil {
		ctx.JSON(
			http.StatusBadRequest,
			gin.H{
				"error": "id must be integer",
			},
		)
		return
	}

	member := con.uc.GetMemberByID(id) //Goの型式でdbからデータを返す
	memberJSON := response.MemberToJSON(member)

	ctx.JSON(
		http.StatusOK,
		gin.H{
			"data": memberJSON,
		},
	)
}
