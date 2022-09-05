##
# enviroment
##

# dir
SERVER_DIR:=./server
FRONT_DIR:=./front
DB_DIR:=./db
PROXY_DIR:=./proxy
DATA_DIR:=./db/data

# container
FRONT_CONTAINER_NAME:=front-hack-camp_vol5_2022
SERVER_CONTAINER_NAME:=server-hack-camp_vol5_2022
DB_CONTAINER_NAME:=db-hack-camp_vol5_2022
PROXY_CONTAINER_NAME:=proxy-hack-camp_vol5_2022

# command
RM := rm -rf
ecstatic-router-353016


.PHONY: all
all:start


# docker-compose up
.PHONY: start
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
.PHONY: down
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
.PHONY: restart
restart: down start


.PHONY: delete-db
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


.PHONY: clean
clean:


.PHONY: fclean
fclean:clean delete-db


# dbやcacheも削除してから再起動
.PHONY: re
re:fclean restart


##
# lint
##
.PHONY: lint
lint:
	gofmt -l -w ./server


##
# log
##
.PHONY: log
log:
	docker-compose logs -f


##
# docker container attach
##
.PHONY: attach-front
attach-front:
	docker exec -it $(FRONT_CONTAINER_NAME) /bin/bash

.PHONY: attach-server
attach-server:
	docker exec -it $(SERVER_CONTAINER_NAME) /bin/bash

.PHONY: attach-db
attach-db:
	docker exec -it $(DB_CONTAINER_NAME) /bin/bash

.PHONY: attach-proxy
attach-proxy:
	docker exec -it $(PROXY_CONTAINER_NAME) /bin/bash


##
# deploy
##
.PHONY: deploy-front
deploy-front:



##
# message from doer
##
doer:
	@echo ""
	@echo "do'er saiko---!!!!"
	@echo ""


##
# PHONY
##
.PHONY: all start build restart down \
attach-db delete-db \
clean fclean re lint doer
