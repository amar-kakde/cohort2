//write a program to greet a person givern their first and last name

function greeting(first_name, last_name){
    return `Hello, ${first_name} ${last_name}`;
}

function main(){
    let first_name = 'Abhimanyu';
    let last_name = 'Kuru';

    console.log(greeting(first_name, last_name));
}

main();
