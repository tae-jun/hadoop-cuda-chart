Hadoop CUDA Performance Chart
==================================================
[Parallel Software Design Lab](http://parlab.uos.ac.kr), University of Seoul

Requirements
--------------------------------------------------
- [Node JS](https://nodejs.org/)

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
##### 1. Run web server
```sh
cd server
node src/app.js
```
*NOTE: Your command may need to be profixed with sudo*

##### 2. Start history server
```sh
$HADOOP_HOME/sbin/mr-jobhistory-daemon.sh start historyserver
```
*NOTE: You better execute this command on namenode*

##### 3. Run client to use history server REST API
```sh
cd client
node src/app.js
```
*NOTE: Client must be on same network area with namenode*
######Options
- [-h | --host] web server address
- [-p | --port] web server port
- [--hHost] history server address
- [--hPort] history server port

*NOTE: You can also change options on "client/src/config.json" file*


##### 4. Run Web application
http://{ WEB_SERVER_HOSTNAME }:10000/

*NOTE: You better open with CHROME browser*



