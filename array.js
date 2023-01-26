const numbers = [54,62,36,57,42,25,36]

// sum = 0
// for (let i = 0; i <numbers.length; i++ ) {
//     console.log(numbers[i]);
//     sum += numbers[i] *5;
// }
// console.log('total sum is:',sum + ', ' + numbers.length);

// let sum = 0;

// numbers.forEach(function(value, i) {
//     //sum += value
//     if (i <= 3){
//         sum += value
//     }
// });
// console.log('sum is:',sum);  


//create only number of array from given array where various types of data are stored (imperative way)

const array = [1,2,6,8,null,false,5,7,'test',"",4];

let count = 0;
for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length - 1; j++) {
        if (!array[j] || typeof array[j] !== 'number') {
            array[j] = array[j + 1];
            array[j + 1] = undefined;
    }
}
    if (array[i] === undefined) {
        count++;
    }
}
array.length -= count;
console.log(array);


// Declarative way

// const arr = [1,2,6,8,null,false,5,7,'test',"",4];

// const filteredArray = arr.filter(function (value) { 
//     return typeof value === 'number';

// });
// console.log(filteredArray); 
 

//another array

const arr = [
    {id :1  ,value :10},
    {id :2  ,value :20},
    {id :3  ,value :30},
    {id :4  ,value :40},
    {id :5  ,value :50}
];

    // Here use find index

const index = arr.findIndex(function (value) { 
    return value.id === 4;
});
arr[index].value = 300;
console.log(arr);

    // here use find method

const obj = arr.find(function (value) { 
    return value.id === 4;
});
obj.value = 500;
console.log(obj);
console.log(arr);


//delete id 4 -> It can be possible by splice(mutable) or filter(Immutable) way


 













