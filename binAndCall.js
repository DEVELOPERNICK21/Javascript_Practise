var Nick = {
    firstName : "Nikhil",
    LastName : "Limitless",
    role : "admin",
    getInfo :  function (){
        console.log(`The First name is ${this.firstName} and the last name is ${this.LastName} with role of ${this.role}`);
    }
}

var Devanshi = {
    firstName : "Devasnhi",
    LastName : "Dev",
    role : "admin",
   
}

// console.log(Nick);
Nick.getInfo();
console.log(Devanshi);
Nick.getInfo.bind(Devanshi)();
// var show = Nick.getInfo.bind(Devanshi);
// show();
Nick.getInfo.call(Devanshi);