package repository

import "github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"

type UserRepository interface {
	FindByUid(uid string) *entity.User
	Save(user *entity.User) error
	Update(user *entity.User) error
}
