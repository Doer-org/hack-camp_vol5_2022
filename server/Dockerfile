FROM golang:1.17.0-alpine

RUN apk update && apk add git

WORKDIR /go/src/github.com/Doer-org/hack-camp_vol5_2022
COPY . .

EXPOSE 8080

RUN go get github.com/cosmtrek/air
RUN go mod download

CMD [ "air", "-c", ".air.toml" ]
