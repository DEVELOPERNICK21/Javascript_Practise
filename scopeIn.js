const nameing = "Nick";

console.log("here is the line 3 " + nameing);

function myName() 
{
    const nameing = "Mr Nick";
    console.log("here is the line 5 " + nameing);

    function name2() 
    {
        console.log("here is the line 9 " + nameing);
    }

    name2();

}

myName();