package repository

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/repository"
	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"
)

type userRepository struct {
	db db.DB
}

func NewUserRepository(db db.DB) repository.UserRepository {
	return userRepository{
		db: db,
	}
}

// ユーザを探す
func (uR userRepository) FindByUid(uid string) *entity.User {
	user := new(entity.User)
	uR.db.Conn.First(&user, "uid = ?", uid)
	return user
}

// ユーザを追加
func (uR userRepository) Save(user *entity.User) error {
	err := uR.db.Conn.Save(user).Error
	return err
}

// ユーザを更新
func (uR userRepository) Update(user *entity.User) error {
	err := uR.db.Conn.Model(user).Updates(user).Error
	return err
}
