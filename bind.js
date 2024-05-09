const details = {
    "fname": "Anjali",
    "lname": "Bhargav",
    "fulname": function (roll_no ,city){
        console.log(`my name is ${this.fname} ${this.lname}. And my roll no. is ${roll_no} . I live in ${city}.`)
    }
}

const detail = {
    "fname": "Anjali",
    "lname": "Bhargav"
   
}

let fun = details.fulname.bind(detail, "4", "sanganer");
fun();
