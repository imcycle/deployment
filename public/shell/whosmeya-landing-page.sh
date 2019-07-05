#!/bin/sh
echo '--build start--'
cd /root/code/whosmeya-landing-page
git checkout master
git pull
rm -rf /root/libs/whosmeya-landing-page/*
cp /root/code/whosmeya-landing-page/* /root/libs/whosmeya-landing-page/
echo '--build end--'