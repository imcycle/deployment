#!/bin/sh
echo '--start--'
cd /root/code/blog_react_ts
git checkout master
git pull
npm install
npm run build
rm -rf /root/libs/blog_react_ts/.
mv /root/code/blog_react_ts/build /root/libs/blog_react_ts/
echo '--end--'