package repository

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
)

func GetAllRoom() (rooms []domain.Room) {
	db := db.NewDB()
	defer db.Conn.Close()

	db.Conn.Find(&rooms)
	return
}

func NewRoom(id string, name string, max_count int) domain.Room {
	db := db.NewDB()
	defer db.Conn.Close()

	room := domain.Room{
		Id:       id,
		Name:     name,
		MaxCount: max_count,
		Status:   "created",
	}
	db.Conn.Save(&room)
	return room
}

func GetRoomByID(id string) domain.Room {
	db := db.NewDB()
	defer db.Conn.Close()

	room := domain.Room{Id: id}
	// Idでroomを取得し,ほかのカラムも情報も更新
	db.Conn.First(&room)
	return room
}

func ChangeRoomStatus(id string) domain.Room {
	db := db.NewDB()
	defer db.Conn.Close()

	room := domain.Room{Id: id}
	room.Status = "finished"
	db.Conn.Save(&room)
	return room
}
