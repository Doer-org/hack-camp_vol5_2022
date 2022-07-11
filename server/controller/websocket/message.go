package websocket

//websocket でやりとりするデータの構造体
type Message struct {
	NowCount int `json:"now_count"`
}
