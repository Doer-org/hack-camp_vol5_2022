package domain

import (
	"time"
)

type Room struct {
	Id        string
	Name      string
	MaxCount  int    // roomの最大人数
	Status    string // roomのstatus
	CreatedAt time.Time
}
