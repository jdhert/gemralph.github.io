/* app.js */


//alert("ok");


window.onload = init;

function init(){
    document.querySelector("#save").onclick = jojang; 
}

function jojang(){
    //console.log("in jojang");
    ln = document.querySelector("#lastname").value;
    fn = document.querySelector("#firstname").value;
    phone = document.querySelector("#phonenumber").value;

    //console.log(ln);
    //console.log(fn);
    //console.log(phone);

    tb = document.querySelector("tbody");
    mtr = document.createElement("tr");
    /*mtr.innerHTML = "<td>"+ ln +"</td><td>" 
                            +fn + "</td><td>" 
                            + phone + "</td>";*/
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td1.innerText = ln;
    td2.innerText = fn;
    td3.innerText = phone;

    mtr.append(td1);
    mtr.append(td2);
    mtr.append(td3);
    tb.append(mtr);


}