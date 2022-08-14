package usecase

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain"
)

type memberUsecase struct {
	repo MemberRepository
}

type MemberUsecase interface {
	NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) domain.Member
	GetAllMember(room string) []domain.Member
	GetMemberByID(id int) domain.Member
	GetRandomMember(room string) domain.Member
}

func NewMemberUsecase(repo MemberRepository) MemberUsecase {
	return memberUsecase{
		repo: repo,
	}
}

func (uc memberUsecase) NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) domain.Member {
	member := uc.repo.NewMember(name, comment, lang, github, twitter, question, room)
	return member
}

func (uc memberUsecase) GetAllMember(room string) []domain.Member {
	members := uc.repo.GetAllMember(room)
	return members
}

func (uc memberUsecase) GetMemberByID(id int) domain.Member {
	member := uc.repo.GetMemberByID(id)
	return member
}

func (uc memberUsecase) GetRandomMember(room string) domain.Member {
	member := uc.repo.GetRandomMember(room)
	return member
}
