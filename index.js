// // const interestRate=0.3;
// //  interestRate=1;
// // console.log(interestRate)

// // const person = {
// //     name: 'Ani',
// //     age:'21',
// //     shoeSize:'4',
// // }; 

// // let {name,age,shoeSize} =person;

// // console.log(name);
// // console.log(age);
// // console.log(shoeSize);

// // console.log(person.name);

//  let a='0',
//      b='0',
//      c='0';

// console.log(a);
// console.log(b);
// console.log(c);


// let name= 'aneeqa';
//     surname= 'brown';

// console.log(aneeqa+brown);

// let person ={
//     name: 'aneeqa',
//     surname: 'brown'
// }
// let {aneeqa+brown}=person
// console.log{aneeqa=brown}


// let Name = "Aneeqa",
// lastName = "Brown";

// console.log(Name +' ' +lastName)

// let numberVar = 5;
// console.log (numberVar*5);  

// const firstName = "Aneeqa";
// // firstName = "Brown";

// let obj={
//     cat:'meow',
//     dog:'woof'
// };

// let dog='cat'
// // let sound= obj [dog]
// let sound= obj.dog
// console.log(sound);  

// const array= [
//     'aneeqa',
//     'abdul',
//     12,
// ];

// console.log(typeof array[2 ])

    // let fruit = 'apple'; 
    // if (fruit == 'strawberry') {
    //     console.log(fruit);
    // }
    // else if (fruit == 'apple') {
    //     fruit = 'pear';
    //     console.log(fruit);
    // }
    // else{
    //     console.log(fruit);
    

    // const cars = [
    //     'toyota',
    //     'bmw',
    //     'vw'
    // ];

    // for (const x of cars) {
    //     console.log(x);
    // }

    // let person ={
    //     name: 'ani',
    //     surname: 'brown',
    //     shoeSize: 4
    // };

    // for (const people in person) {
    //     console.log(people)
    // }

    // let x = 1; 
    // while (x<11){
    //     console.log(x);
    //     i++;
    //     break;
    // }

    // for (let i = 1; i < 21; i++) {
    //     if (i% 2 === 0){
    //         document.write (i+ "even number" + '<br/>');
    //     }else{
    //         document.write(i + "odd number"+'<br/>');
    //     }
    // };

    // for (let i = 1; i < 21; i++){
    //     if (i % 2 === 0){
    //         document.write (i+ "even number" + '<br/>');
    //     }else{
    //         document.write(i + "odd number"+'<br/>');
    //      }
    // }

   //   const cars = [
   //      'toyota',
   //      'opal',
   //      'nissan',
   //      'fiat',
   //      'subaru'
   //   ];

   //   let x = 0;
   //    console.log(cars);

   //    while (x<5){
   //      console.log('this ' +cars[x] + 'has an index of' + x );
   //      x++;
   //    };
   //   for(x = 0; x<5; x++){
   //      if(x <=4){
   //          console.log('this ' +cars[x] + 'has an index of' + x );
   //      }
   //   }

//    const number{

//    console.log(number)
//    }

// let name = prompt('');

// function greet () {
//     console.log('hello  '+  name)
// }

// greet();

// function addIt (10 + 2){
//     console.log(numb1 + numb2);
// };

// addIt();


// function calculatePrice() {
//     let amount= document.getElementById('number').value;
//     let price= document.getElementById('cost').value;
//     let total= amount * price; document.getElementById('total').value= total;


    
// }

 
// let username = prompt('what is your name?')
// document.write(username)

// function greet () {
//     console.log('hello  '+  name)
// }

// greet(); 

let myName = prompt('what is your name?');

document.getElementById(heading1).innerHTML=myName

function greet(name)
{
    alert("Greetings Hooman " + name)
} 

greet(myName);

// let username = prompt('Your name doesnt exist please fill out form')
// document.write(username)

function please () {
    // alert('Your name doesnt exist please fill out form')
    alert('Hii ,' + myName +' please complete the form below')

}

please(); 


const form = document.getElementById('sumit');
// const name = form.elements['name'];
const animals = form.elements['animals'];
// const email = form.elements['email'];

// getting the element's value
// let fullName = name.value;
let animalName= animals.value;

// let emailAddress = email.value;


let animal1 = document.getElementById('animal1').value;


let person = {
    animals: [
        animal1,
        animal2,
        animal3,
        animal4,
        animal5

    ]
}; 

for (const animal of person.animals) {
    document.getElementById('animalList').innerHTML = '<li>' + animal + '</li>';  
}
 