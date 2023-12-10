let arr = [23, 12, 6, -76, 3, 12, -34, 21, 62, 12, 74];
let num12 = 0;
let i = 0;

while (i < arr.length) {
    if (arr[i] === 12) {
        num12++;
    }
}
console.log("Кількість числа 12:" + num12);//количество числа 12



let negativeNumbers = 0;
while (i < arr.length) {
    if (arr[i] < 0) {
        negativeNumbers++;
    }
}
console.log("Негативних чисел всього:" + negativeNumbers);//посчитай количество отрицательных чисел

let positiveNumbers = 0;
while (i < arr.length)  {
    if (arr[i] > 0) {
        positiveNumbers++;
    }
}
console.log("Позитивних чисел всього:" + positiveNumbers);//посчитай количество положительных чисел


let evenNumbers = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        evenNumbers++;
    }
}
console.log("Кількість парних чисел:"+ evenNumbers);//посчитай количество четных чисел 


let oddNumbers = 0;
while (i < arr.length)  {
    if (arr[i] % 2 !== 0) {
        oddNumbers++;  
    }
}
console.log("Кількість непарних чисел:"+ oddNumbers);//посчитай количество нечетных чисел

let sum = 0;
while (i < arr.length)  {
    if(arr[i] > 0) {
        sum = sum + arr[i];
    }
}
console.log("Сума позитних чисел:" + sum); //сложи все положительные числа 


let division3 = 0;
while (i < arr.length) {
    {
        if (arr[i] % 3 === 0) {
            console.log(" діляться на 3: " + arr[i]);
            division3++;
        }
    }
    console.log("Чисел, які діляться на 3 всього:" + division3);// вывети в консоль все числа, которые делятся на 3
}
