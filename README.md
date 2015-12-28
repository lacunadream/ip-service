#ip-post
Routinely store your machine's current ip address in a remote database.

####Node + MongoDB
Barebones restful service for updating and storing remote machine's IP

####Scripts
```gah.sh``` is the bash script that obtains your machine's ip and POSTs it to the restful service. 
```ipcron2``` is the cron script that runs the bash script every 30 minutes. 

####Notes
I realize that they are many other better ways of keeping track of your machine's ip if it is not on a static line (ie no-ip). However I wanted to try out writing some bash scripts, and hence this repository :)

