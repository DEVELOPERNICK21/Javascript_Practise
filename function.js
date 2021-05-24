function add() 
{
    const num1 = 4;
    const num2 = 6;

    return(num1 + num2);
}

console.log(add());

const addition = function add() 
{
    const num1 = 4;
    const num2 = 45;

    return(num1 + num2);
}

console.log(addition());

addname = (num1, num2) => 
// addar => (num1, num2)  
{

    return(num1 + num2);
}

console.log(addname(4,15));


const userCheck = (fname, role) =>
{
    switch (role)
    {
        case "admin":
            return `${fname} you are admin and you have full access`;
        case "subadmin":
            return `${fname} you are sub-admin and can delete and add user`;
        case "testperp":
            return `${fname} you are testprep and you can reply`;
        case "user":
            return `${fname} you are admin and you can consume the test`;
        default:
            return `${fname} you are trial user`;
    }
}

console.log(userCheck("Nick", "admin"));