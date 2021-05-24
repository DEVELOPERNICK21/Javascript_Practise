// const email = false;
// const google = true;
// const facebook = false;

const loginSucess = true;
const emailVerified = true;
const creditCard = true;


if(loginSucess)
{
    console.log("Login successfully");
    if(emailVerified)
    {
        console.log("Email Verified");
            }
    if(creditCard)
        {
            console.log("Valid Credit Card Details");
        }

    }

if(loginSucess && emailVerified && creditCard)
{
    console.log("Now You can Purchase")
}


// if(email || google || facebook)
// {
//     console.log("Login Succes");
// }