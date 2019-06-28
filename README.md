# sudoku
A simple sudoku game

## Building
 - npm run build

## Testing
 - npm run test
 - Tests are also run as part of the build, assuming build success
 - Due to the random nature of board generation some tests have an extremely small chance of failure
 - I don't like this but I honestly don't have a perfect solution; mocking the randomization to be deterministic would solve the problem but that reduces the potential test coverage and arguably makes for a weaker test.

## Executing
 - npm run start
 - optional environment variable PORT to specify listening port, otherwise defaults to 3000

