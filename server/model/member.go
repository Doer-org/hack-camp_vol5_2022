package model

import "github.com/Doer-org/hack-camp_vol5_2022/server/db"

type Member struct {
	Id       int
	Name     string
	Age      int
	Gender   string
	Github   string
	Twitter  string
	Question string
	Room     string 
}

func NewMember(name string, age int, gender string, github string, twitter string, question string, room string) Member {
	db := db.NewDB()

	newMember := Member{
		Name:    name,
		Age:     age,
		Gender:  gender,
		Github:  github,
		Twitter: twitter,
		Question: question,
		Room:    room,
	}
	db.Conn.Save(&newMember)
	return newMember
}


func GetAllMember(room string) (members []Member) {
	db := db.NewDB()

	db.Conn.Where("room = ?",room).Find(&members)
	return
}

