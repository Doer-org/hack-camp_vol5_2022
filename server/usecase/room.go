package usecase

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/utils/helper"
)

type roomUsecase struct {
	repo repository.RoomRepository
}

type RoomUsecase interface {
	GetAllRoom() []entity.Room
	NewRoom(name string, max_count int) entity.Room
	GetRoomByID(id string) entity.Room
	ChangeRoomStatus(id string) entity.Room
}

func NewRoomUsecase(repo repository.RoomRepository) RoomUsecase {
	return roomUsecase{
		repo: repo,
	}
}

func (uc roomUsecase) GetAllRoom() []entity.Room {
	rooms := uc.repo.GetAllRoom()
	return rooms
}

func (uc roomUsecase) NewRoom(name string, max_count int) entity.Room {
	id := helper.GetHashId()
	room := uc.repo.NewRoom(id, name, max_count)
	return room
}

func (uc roomUsecase) GetRoomByID(id string) entity.Room {
	room := uc.repo.GetRoomByID(id)
	return room
}

func (uc roomUsecase) ChangeRoomStatus(id string) entity.Room {
	room := uc.repo.ChangeRoomStatus(id)
	return room
}
