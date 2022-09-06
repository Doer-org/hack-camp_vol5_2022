###                ###
#     enviroment     #
###                ###

# 環境変数読み込み
include .env

# dir
FRONT_DIR:=../front
SERVER_DIR:=../server
DB_DIR:=../db
PROXY_DIR:=../proxy

## manifest
MANIFEST_FRONT_DEPLOYMENT_PATH:=./meet-hack/front/deployment.yml
MANIFEST_FRONT_SERVICE_PATH:=./meet-hack/front/service.yml

MANIFEST_SERVER_DEPLOYMENT_PATH:=./meet-hack/server/deployment.yml
MANIFEST_SERVER_SERVICE_PATH:=./meet-hack/server/service.yml

MANIFEST_PROXY_DEPLOYMENT_PATH:=./meet-hack/proxy/deployment.yml
MANIFEST_PROXY_SERVICE_PATH:=./meet-hack/proxy/service.yml


## image
FRONT_IMAGE_NAME:=gcr.io/$(PROJECT_ID)/meet-hack
SERVER_IMAGE_NAME:=gcr.io/$(PROJECT_ID)/meet-hack-api
PROXY_IMAGE_NAME:=gcr.io/$(PROJECT_ID)/meet-hack-proxy

# zone
ZONE:=asia-northeast1-a

# service name
SERVICE_NAME:=meet-hack
# container name
CONTAINER_NAME:=meet-hack



###               ###
#      command      #
###               ###

# gcloud ツールでプロジェクトID と ComputeEngineゾーンのオプションを設定
setup-config:
	gcloud config set project $(PROJECT_ID)
	gcloud config set compute/zone $(ZONE)

# 認証
setup-auth:
	gcloud auth configure-docker


# status 確認
status:
	kubectl get nodes,pods,services

all:build-all-image upload-all-image deploy-all

# service, deploymentの削除
fclean:
	kubectl delete service $(SERVICE_NAME)
	kubectl delete deployment $(CONTAINER_NAME)



###               ###
#       front       #
###               ###

# front の build
build-front-image:
	cd $(FRONT_DIR) && docker build . -t $(FRONT_IMAGE_NAME) -f Dockerfile.prd

# front の image のテスト
test-front-image:
	docker run --rm -p 3000:80 $(FRONT_IMAGE_NAME)

# front の upload
upload-front-image:setup-auth
	docker push $(FRONT_IMAGE_NAME)

# front の deploy
deploy-front:
	kubectl apply -f $(MANIFEST_FRONT_DEPLOYMENT_PATH)\
		-f $(MANIFEST_FRONT_SERVICE_PATH)



###               ###
#      server       #
###               ###

# server image の build
build-server-image:
	cd $(SERVER_DIR) && docker build . -t $(SERVER_IMAGE_NAME) -f Dockerfile.prd

# server の image のテスト
test-server-image:
	docker run --rm -p 8080:8080 $(SERVER_IMAGE_NAME)

# server の upload
upload-server-image:setup-auth
	docker push $(SERVER_IMAGE_NAME)

# server の deploy
deploy-server:
	kubectl apply -f $(MANIFEST_SERVER_DEPLOYMENT_PATH)\
		-f $(MANIFEST_SERVER_SERVICE_PATH)



###              ###
#      proxy       #
###              ###

# proxy image の build
build-proxy-image:
	cd $(PROXY_DIR) && docker build . -t $(PROXY_IMAGE_NAME) -f Dockerfile.prd

# proxy の image のテスト
test-proxy-image:
	docker run --rm -p 80:80 $(PROXY_IMAGE_NAME)

# proxy の upload
upload-proxy-image:setup-auth
	docker push $(PROXY_IMAGE_NAME)

# proxy の deploy
deploy-proxy:
	kubectl apply -f $(MANIFEST_PROXY_DEPLOYMENT_PATH)\
		-f $(MANIFEST_PROXY_SERVICE_PATH)



###              ###
#        all       #
###              ###

# すべての image の build
build-all-image: build-front-image build-server-image build-proxy-image

# すべての の upload
upload-all-image:setup-auth upload-front-image upload-server-image upload-proxy-image

# すべての の deploy
deploy-all: deploy-front deploy-server deploy-proxy