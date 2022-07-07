package model

type Room struct {
	Id       string 
	Name     string
	MaxCount int //roomの最大人数
	// memberの追加
}


func GetAllRoom() (rooms []Room) {
	db := NewDB()
	db.Conn.Find(&rooms)
	return
}

