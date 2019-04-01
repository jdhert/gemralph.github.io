/* app.js 
 # Calculator Exercise
 # Date : Today
*/


//alert("ok");
//this will only run after the page is loaded....
window.onload = function(){
    document.getElementById("b_add").onclick=function(ev){
        console.log(ev);
        compute('+')
     };
     document.getElementById("b_sub").onclick=function(){
        compute('-')
     };
     document.getElementById("b_div").onclick=function(){
        compute('/')
     };
     document.getElementById("b_mul").onclick=function(){
        compute('*')
     };
}


function compute(op){
    let a = document.querySelector("#n1");
    let b = document.querySelector("#n2");
    let c = 0;
    switch(op){
        case '+': c = (parseInt(a.value)  + parseInt(b.value)); 
                break;
        case '-': c = (parseInt(a.value)  - parseInt(b.value)); 
                break;
        case '/': c = (parseInt(a.value)  / parseInt(b.value)); 
                break;
        case '*': c = (parseInt(a.value)  * parseInt(b.value)); 
                break;
        default: 
    }
    //div tag - innerHTML / innerText
    document.querySelector("#output").innerText = c;
    //input tag
    document.querySelector("#output2").value = c;
}







