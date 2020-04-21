"use strict";

let money = prompt ("Ваш бюджет на месяц?");
let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income:[],
    savings : false
};

let answer11 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer12 = prompt("Во сколько обойдется?"),
    answer21 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer22 = prompt("Во сколько обойдется?");

appData.expenses[answer11] = answer12;
appData.expenses[answer21] = answer22;

alert(appData.budget / 30);