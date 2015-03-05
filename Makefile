default:
	@$(MAKE) -C ./server
	@$(MAKE) -C ./web
	@$(MAKE) -C ./client
install:
	@npm install -g gulp
	@npm install -g bower
cli:
	git pull
	@$(MAKE) -C ./client
ser:
	git pull
	@$(MAKE) -C ./web
	@$(MAKE) -C ./server
www:
	git pull
	@$(MAKE) -C ./web
