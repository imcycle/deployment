#!/bin/sh
echo '--build start--'
cd /root/code/whosmeya.com
git checkout master
git pull
rm -rf /root/libs/whosmeya.com/*
cp -rf /root/code/whosmeya.com/* /root/libs/whosmeya.com
echo '--build end--'