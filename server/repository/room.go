package repository

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
)

type roomRepository struct {
	db db.DB
}

func NewRoomRepotisory(db db.DB) usecase.RoomRepository {
	return roomRepository{
		db: db,
	}
}

func (repo roomRepository) GetAllRoom() (rooms []domain.Room) {
	repo.db.Conn.Find(&rooms)
	return
}

func (repo roomRepository) NewRoom(id string, name string, max_count int) domain.Room {
	room := domain.Room{
		Id:       id,
		Name:     name,
		MaxCount: max_count,
		Status:   "created",
	}
	repo.db.Conn.Save(&room)
	return room
}

func (repo roomRepository) GetRoomByID(id string) domain.Room {
	room := domain.Room{Id: id}
	// Idでroomを取得し,ほかのカラムも情報も更新
	repo.db.Conn.First(&room)
	return room
}

func (repo roomRepository) ChangeRoomStatus(id string) domain.Room {
	room := domain.Room{Id: id}
	room.Status = "finished"
	repo.db.Conn.Save(&room)
	return room
}
