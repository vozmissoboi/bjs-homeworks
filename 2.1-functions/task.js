"use strict";

// Задача №1. Корни квадратного уравнения

function getSolutions(a, b, c) {
    const roots = [];
    const D = b ** 2 - 4 * a * c;

    if (D === 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        roots.push(x1);
    } else if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        roots.push(x1, x2);
    }

    return {
        D: D,
        roots: roots,
    };
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    let message = 'Уравнение не имеет вещественных корней';

    if (result.roots.length === 1) {
        message = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
    } else if (result.roots.length > 1) {
        message = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }

    console.log(message);
}

// Задача №2. Журнал успеваемости

function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let result = marks.reduce((a, b) => (a + b), 0);
    return result / marks.length;
}

function getAverageScore(data) {
    if (!data) return 0;
    const newData = {...data
    }
    let sumMarks = 0;
    let countMarks = 0;
    for (let key in newData) {
        newData[key] = getAverageMark(newData[key]);
        sumMarks += newData[key];
        countMarks++;
    }
    sumMarks = sumMarks / countMarks;
    if (countMarks == 0) sumMarks = 0;
    newData.average = sumMarks;
    return newData;
}

// Задача №3. Расшифровка данных

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
}

function getDecodedValue(secret) {
    return secret ? 'Эмильо' : 'Родриго';
}