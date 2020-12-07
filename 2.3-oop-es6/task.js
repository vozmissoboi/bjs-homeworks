'use strict';

// Задача №1. Печатное издание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
    }
    type = "magazine";
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
    type = "book";
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

// Задача №2. Библиотека

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let searchedBook = this.findBookBy("name", bookName);
        this.books.splice(searchedBook, 1);
        return searchedBook;
    }
}

// Задача №3. Школьный журнал

class StudentLog {
    constructor(name) {
        this.name = name;
        this.journalClass = {};
    }

    getName() {
        return this.name;
    }

    // Добавляет оценку по предмету
    addGrade(grade, subject) {
        if (this.journalClass[subject]) {
            if (grade >= 1 && grade <= 5) {
                this.journalClass[subject].push(grade);
            } else {
                return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
            }
        } else {
            if (grade >= 1 && grade <= 5) {
                this.journalClass[subject] = [grade];
            } else {
                return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
            }
        }
        return this.journalClass[subject].length;
    }

    //  Возвращает среднюю оценку по предмету
    getAverageBySubject(subject) {
        for (let i = 0; i < Object.keys(this.journalClass).length; i++) {
            if (Object.keys(this.journalClass)[i] === subject) {
                let sum = 0;
                for (let j = 0; j < this.journalClass[subject].length; j++) {
                    sum += this.journalClass[subject][j];
                }
                return sum / this.journalClass[subject].length;
            }
        }
        return 0;
    }

    //  Возвращает среднюю оценку по всем предметам
    getTotalAverage() {
        let sum = 0;
        let counter = 0;
        for (let subject in this.journalClass) {
            sum += this.getAverageBySubject(subject);
            counter++;
        }
        return sum / counter;
    }
}