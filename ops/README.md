# ops

deploy用

## setup

cluster作成
```
gcloud container clusters create $CLUSTER_NAME --num-nodes=2
```


clusterの設定
```
kubectl config use-context $CLUSTER_NAME
```





## reference
- [デプロイ参考記事](https://ponpon-soft.com/entry/2020/05/31/110307)