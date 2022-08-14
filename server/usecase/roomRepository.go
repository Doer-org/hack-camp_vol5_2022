package usecase

import "github.com/Doer-org/hack-camp_vol5_2022/server/domain"

type RoomRepository interface {
	GetAllRoom() []domain.Room
	NewRoom(id string, name string, max_count int) domain.Room 
	GetRoomByID(id string) domain.Room
	ChangeRoomStatus(id string) domain.Room
}