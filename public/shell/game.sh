#!/bin/sh
echo '--build start--'
cd /root/code/game
git checkout master
git pull
rm -rf /root/libs/game/*
cp -rf /root/code/game/* /root/libs/game
echo '--build end--'