package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/Doer-org/hack-camp_vol5_2022/server/model"
	"github.com/Doer-org/hack-camp_vol5_2022/server/view"
)

func getAllRoom(c *gin.Context){
	rooms := model.GetAllRoom()
	roomsJSON := view.RoomsToJSON(rooms)
	c.JSON(
		http.StatusOK, 
		gin.H{
			"data":roomsJSON,
		},
	)
}
