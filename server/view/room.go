package view

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/model"
)

type RoomJSON struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	MaxCount int    `json:"max_count"` //roomの最大人数
	// memberの追加
}

func RoomToJSON(room model.Room) RoomJSON {
	return RoomJSON{
		Id:room.Id,
		Name:room.Name,
		MaxCount: room.MaxCount,
	}
}

func RoomsToJSON(rooms []model.Room) []RoomJSON {
	roomsJSON := []RoomJSON{}
	for _,room := range rooms {
		roomsJSON = append(roomsJSON, RoomToJSON(room))
	}
	return roomsJSON
}


