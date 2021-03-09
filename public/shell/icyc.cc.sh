#!/bin/sh
echo '--build start--'
cd /root/code/icyc.cc
git checkout .
git checkout master
git pull
npm install
npm run build
rm -rf /root/libs/icyc.cc/*
cp /root/code/icyc.cc/dist/* /root/libs/icyc.cc
echo '--build end--'