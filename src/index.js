module.exports = function toReadable(number) {
    let result, ones, tens, hundreds;
    const strNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (number in strNumbers) return strNumbers[number];
    if (number > 999 || number <= 0)
        return "Error: '" + number + "' is out of range!";

    //== process the composite numbers */
    [hundreds, tens, ones] = ("0000" + number).slice(-3).split("").map(Number);

    result = [];
    if (hundreds > 0) result.push(strNumbers[hundreds] + " hundred");

    if (ones + 10 * tens in strNumbers  && (ones + 10 * tens)>0) {
        result.push(strNumbers[ones + 10 * tens]);
        return result.join(" ");
    }

    if (tens > 0) {
        result.push(strNumbers[tens * 10]);
    }

    if (ones > 0) {
        result.push(strNumbers[ones]);
    }

    return result.join(" ");
};
