ISTANBUL=./node_modules/.bin/istanbul
_MOCHA=./node_modules/.bin/_mocha
MOCHA=./node_modules/.bin/mocha
OPTS:=--recursive 
test:
	@$(MOCHA) $(OPTS)
cover:
	$(ISTANBUL) cover $(_MOCHA) $(OPTS)
cover2:
	$(ISTANBUL) cover $(_MOCHA) 'test/test2.js'
cover3:
	$(ISTANBUL) cover $(_MOCHA) 'src/test3.js'
testDemo:
	$(MOCHA) 'test/test.js' --reporter nyan
testNest:testDemo
	$(MOCHA) 'test/nested/test1.js'
.PHONY:test cover testDemo testNest
