#!/bin/bash
# Bash script for obtaining the ip of dream and automatically ssh-ing into it

ip=$(curl ldipservice.herokuapp.com/api)
echo $ip
#echo "sigh"

fuck="${ip:1:${#ip}-2}"
#echo $fuck

ssh $fuck
