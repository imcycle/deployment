#!/bin/sh
cd /root/code/blog_react_ts
git checkout master
git pull
npm install
npm run build
mv /root/code/blog_react_ts/build /root/libs/blog_react_ts/