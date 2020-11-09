"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь

    if (isNaN(percent && contribution && amount && date)) {
        return "Параметр содержит неправильное значение";
    }

    let totalAmount;
    let bodyOfCredit = amount - contribution;
    let currentDate = new Date();
    let paidMonths = (date.getFullYear() - currentDate.getFullYear()) * 12 + (date.getMonth() - currentDate.getMonth()); //количество выплачиваемых месяцев
    percent = percent / 100 / 12; //1/12 процентной ставки
    let monthlyPayment = bodyOfCredit * (percent + percent / (Math.pow((1 + percent), paidMonths) - 1)); //ежемесячная оплата
    totalAmount = monthlyPayment * paidMonths; //итоговая сумма
    totalAmount = Number(totalAmount.toFixed(2));
    console.log(totalAmount);
    return totalAmount;

}


function getGreeting(name) {
    // код для задачи №2 писать здесь

    if (name == null || name == "" || name == undefined) {
        name = 'Аноним';
        console.log(`Привет, мир! Меня зовут ${name}.`);
    } else {
        console.log(`Привет, мир! Меня зовут ${name}.`);
    }
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    return greeting;
}