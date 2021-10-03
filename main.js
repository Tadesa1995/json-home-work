//!---1---
let message = `{
    "name":"roni",
    "message":"u the best ever",
    "email": "therubh@gmail.com"
}`
let messagescontact = JSON.parse(message)
console.log(message);

//!---2---
const carsAndShips = `{
    "carsArray": [
        {"model":"bmw","price":200000,"year":2021},
        {"model":"bentley","price":150000,"year":2020}
    ],
    "shipsArray": [
        {"name":"titanik","year":1960,"Docking":"ashdod","pic":"https://cdn.pixabay.com/photo/2015/03/05/01/46/sailing-ship-659758__340.jpg"},
        {"name":"belfort","year":1999,"Docking":"tel-aviv","pic":"https://cdn.pixabay.com/photo/2016/08/08/15/08/cruise-1578528__340.jpg"}
    ]
}`

let carsAndShipsObject = JSON.parse(carsAndShips)
const container = document.getElementById("container");
for (const element of carsAndShipsObject.shipsArray) {
    container.innerHTML += `
    <p>name: ${element.name}</p>
    <p>year: ${element.year}</p>
    <p>Docking: ${element.Docking }</p>
    <img src="${element.pic}">`
    
}

//!---3---
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const mesInput = document.getElementById("messgeInput");
const btn = document.getElementById("btn");
let object = {};

btn.onclick = () => {
    object = {
        name: nameInput.value,
        Email: emailInput.value,
        Message: messgeInput.value
    }
    console.log(object);
    console.log(JSON.stringify(object));
}

//!---4---
function returnJson(objj) {
    objj = {
        name: nameInput.value,
        Email: emailInput.value,
        Message: mesInput.value
    }
    return console.log(JSON.stringify(objj)); 
}
// in stringify method we change the normal js object to json

btn.onclick = ()=>{returnJson(object)}
// now when we click the button its call the function return json and change the object 
// to json
//!---5---
function returnObject(startjson) {
    startjson = `{
        "name": "${nameInput.value}",
        "Email": "${emailInput.value}",
        "Message": "${mesInput.value}"
    }`
    return console.log(JSON.parse(startjson)); 
}

btn.onclick = ()=>{returnObject(object)}
// in this way we give it back to normal js  object


//!---6---
const userAge = document.getElementById("userAge");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const btn1 = document.getElementById("btn1");
let userObject = {};

function MultiplyAgeByThree(object) {
    object = {
        age: userAge.value*3,
        name: userName.value,
        Email: userEmail.value
    }
    console.log(JSON.stringify(object));
}

btn1.onclick=()=>{ MultiplyAgeByThree(userObject)}