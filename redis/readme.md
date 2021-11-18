# Docs
https://www.linode.com/docs/guides/install-and-configure-redis-on-centos-7/
https://www.sitepoint.com/using-redis-node-js/

# Installing Redis
sudo yum install redis

# Starting Redis
sudo systemctl start redis

# Accessing CLI
redis-cli

# Checking Redis
redis-cli ping

# Setting and getting values

## Via CLI
set myvar "myval"
get myvar

## Via NodeJS
