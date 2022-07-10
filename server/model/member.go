package model

import (
	"math/rand"

	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
)

type Member struct {
	Id       int
	Name     string
	Comment  string
	Lang     string
	Github   string
	Twitter  string
	Question string
	Room     string
}

func NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) Member {
	db := db.NewDB()
	defer db.Conn.Close()

	newMember := Member{
		Name:     name,
		Comment:  comment,
		Lang:     lang,
		Github:   github,
		Twitter:  twitter,
		Question: question,
		Room:     room,
	}
	db.Conn.Save(&newMember)
	return newMember
}

func GetAllMember(room string) (members []Member) {
	db := db.NewDB()
	defer db.Conn.Close()

	db.Conn.Where("room = ?", room).Find(&members)
	return
}

func GetMemberByID(id int) (member Member) {
	db := db.NewDB()
	defer db.Conn.Close()

	db.Conn.Where("id = ?", id).Find(&member)
	return
}

func GetRandomMember(room string) Member {
	db := db.NewDB()
	defer db.Conn.Close()

	members := []Member{}
	db.Conn.Where("room = ?", room).Find(&members)

	// マッチしたデータの長さ
	len := (int)(db.Conn.Where("room = ?", room).Find(&[]Member{}).RowsAffected)

	return members[rand.Intn(len)]
}
