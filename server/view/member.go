package view

import "github.com/Doer-org/hack-camp_vol5_2022/server/model"

type MemberJSON struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	Age      int    `json:"age"`
	Gender   string `json:"gender"`
	Github   string `json:"github"`
	Twitter  string `json:"twitter"`
	Question string `json:"question"`
	Room     string `json:"room"`
}

func MemberToJSON(member model.Member) MemberJSON {
	return MemberJSON{
		Id:       member.Id,
		Name:     member.Name,
		Age:      member.Age,
		Gender:   member.Gender,
		Github:   member.Github,
		Twitter:  member.Twitter,
		Question: member.Question,
		Room:     member.Room,
	}
}


func MembersToJSON(members []model.Member) []MemberJSON {
	membersJSON := []MemberJSON{}
	for _, member := range members {
		membersJSON = append(membersJSON, MemberToJSON(member))
	}
	return membersJSON
}
