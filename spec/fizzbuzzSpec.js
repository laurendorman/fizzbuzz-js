var FizzBuzz = require('../lib/fizzbuzz'); 

describe('number one is passed in', function() {
  it('returns number one', function() {
    expect(FizzBuzz(1)).toEqual(1);
  });
});

describe('number eight is passed in', function() {
  it('returns number eight', function() {
    expect(FizzBuzz(8)).toEqual(8);
  });
});

describe('number divisible by three', function() {
  it('returns Fizz', function() {
    expect(FizzBuzz(3)).toEqual('Fizz');
  });
});

describe('number divisible by three', function() {
  it('returns Fizz', function() {
    expect(FizzBuzz(9)).toEqual('Fizz');
  });
});

describe('number divisible by five', function() {
  it('returns Buzz', function() {
    expect(FizzBuzz(5)).toEqual('Buzz');
  });
});

describe('number divisible by five', function() {
  it('returns Buzz', function() {
    expect(FizzBuzz(50)).toEqual('Buzz');
  });
});

describe('number divisible by three and five', function() {
  it('returns FizzBuzz', function() {
    expect(FizzBuzz(15)).toEqual('FizzBuzz');
  });
});

describe('number divisible by three and five', function() {
  it('returns FizzBuzz', function() {
    expect(FizzBuzz(45)).toEqual('FizzBuzz');
  });
});