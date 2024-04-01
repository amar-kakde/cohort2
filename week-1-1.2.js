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

main2();