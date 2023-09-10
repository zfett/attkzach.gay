#!/bin/bash

#build my site using jekyll
jekyll build -q &&

# then cd to the _site directory and...
cd ./_site &&

# copy the contents of the directory to the home server via sftp
cp -R ./ /run/user/1000/gvfs/sftp:host=192.168.4.48/var/www/zachfetters