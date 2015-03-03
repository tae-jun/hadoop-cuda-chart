default:
	@$(MAKE) -C ./server
	@$(MAKE) -C ./web
install:
	@npm install -g gulp
	@npm install -g bower
