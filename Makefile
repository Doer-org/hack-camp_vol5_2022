# dir
SERVER_DIR:=./server
FRONT_DIR:=./front
DB_DIR:=./db

# container
DB_CONTAINER_NAME:=hack-camp_vol5_2022-db

# command
RM := rm -rf


all:start


# docker-compose up
start:
	@echo ""
	@echo "------------------------"
	@echo "Start the docker-compose environment."
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose up -d
	@echo ""
	@echo "The docker-compose environment has been successfully built."
	@echo ""
	@docker-compose ps
	@echo ""


# docker-compose down
# imageやvolumeも削除
down:
	@echo ""
	@echo "------------------------"
	@echo "Down the docker-compose environment"
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose down --rmi all --volumes --remove-orphans
	@echo ""
	@echo "The docker-compose environment has been successfully down."
	@echo ""


# dbやcacheは保持したまま再起動
restart: down start


delete-db:
	@echo ""
	@echo "------------------------"
	@echo "delete db ..."
	@echo ""
	$(RM) $(DATA_DIR)
	@echo ""
	@echo "delete db success"
	@echo "------------------------"
	@echo ""


clean:

fclean:clean delete-db

# dbやcacheも削除してから再起動
re:fclean restart


# lint
lint:
	gofmt -l -w ./server


# docker container attach
attach-db:
	docker exec -it $(DB_CONTAINER_NAME) /bin/bash


# message from doer
doer:
	@echo ""
	@echo "do'er saiko---!!!!"
	@echo ""


.PHONY: all start build restart down \
attach-db delete-db \
clean fclean re lint doer

