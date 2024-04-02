//write a program to greet a person givern their first and last name

function greeting(first_name, last_name){
    return `Hello, ${first_name} ${last_name}`;
}

function main(){
    let first_name = 'Abhimanyu';
    let last_name = 'Kuru';

    console.log(greeting(first_name, last_name));
}

//main();

//Write a program to greet a person based on their gender {if else}

function greeting_on_gender(first_name, last_name, gender){
    if(gender=='male'){
        return `Hello, Mr.${first_name} ${last_name}`;
    }
    else if(gender=='female')
    {
        return `Hello, Ms.${first_name} ${last_name}`;
    }
    else
    {
        return `invalid gender`;
    }
}

function main2(){
    const first_name = 'Akash';
    const last_name = 'Singh';
    const gender = 'female'

    console.log(greeting_on_gender(first_name, last_name, gender));
}

//main2();

//write a program to print 0-1000 using for loop

function print_0_to_1000(number){
    for (let i = 0; i<number; i++){
        console.log(i);
    }
}

//print_0_to_1000(1001);

//Array

// let numbers = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// let update_numbers = numbers.map((num) =>{return num ** 2});

// console.log(update_numbers)

function even_numbers(numbers){
    for (let i = 0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0){
            console.log(numbers[i]);
        }
    }
}

function biggest_number_in_array(numbers){
    if(numbers){
        let max = numbers[0];

        for(let i = 0; i<numbers.length; i++){
            if(max < numbers[i]){
                max = numbers[i];
            }
        }
        console.log(`Bigest number in array ${numbers} : ${max}`);
    }
}

// even_numbers([21, 23, 65, 12, 87, 55, 88])
// biggest_number_in_array([21, 23, 65, 12, 87, 55, 88]);

Users = [
    {
        name:'ankush mule',
        age:25,
        gender:'male'
    },
    {
        name:'ankita dhingra',
        age:25,
        gender:'female'
    },
    {
        name:'arun pawar',
        age:20,
        gender:'male'
    },
    {
        name:'alice wonderland',
        age:29,
        gender:'female'
    },
]

function print_complex_object_data(Users){
    for (let i = 0; i<Users.length; i++){
        if(Users[i].gender == 'female'){
            console.log(Users[i]);
        }
    }
}

//print_complex_object_data(Users);

//reverse elements of an array

let array1 = [3, 45, 0, -2, -45, 34, 1, 9, 6];
function reverse_array(numbers){
    let reversed = [];
    console.log(numbers.length);
    for(let i = numbers.length - 1; i>=0; i--){
        reversed.push(numbers[i]);
    }
    console.log(reversed);
}
// reverse_array(array1);


//callback function

function sum(a, b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function result(a, b){
    return sum(a, b);
}

// console.log(result(15,41));

function using_callback(a, b, fn){
    return fn(a, b);
}

// console.log(using_callback(15,41, sub));

//SetTimeout

function greet1(){
    console.log('Hello, Martian...');
}

// setTimeout(greet1, 3000);

//setInterval

// setInterval(greet1, 1000);

//counter to count from 30 to 0

function counter(){
    for(let i = 30; i >= 0; i--){
        console.log(i);
    }
}
// counter();

const d1 = new Date();
function Sample(){
    const d2 = new Date();
    const t2 = d2.getTime();
    const t = t2 - t1;
    console.log(`time to execute : ${t}`);
}

// const t1 = d1.getTime();
// setTimeout(Sample, 1000);

function show_time(){
    console.clear();
    const d = new Date();
    const HH = d.getHours();
    const MM = d.getMinutes();
    const SS = d.getSeconds();

    console.log(`${HH}:${MM}:${SS}`);
}

// setInterval(show_time, 1000);

