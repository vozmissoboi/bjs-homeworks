"use strict";

// Задача №1. Форматтер чисел

function parseCount(value) {
    if (isNaN(Number.parseInt(value))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);

    } catch (error) {
        return error;
    }
}

// Задача №2. Треугольник

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        const p = this.a + this.b + this.c;
        return p;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea: function() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter: function() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}