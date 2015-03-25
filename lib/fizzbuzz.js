FizzBuzz = function(number) {
  if (number % 3 == 0 && number % 5 == 0) {
  return 'FizzBuzz'; }
};

Buzz = function(number) {
  if (number % 5 == 0) {
  return 'Buzz'; }
};

Fizz = function(number) {
  if (number % 3 == 0) {
  return 'Fizz'; }
};

NotAFizzyBuzzyThing = function(number) {
  return number;
};

Game = function(number) {
};

module.exports = FizzBuzz;
module.exports = Fizz;
module.exports = Buzz;
module.exports = NotAFizzyBuzzyThing;
module.exports = Game;