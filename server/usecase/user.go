package usecase

import (
	"fmt"

	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/entity"
	"github.com/Doer-org/hack-camp_vol5_2022/server/domain/repository"
)

type UserUseCase struct {
	userRepo repository.UserRepository
}

func NewUserUseCase(uR repository.UserRepository) UserUseCase {
	return UserUseCase{
		userRepo: uR,
	}
}

// Github でログイン
func (uU UserUseCase) LoginWithGithub(uid string, userName string) (*entity.User, error) {
	user := uU.userRepo.FindByUid(uid)

	if user.Uid != "" {
		return user, nil
	}

	userDTO := &entity.User{
		Uid:    uid,
		Name:   userName,
		Github: userName,
	}

	err := uU.userRepo.Save(userDTO)
	return userDTO, err
}

// User 情報を取得
func (uU UserUseCase) GetuserProfile(uid string) (*entity.User, error) {
	user := uU.userRepo.FindByUid(uid)

	if user.Uid == "" {
		return nil, fmt.Errorf("cannnot Find User")
	}
	return user, nil
}

// User 情報を更新
func (uU UserUseCase) UpdateUserProfile(user *entity.User) error {
	err := uU.userRepo.Update(user)
	return err
}
