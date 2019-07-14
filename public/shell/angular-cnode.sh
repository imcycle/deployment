#!/bin/sh
echo '--build start--'
cd /root/code/angular-cnode
git checkout .
git checkout master
git pull
npm install
npm run build
rm -rf /root/libs/angular-cnode/*
mv /root/code/angular-cnode/dist/* /root/libs/angular-cnode
echo '--build end--'