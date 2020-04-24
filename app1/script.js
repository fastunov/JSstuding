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

for (let i=0; i < 2; i++) {
    let answerItem = prompt("Введите обязательную статью расходов в этом месяце"),
        answerExpenses= prompt("Во сколько обойдется?");
    
    appData.expenses[answerItem] = answerExpenses;
}

alert(appData.budget / 30);
alert("End of file");
