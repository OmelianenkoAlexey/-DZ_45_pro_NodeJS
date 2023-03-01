// ! ДЗ 48. Калькулятор на NodeJS

// const calculator = require('./calculator');

// console.log(calculator.add(10, 2)) // 12
// console.log(calculator.sub(12, 5)) // 7
// console.log(calculator.mult(7, 4)) // 28
// console.log(calculator.div(28, 2)) // 14

// Задание:

// 1) Сделать модуль (npm init или через модули js)

// 2) реализовать модуль calculator

// 3) каждая функция действия (add, sub, div, mult) должна быть в отдельном файле

const calculator = require('./components/calculator');

console.log(calculator);
console.log(calculator.add(10, 2)) // 12
console.log(calculator.sub(12, 5)) // 7
console.log(calculator.mult(7, 4)) // 28
console.log(calculator.div(28, 2)) // 14




