#!/bin/sh
echo '--build start--'
cd /root/code/deployment
git checkout .
git pull
pm2 restart deployment
echo '--build end--'