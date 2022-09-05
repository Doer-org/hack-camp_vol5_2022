###                ###
#     enviroment     #
###                ###

# 環境変数読み込み
include .env

# dir
FRONT_DIR:=../front

# manifest path
MANIFEST_PATH:=./meet-hack/deployment-meet-hack.yml

# image name
FRONT_IMAGE_NAME:=gcr.io/$(PROJECT_ID)/meet-hack

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


# front-imageのbuild
build-front-image:
	cd $(FRONT_DIR) && docker build . -t $(FRONT_IMAGE_NAME)


# 認証とupload
upload-front-image:
	gcloud auth configure-docker
	docker push $(FRONT_IMAGE_NAME)


# docker の image のテスト
test-front-image:
	docker run --rm -p 3000:80 $(FRONT_IMAGE_NAME)


# manifest の deploy
deploy:
	kubectl apply -f $(MANIFEST_PATH)


# status 確認
status:
	kubectl get pods,services


# delete service, deployment
fclean:
	kubectl delete service $(SERVICE_NAME)
	kubectl delete deployment $(CONTAINER_NAME)
