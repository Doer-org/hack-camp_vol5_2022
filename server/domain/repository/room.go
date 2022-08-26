package repository

import "github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"

type RoomRepository interface {
	GetAllRoom() []entity.Room
	NewRoom(id string, name string, max_count int) entity.Room
	GetRoomByID(id string) entity.Room
	ChangeRoomStatus(id string) entity.Room
}
