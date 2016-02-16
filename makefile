ISTANBUL=./node_modules/.bin/istanbul
_MOCHA=./node_modules/.bin/_mocha
MOCHA=./node_modules/.bin/mocha
OPTS:=--recursive --reporter nyan --watch
test:
	@$(MOCHA) $(OPTS)
cover:
	$(ISTANBUL) cover $(_MOCHA) -- $(OPTS)
testDemo:
	$(MOCHA) 'test/test.js' --reporter tap
testNest:testDemo
	$(MOCHA) 'test/nested/test1.js'
.PHONY:test cover testDemo testNest
