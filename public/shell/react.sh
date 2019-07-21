#!/bin/sh
echo '--build start--'
cd /root/code/whosmeya-react
git checkout .
git checkout master
git pull
npm install
npm run build
rm -rf /root/libs/whosmeya-react/*
mv /root/code/whosmeya-react/build/* /root/libs/whosmeya-react
echo '--build end--'