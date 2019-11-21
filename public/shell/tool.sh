#!/bin/sh
echo '--build start--'
cd /root/code/tool
git checkout master
git pull
rm -rf /root/libs/tool/*
cp -rf /root/code/tool/* /root/libs/tool
echo '--build end--'