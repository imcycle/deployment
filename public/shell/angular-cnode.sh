#!/bin/sh
echo '--build start--'
cd /root/code/angular-cnode
git checkout .
git checkout master
git pull

# 服务器内存太小 改为本地打包上传
# npm install
# npm run build

rm -rf /root/libs/angular-cnode/*
mv /root/code/angular-cnode/dist/angular-cnode/* /root/libs/angular-cnode
echo '--build end--'