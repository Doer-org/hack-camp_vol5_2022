package usecase

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
	"github.com/Doer-org/hack-camp_vol5_2022/server/repository"
)

func NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) domain.Member {
	member := repository.NewMember(name, comment, lang, github, twitter, question, room)
	return member
}

func GetAllMember(room string) []domain.Member {
	members := repository.GetAllMember(room)
	return members
}

func GetMemberByID(id int) domain.Member {
	member := repository.GetMemberByID(id)
	return member
}

func GetRandomMember(room string) domain.Member {
	member := repository.GetRandomMember(room)
	return member
}
