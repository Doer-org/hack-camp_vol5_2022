package service

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/helper"
)

func GetAllRoom() []domain.Room {
	rooms := repository.GetAllRoom()
	return rooms
}

func NewRoom(name string, max_count int) domain.Room {
	id := helper.GetHashId()
	room := domain.Room{
		Id:       id,
		Name:     name,
		MaxCount: max_count,
		Status:   "created",
	}
	repository.NewRoom(room)
	return room
}

func GetRoomByID(id string) domain.Room {
	room := repository.GetRoomByID(id)
	return room
}

func ChangeRoomStatus(id string) domain.Room {
	room := repository.ChangeRoomStatus(id)
	return room
}
