package model

type Status struct {
	Type string `json:"type"`
	MaxCount int `json:"max_count"`
	NowCount int `json:"now_count"`
}

