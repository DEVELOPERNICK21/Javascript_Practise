// In this we can understand about the context in JS 
sayHello();

function sayHello()
{
    console.log("Hello Nick");
}


const myName = function (a) 
{
    const bill = a;
    const totalPaid =bill + 2;
    console.log(totalPaid);
}

myName(5);