#!/bin/sh
echo '--build start--'
cd /root/code/api
git checkout .
git pull
pm2 restart api
echo '--build end--'