#!/bin/sh
echo '--build start--'
cd /root/code/whosmeya
git checkout master
git pull
rm -rf /root/libs/whosmeya/*
cp -rf /root/code/whosmeya/* /root/libs/whosmeya
echo '--build end--'