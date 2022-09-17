package entity

type User struct {
	Uid     string `json:"uid" gorm:"unique"`
	Name    string `json:"name"`
	Comment string `json:"comment"`
	Lang    string `json:"lang"`
	Github  string `json:"github"`
	Twitter string `json:"twitter"`
}
