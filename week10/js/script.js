// document.getElementById("name").innerHTML="Hello this paragraph is changed through JavaScript!" 
// // This is to change the paragraph sentence.

// document.getElementsByClassName("name")[1].innerHTML="Hello World!"
// // This is to change the paragraph sentence through class name. Here the array starts from 0, so the second paragraph is in 1.

// document.getElementsByClassName("name")[1].style.cssText="background:beige;color=brown; font-size:20px";

//to change heading: using Tag
document.getElementsByTagName("h1")[1].innerHTML="DOM Selector"; //second heading changed by js

// if hamilai ekkai choti sabai para change garnu paryo bhane for loop use garne:
var select = document.getElementsByClassName("name");
var i=0; //index ko starting
for(i=0;i<= select.length;i++){
    select[i].style.cssText="color:beige; background-color:purple; font-size:20px";
}
