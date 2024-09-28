function solution(initialValue) {
    return function(num) {
        return initialValue + num; // Добавяме num към началната стойност и връщаме резултата
    };
}

// Примерен вход и изход
let add5 = solution(5);
console.log(add5(2)); // Изход: 7 (5 + 2)
console.log(add5(3)); // Изход: 8 (5 + 3)

let add7 = solution(7);
console.log(add7(2)); // Изход: 9 (7 + 2)
console.log(add7(3)); // Изход: 10 (7 + 3)
