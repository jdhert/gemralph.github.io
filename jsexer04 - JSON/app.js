/* app.js */


//alert("ok");


//JSON DATA  
data = [
    {
        "lastname": "Kim",
        "firstname": "Yuna",
        "phone": "010-1234",
        "id": "1"
    },
    {
        "id": "2",
        "firstname": "Mina",
        "lastname": "Lee",
        "phone": "0101-2343",
    }
];

///  When you get data from some JSON resource
// to convert it into an object...
// data = JSON.parse(data);







window.onload = init;

function init() {
    document.querySelector("#save").onclick = jojang;
    showData();
}

function showData() {
    tb = document.querySelector("#datax");
    tb.innerHTML = "";   //delete all inside tbody

    for (i = 0; i < data.length; i++) {
    
        mtr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        td1.innerText = data[i].lastname;
        td2.innerText = data[i].firstname;
        td3.innerText = data[i].phone;
        td4.classList = "text-center";
        td4.innerHTML = "<img onclick='sakje("+ data[i].id 
                          +");' src='images/delete.svg'/>";

        mtr.append(td1);
        mtr.append(td2);
        mtr.append(td3);
        mtr.append(td4);
        tb.append(mtr);
    }
}

function jojang() {
    //console.log("in jojang");
    ln = document.querySelector("#lastname").value;
    fn = document.querySelector("#firstname").value;
    phone = document.querySelector("#phonenumber").value;

    let contact = new Object();
    contact.lastname = ln;
    contact.firstname = fn;
    contact.phone = phone;
    contact.id = Math.floor( (Math.random() * 100000));
    console.log(contact);
    data.push(contact);
    showData();
}

function sakje(id) {
    //console.log(id);
    idx = null;
    for(i = 0; i<data.length; i++){
        if(id == data[i].id){
            idx = i;
       }
    }
    if(idx!=null){
        data.splice(idx,1);
    }

    showData();
}