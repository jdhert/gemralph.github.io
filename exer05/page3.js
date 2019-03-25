/* page3.js */

//alert("ok");



document.querySelector("#redBox")
    .onclick = function(){
        console.log("red is ok");
        document.getElementById("title").style.color = "#f00";
}

document.querySelector("#blueBox")
    .addEventListener("click",function(){
        console.log("blue is ok");
        document.getElementById("title").style.color = "#00f";
});

document.getElementById("greenBox")
    .onclick = function(){
        console.log("green is ok");
        document.getElementById("title").style.color = "#0f0";
}

