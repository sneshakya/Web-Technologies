alert("Don't make noise in class!");
// alert prints the message you want the reader to read on the top part of the website inside a box.
console.log("Something");
// console.log is to identify any error and javascript's working/functionality;

console.log(typeof document)
// document ko type herna lai use gareko 

console.log(document.getElementById("paragraph").innerHTML)
// This is to call the object/select the element we want to change. ("paragraph")= is the name we gave to the id in div. 
// innerHTML= used to get the thing written in the selected element.

document.getElementById("paragraph").innerHTML="J lekhe ni hunxa!"
// innerHTML="" double quotation bhitra chai hamilai change garnu parne paragraph lekhne. 

// document.getElementById("paragraph").style.color="white";
// // (if css ma color change garnu cha bhaye mathi ko use garne) 
// document.getElementById("paragraph").style.backgroundColor ="brown";
// // (if css ma background color change garne bhaye chai mathi ko use garne )
document.getElementById("paragraph").style.cssText ="color:white; background: black";
// yo chai css ko sabai element lai ekkai choti change garnu cha bhaye use garne. 

var age= 19;
var name="sneha";
var phonenumber="9813655698";

console.log(age);
console.log(name);
console.log(phonenumber);
// console.log(typeof age);
// typeof le chai kun chai type ko data ho bhanera dekhauxa for RegExp. number, string 

// document.getElementById("message").innerHTML="Hello"+" "+"I am"+" "+name+"" + "I am"+" "+age+"years old"+"!". An easier way to write it is: ;

document.getElementById("message").innerHTML=`Hello I am ${name}, I am ${age} years old.`;
// {&..}= this helps you to select the console.log element that you want. 

console.log(prompt("Enter a name: "))
// to take user's input 
