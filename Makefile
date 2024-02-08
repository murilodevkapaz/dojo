help: #this help
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*"


start: #run app
	@npm run dev


testAll: #unit test
	@npx jest -u --coverage --collectCoverageFrom=src/**/*.{ts,tsx} --collectCoverageFrom='!src/**/*.stories.{ts,tsx}'


test: # class=yourComponentHere make test
	@if [ -z "$(class)" ]; then \
     echo class=yourComponentHere make test; \
 else \
     npm test -- --testMatch='**/$(class)/**/*.test.ts?(x)' --coverage; \
 fi
storybook: #storybook
	@npm run storybook


prettier: # run prettier
	@npx prettier . --check
