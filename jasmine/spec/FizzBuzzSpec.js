// FizzBuzzSpec.js
describe("FizzBuzz", function () {

    it("should return fizz for numbers divisible by three", function () {
        var numberSet = [3, 6, 9, 18, 33];

        for (var i = 0; i < numberSet.length; i++) {
            var result = fizzBuzz.output(numberSet[i]);
            expect(result).toEqual("Fizz");
        }
    });

    it("should return buzz numbers divisible by five", function () {
        var numberSet = [5, 10, 20, 40];

        for (var i = 0; i < numberSet.length; i++) {
            var result = fizzBuzz.output(numberSet[i]);
            expect(result).toEqual("Buzz");
        }
    });

    it("should return fizzbuzz for numbers divisible by three and five", function () {
        var numberSet = [15, 30, 90];

        for (var i = 0; i < numberSet.length; i++) {
            var result = fizzBuzz.output(numberSet[i]);
            expect(result).toEqual("Fizz Buzz");
        }
    });

    it("should return the number for numbers not divisible three and five", function () {
        var numberSet = [1, 2, 7, 19];

        for (var i = 0; i < numberSet.length; i++) {
            var result = fizzBuzz.output(numberSet[i]);
            expect(result).toEqual(numberSet[i].toString());
        }
    });

    it("should return 0 if 0", function () {
        var result = fizzBuzz.output(0);
        expect(result).toEqual("0");
    });

});