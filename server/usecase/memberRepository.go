package usecase

import "github.com/Doer-org/hack-camp_vol5_2022/server/domain"

// repositoryの責務をusecaseで宣言することで
// repositoryはusecaseに依存することとなり
// 依存関係が逆転する
type MemberRepository interface {
	NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) domain.Member
	GetAllMember(room string) []domain.Member
	GetMemberByID(id int) domain.Member
	GetRandomMember(room string) domain.Member
}
