'use strict';

// Задача № 1

String.prototype.isPalindrome = function isPalindrome() {
    const string = this.toLowerCase().split(" ").join("");
    const reversedString = this.toLowerCase().split("").reverse().join("").replace(/\s+/g, "");

    if (string === reversedString) {
        return true;
    } else {
        return false;
    }
}

// Задача № 2

function getAverageMark(marks) {
    let averageMark = 0;

    if (marks.length === 0) {
        return averageMark;
    }

    for (let i = 0; i < marks.length; i++) {
        averageMark += marks[i];
    }

    const roundedAverage = Math.round(averageMark / marks.length);
    return roundedAverage;
}

// Задача № 3

function checkBirthday(birthday) {
    const now = new Date();
    birthday = new Date(birthday).getTime();
    const diff = now - birthday;
    const age = Math.round(diff / (24 * 3600 * 365.25 * 1000));
    const verdict = (age >= 18) ? true : false;
    return verdict;
}