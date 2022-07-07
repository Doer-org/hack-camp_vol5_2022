package model

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
)

type Room struct {
	Id       string 
	Name     string
	MaxCount int //roomの最大人数
	// memberの追加
}


func GetAllRoom() (rooms []Room) {
	db := db.NewDB()
	db.Conn.Find(&rooms)
	return
}



func GetRoomByID(id string) Room {
	db := db.NewDB() 
	room := Room{Id: id}
	db.Conn.First(&room) //roomに他の情報を入れている
	return room
}