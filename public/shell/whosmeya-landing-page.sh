#!/bin/sh
echo '--build start--'
cd /root/code/whosmeya-landing-page
git checkout master
git pull
rm -rf /root/libs/whosmeya-landing-page/
mv /root/code/whosmeya-landing-page/ /root/libs/whosmeya-landing-page/
echo '--build end--'