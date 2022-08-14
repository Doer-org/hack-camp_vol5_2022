package usecase

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/helper"
)

type roomUsecase struct {
	repo RoomRepository
}

type RoomUsecase interface {
	GetAllRoom() []domain.Room
	NewRoom(name string, max_count int) domain.Room
	GetRoomByID(id string) domain.Room
	ChangeRoomStatus(id string) domain.Room
}

func NewRoomUsecase(repo RoomRepository) RoomUsecase {
	return roomUsecase{
		repo: repo,
	}
}

func (uc roomUsecase) GetAllRoom() []domain.Room {
	rooms := uc.repo.GetAllRoom()
	return rooms
}

func (uc roomUsecase) NewRoom(name string, max_count int) domain.Room {
	id := helper.GetHashId()
	room := uc.repo.NewRoom(id, name, max_count)
	return room
}

func (uc roomUsecase) GetRoomByID(id string) domain.Room {
	room := uc.repo.GetRoomByID(id)
	return room
}

func (uc roomUsecase) ChangeRoomStatus(id string) domain.Room {
	room := uc.repo.ChangeRoomStatus(id)
	return room
}
