package repository

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"
)

type roomRepository struct {
	db db.DB
}

func NewRoomRepotisory(db db.DB) repository.RoomRepository {
	return roomRepository{
		db: db,
	}
}

func (repo roomRepository) GetAllRoom() (rooms []entity.Room) {
	repo.db.Conn.Find(&rooms)
	return
}

func (repo roomRepository) NewRoom(id string, name string, max_count int) entity.Room {
	room := entity.Room{
		Id:       id,
		Name:     name,
		MaxCount: max_count,
		Status:   "created",
	}
	repo.db.Conn.Save(&room)
	return room
}

func (repo roomRepository) GetRoomByID(id string) entity.Room {
	room := entity.Room{Id: id}
	// Idでroomを取得し,ほかのカラムも情報も更新
	repo.db.Conn.First(&room)
	return room
}

func (repo roomRepository) ChangeRoomStatus(id string) entity.Room {
	room := entity.Room{Id: id}
	repo.db.Conn.Model(&room).Update("Status", "finished")
	return room
}
