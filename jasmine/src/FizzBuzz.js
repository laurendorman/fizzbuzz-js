// FizzBuzz.js
var fizzBuzz = function () {


    var output = function (number) {

        if (divisibleByThreeAndFive(number)) {
            return "Fizz Buzz";
        }
        if (divisibleByThree(number)) {
            return "Fizz";
        }
        if (divisibleByFive(number)) {
            return "Buzz";
        }
        return number.toString();
    };

    var divisibleByThreeAndFive = function (number) {
        return divisibleByFive(number) && divisibleByThree(number);
    };

    var divisibleByThree = function (number) {
        return number % 3 == 0 && number != 0;
    };

    var divisibleByFive = function (number) {
        return number % 5 == 0 && number != 0;
    };

    return {
        output: output
    };

} ();