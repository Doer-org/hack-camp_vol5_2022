package model

import (
	"crypto/sha256"
	"encoding/hex"
	"time"

	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
)

type Room struct {
	Id        string
	Name      string
	MaxCount  int    // roomの最大人数
	Status    string // roomのstatus
	CreatedAt time.Time
}

func GetAllRoom() (rooms []Room) {
	db := db.NewDB()
	db.Conn.Find(&rooms)
	return
}

func getSHA256Binary(s string) []byte {
	r := sha256.Sum256([]byte(s))
	return r[:]
}

func NewRoom(name string, max_count int) (room Room) {
	db := db.NewDB()

	// 現在時刻からhash値の生成
	now := time.Now().Format("2006-01-02T15:04:05Z07:00")
	b := getSHA256Binary(now)
	id := hex.EncodeToString(b)

	newRoom := Room{
		Id:       id,
		Name:     name,
		MaxCount: max_count,
		Status:   "created",
	}

	db.Conn.Save(&newRoom)
	return newRoom
}

func GetRoomByID(id string) Room {
	db := db.NewDB()
	room := Room{Id: id}
	db.Conn.First(&room) //roomに他の情報を入れている
	return room
}

func ChangeRoomStatus(id string) Room {
	db := db.NewDB()
	room := Room{Id: id}
	room.Status = "finished"
	db.Conn.Save(&room)
	return room
}
