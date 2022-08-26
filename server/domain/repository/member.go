package repository

import "github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"

// repositoryの責務をusecaseで宣言することで
// repositoryはusecaseに依存することとなり
// 依存関係が逆転する
type MemberRepository interface {
	NewMember(name string, comment string, lang string, github string, twitter string, question string, room string) entity.Member
	GetAllMember(room string) []entity.Member
	GetMemberByID(id int) entity.Member
	GetRandomMember(room string) entity.Member
}
