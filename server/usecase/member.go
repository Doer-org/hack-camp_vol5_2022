package usecase

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/repository"
)

type memberUsecase struct {
	repo repository.MemberRepository
}

type MemberUsecase interface {
	NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) entity.Member
	GetAllMember(room string) []entity.Member
	GetMemberByID(id int) entity.Member
	GetRandomMember(room string) entity.Member
}

func NewMemberUsecase(repo repository.MemberRepository) MemberUsecase {
	return memberUsecase{
		repo: repo,
	}
}

func (uc memberUsecase) NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) entity.Member {
	member := uc.repo.NewMember(name, comment, lang, github, twitter, question, room)
	return member
}

func (uc memberUsecase) GetAllMember(room string) []entity.Member {
	members := uc.repo.GetAllMember(room)
	return members
}

func (uc memberUsecase) GetMemberByID(id int) entity.Member {
	member := uc.repo.GetMemberByID(id)
	return member
}

func (uc memberUsecase) GetRandomMember(room string) entity.Member {
	member := uc.repo.GetRandomMember(room)
	return member
}
