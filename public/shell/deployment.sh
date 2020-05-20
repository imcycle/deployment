#!/bin/sh
echo '--build start--'
cd /root/code/whosmeya.com
git checkout .
git pull
pm2 restart deployment
echo '--build end--'