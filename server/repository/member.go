package repository

import (
	"math/rand"

	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
	"github.com/Doer-org/hack-camp_vol5_2022/server/usecase"
)

type memberRepository struct {
	db db.DB
}

func NewMemberRepository(db db.DB) usecase.MemberRepository {
	return memberRepository{
		db: db,
	}
}

func (repo memberRepository) NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) domain.Member {
	member := domain.Member{
		Name:     name,
		Comment:  comment,
		Lang:     lang,
		Github:   github,
		Twitter:  twitter,
		Question: question,
		Room:     room,
	}
	repo.db.Conn.Save(&member)
	return member
}

func (repo memberRepository) GetAllMember(room string) (members []domain.Member) {
	repo.db.Conn.Where("room = ?", room).Find(&members)
	return
}

func (repo memberRepository) GetMemberByID(id int) (member domain.Member) {
	repo.db.Conn.Where("id = ?", id).Find(&member)
	return
}

func (repo memberRepository) GetRandomMember(room string) domain.Member {
	members := []domain.Member{}
	repo.db.Conn.Where("room = ?", room).Find(&members)

	// マッチしたデータの長さ
	len := (int)(repo.db.Conn.Where("room = ?", room).Find(&[]domain.Member{}).RowsAffected)
	return members[rand.Intn(len)]
}
