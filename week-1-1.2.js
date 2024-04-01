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