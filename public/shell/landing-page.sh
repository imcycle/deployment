#!/bin/sh
echo '--build start--'
cd /root/code/landing-page
git checkout master
git pull
rm -rf /root/libs/landing-page/*
cp -rf /root/code/landing-page/* /root/libs/landing-page
echo '--build end--'