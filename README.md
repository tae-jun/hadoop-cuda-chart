Hadoop CUDA Performance Chart
==================================================
[Parallel Software Design Lab](http://parlab.uos.ac.kr), University of Seoul

Installation
--------------------------------------------------
- Mongo DB
- Node JS

#### Mongo DB

##### Install
```sh
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```
##### Run
```sh
sudo service mongod start
```
##### References
[Install Mongo DB on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)



#### Node JS
##### Install
```sh
sudo apt-get install nodejs
```
##### Note
- Version 0.12.x is not compatible with mongodb driver yet (BSON problem)

Build
--------------------------------------------------
```sh
git clone https://github.com/tae-jun/hadoop-cuda-chart.git
cd hadoop-cuda-chart
sudo make install
make
```

Usage
--------------------------------------------------
##### 1. Run server
```sh
cd server
sudo node src/app.js
```

##### 2. Insert log
```sh
cd client
node src/app.js -p $path/where/log/files/are
```
###### *Note:*
- Do not use "~" (which means home directory) on path option
- You can change default log directory path by `vi client/config.js`

##### 3. Run Web application
[localhost](http://localhost) - **MUST OPEN WITH CHROME**



