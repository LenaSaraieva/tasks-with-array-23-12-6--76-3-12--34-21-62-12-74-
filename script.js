// массив [23, 12, 6, -76, 3, 12, -34, 21, 62, 12, 74]
// 1посчитай количество числа 12
// 2из этого массива сделай 2 массива с числами меньше 0 и больше нуля
// 3из этого массива сделай 2 массива с четными и нечетными числами
// 4посчитай количество отрицательных и положительных чисел
// 5посчитай количество четных и нечетных чисел
// 6сложи все положительные числа 
// 7вывети в консоль все числа, которые делятся на 3


let arr = [23, 12, 6, -76, 3, 12, -34, 21, 62, 12, 74];
let num12 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 12) {
        num12++;
    }
}
console.log("Кількість числа 12:" + num12);//количество числа 12

let arrNegative = [];
let arrPositive = [];
let  arr1 = 0;
let  arr2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arrNegative [arr1++] = arr[i];
        arr1++;
    }  else {
    arrPositive [arr2++] = arr[i];
        arr2++;
    }
}
console.log(arrNegative);
console.log(arrPositive);
//console.log("Масив з негативними числами:" + arrNegative);
//console.log("Масив з позитивними числами:" + arrPositive); //из этого массива сделай 2 массива с числами меньше 0 и больше нуля

let arrEven = [];
let arrOdd = [];
let arr3 = 0;
let arr4 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arrEven [arr3++] = arr[i];
        arr3++;
    } else {
        arrOdd [arr4++] =  arr[i];
        arr4++
    }
}
console.log("Масив з парних чисел:" + arrEven);
console.log("Масив з непарних чисел:" + arrOdd);//из этого массива сделай 2 массива с четными и нечетными числами



let negativeNumbers = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeNumbers++;
    }
}
console.log("Негативних чисел всього:" + negativeNumbers);//посчитай количество отрицательных чисел

let positiveNumbers = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveNumbers++;
    }
}
console.log("Позитивних чисел всього:" + positiveNumbers);//посчитай количество положительных чисел


let evenNumbers = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers++;
    }
}
console.log("Кількість парних чисел:"+ evenNumbers);//посчитай количество четных чисел 


let oddNumbers = 0;
for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] % 2 !== 0) {
        oddNumbers++;  
    }
}
console.log("Кількість непарних чисел:"+ oddNumbers);//посчитай количество нечетных чисел


let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        sum = sum + arr[i];
    }
}
console.log("Сума позитних чисел:" + sum); //сложи все положительные числа 


 

let division3 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        console.log(" діляться на 3: " + arr[i]);
        division3++;
    }
}
console.log("Чисел, які діляться на 3 всього:" + division3);// вывети в консоль все числа, которые делятся на 3