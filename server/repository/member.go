package repository

import (
	"math/rand"

	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
)



func NewMember(member domain.Member) domain.Member {
	db := db.NewDB()
	defer db.Conn.Close()
	
	db.Conn.Save(&member)
	return member
}

func GetAllMember(room string) (members []domain.Member) {
	db := db.NewDB()
	defer db.Conn.Close()

	db.Conn.Where("room = ?", room).Find(&members)
	return
}

func GetMemberByID(id int)  (member domain.Member) {
	db := db.NewDB()
	defer db.Conn.Close()

	db.Conn.Where("id = ?", id).Find(&member)
	return
}

func GetRandomMember(room string) domain.Member {
	db := db.NewDB()
	defer db.Conn.Close()

	members := []domain.Member{}
	db.Conn.Where("room = ?", room).Find(&members)

	// マッチしたデータの長さ
	len := (int)(db.Conn.Where("room = ?", room).Find(&[]domain.Member{}).RowsAffected)
	return members[rand.Intn(len)]
}
