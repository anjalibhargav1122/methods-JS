
function info(city , country){
    console.log(`my name is ${this.fname} ${this.lname} and i live at ${city} , ${country}.`);
}

const person = {
    "fname": "Anjali",
    "lname": "Bhargav",
    "fulname": info
}

const person2 = {
    "fname": "Kajal",
    "lname": "Panchal"
}

const person3 = {
    "fname": "Muskan",
    "lname": "Badgujjar"
}

person.fulname.call(person , "Sanganer" , "Pakistan");
person.fulname.call(person2 , "Jaipur" , "India");
// person2.fulname.call(person3);

const show = person.fulname.call(person3 , "Newyork" , "U.S.");
// console.log(show);
