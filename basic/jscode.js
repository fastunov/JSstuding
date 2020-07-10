'use strict'

function convertString (s, name, age) {
    if (age <= 0 ) {
        age = 'Еще не родился!'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const name1 = 'Петрушка'
const age1 = 30

console.log (convertString`Имя: ${name1} Возраст ${age1}`)

const name2 = 'Фолгер'
const age2 = -10

console.log (convertString`Имя: ${name2} Возраст ${age2}`)