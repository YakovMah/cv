
// ---------------------------------------------------------------
// // console log % alert
//
// console.log('Hello World')
// alert("Walcome To Yakov Mahfoda Site");
//-------------------------------------------------------------

// // ##  varibles
//
// let myname = " Yakov";
// console.log(name);
//


// ruls to use
//cannot be reserved keyword , like true vs false,or,if
// should br meaingful
// cannot start with number (1name)
// cannot contain a space or hyphen(-)
// are case-sensitive


// firstName Need this varible need first World
// need lower case and after name uppercase
// let firstName; // camel contation

// if i want to declare multiplay varible
// Example name='Yakov' , lastname = 'Mahfoda'

// let verible is good to use it but not all the time
// beucuse if i use them all the time i get errors or bugs

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// verible const is uniq for declare on virible
//should be not to chang
//
// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
//
// let thecherName = 'Mose'; // string Literal
// let age = 30 // number Literal
// let isApproved_false = false; // Boolean Literal false
// let isApproved_true = true; // Boolean Literal True
// let firstName_un = undefined;
// let lastname = null; // this function for use if i want clear a varibale

// in javaScrip no Have Float Number All Numbers I typeOf --> number

// Dynamic Typing

// can to chahne the veribles with the run the programing from console

// Primitives/value types is :

// String
// Number
// Boolean
// undefined
// null -- > this typeof is object

// Refrence Types is :

// Object - like the real time like person or some kind of object
// arry
// function

// {} object Literal

// let person = {
//   name: 'dodo',
//   age: 30
// };
//
// console.log(person);
//
// // EXample For Object {name: 'ymahfoda', age: 30}
// // age: 30
// // name: "ymahfoda"
// // [[Prototype]]: Object
//
// // if i want to chaang the name of object i get inside person.name = 'Yakov';
//
// // ## Use Dot Notation
//
// person.name = 'Yakov';
//
// // or
//
// console.log(person.name)
//
// // ## Bracket Notation:
// person['name'] = 'Mahfoda';
// console.log(person.name)
// Or USe Get inside propperty Notation use ;

// How is Beter the Dont Notation is best for use bucuse is more shorter

// -----------------------------------------------------------------------

// ## arrys

// let selectedColors = [ 'red','blue'];// the first index elemnt is red = 0, blue = 1
// selectedColors[2] = 'green'
// console.log(selectedColors) // in other Lenguge type in arry need Same Item in arry
// // in Java Script in arry is posible to store diffrent types of item like Number
// // or String etc.
//
// //EXample:

//
// let selectedColors = [ 'red','blue',1];// the first index elemnt is red = 0, blue = 1
// console.log(selectedColors[2])


// in arry also the java is can chang varibles in run time

// let selectedColors = [ 'red','blue',1];// the first index elemnt is red = 0, blue = 1
//  console.log(selectedColors.length); // .length is insid propotis what is length is index



// Function
// like many other function programing languce the function is some part of code for
// excute command fast with writh only the name of the function like greet
// and after that what have in the {} is go excute the blok of code

// // Note ! no need after { } to put }; semi colon  in the end

// function greet(){
// console.log('Hello World');
// }
//
// greet();

// to function have input more intersting and no borring to add to function add premter in Function
// the name  like that example :\

// this down function is withe premter of name = " Yakov Mahfoda"

// function greet(name) { // Name insid (name) = Premter
// console.log('Hello ' + name);
// }
//
// greet('Linoy Ayase'); // Yakov Mahfoda Is Argument

// Very Importent Note If i Add New Varibles in the function i need it to add Importent
// more Argument example like that why if i dont do that i except error the
// value is undifined is defult of verible dont find that:
//
// function greet(name,lastName) { // Name insid (name) = Premter
// console.log('Hello ' + name + ' ' + lastName);
// }
//


// greet('Linoy' , 'Ayash'); // Yakov Mahfoda Is Argument
function square(number) { // number is premter
// return is keyword resarvd not to use it for varibles is return value in function or stetment
  return number * number ; // number * number; is 2 varibles note squre is resarvd keyword

}

// let number  = square(2); // this varible it for function can use it

// Or use To remove the let number  = square(2); and add only -- > console.log(square(2));
// console.log(number); // this line print the varibles and caculat from the function
console.log(square(2));
