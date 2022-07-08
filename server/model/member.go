package model

import "github.com/Doer-org/hack-camp_vol5_2022/server/db"

type Member struct {
	Id      int
	Name    string
	Age     int
	Gender  string
	Github  string
	Twitter string
	Room    string // roomのquery
}

func NewMember(name string, age int, gender string, github string, twitter string, room string) Member {
	db := db.NewDB()

	newMember := Member{
		Name:    name,
		Age:     age,
		Gender:  gender,
		Github:  github,
		Twitter: twitter,
		Room:    room,
	}
	db.Conn.Save(&newMember)
	return newMember
}
