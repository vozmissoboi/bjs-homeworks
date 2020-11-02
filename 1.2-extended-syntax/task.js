function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    "use strict";
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (discriminant < 0) {
        return x;

    } else if (discriminant === 0) {
        x[0] = -b / 2 * a;
        return x;

    } else {
        x[0] = (-b + Math.sqrt(discriminant)) / 2 * a;
        x[1] = (-b - Math.sqrt(discriminant)) / 2 * a;
        return x;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let averageMark = 0;
    if (marks.length === 0) {
        return averageMark;

    } else if (marks.length > 5) {
        console.log('Количество оценок превышено.');
        marks.splice(5, marks.length - 5);
    }

    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }
    averageMark = marksSum / marks.length;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let userYearOfBirthday = dateOfBirthday.getFullYear();
    let thisYear = new Date().getFullYear();
    let userAge = thisYear - userYearOfBirthday;
    let result;

    if (userAge < 18)
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    else
        result = `Не желаете ли олд-фэшн, ${name}?`;

    return result;
}