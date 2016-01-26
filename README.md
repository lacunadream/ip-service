#ip-post
Routinely store your machine's current ip address in a remote database.

####Node + MongoDB
Barebones restful service for updating and storing remote machine's IP.

In order to provide db's uri, use either ```set DB=<string>``` or ```heroku config:set DB=<string>```

Routes: 

```/api``` : json formatted url

```/link``` : url to access server

####Scripts
```gah.sh``` is the bash script that obtains your machine's ip and POSTs it to the restful service. 

```ipcron2``` is the cron script that runs the bash script every 30 minutes. 

```d``` is a bash script that automatically ssh-es into the server. Assumes that you have added the private key to the keychain // using ```ssh-agent```


####Notes
I realize that they are many other better ways of keeping track of your machine's ip if it is not on a static line (ie no-ip). However I wanted to try out writing some bash scripts, and hence this repository :)

Should add test coverage next! 

