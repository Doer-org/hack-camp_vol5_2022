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

