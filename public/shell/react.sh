#!/bin/sh
echo '--build start--'
cd /root/code/react
git checkout .
git checkout master
git pull
npm install
npm run build
rm -rf /root/libs/react/*
mv /root/code/react/build/* /root/libs/react
echo '--build end--'