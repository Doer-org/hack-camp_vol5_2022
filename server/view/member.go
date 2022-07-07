package view

import "github.com/Doer-org/hack-camp_vol5_2022/server/model"

type MemberJSON struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	Age     int    `json:"age"`
	Gender  string `json:"gender"`
	Github  string `json:"github"`
	Twitter string `json:"twitter"`
	Room    string `json:"room"`
}

func MemberToJson(member model.Member) MemberJSON {
	return MemberJSON{
		Id:      member.Id,
		Name:    member.Name,
		Age:     member.Age,
		Gender:  member.Gender,
		Github:  member.Github,
		Twitter: member.Twitter,
		Room:    member.Room,
	}
}
