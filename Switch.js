const user = "user";



switch (user) 
{
    case "admin" :
        {
            console.log("You have all prevlage");
            break;
        }
    case "subadmin" :
        {
            console.log("You have prevlage to add and delete");
            break;
        }
    case "testprep" :
        {
            console.log("You can reply the solution to the problem of user");
            break;
        }
    case "user" :
        {
            console.log("You can consume the test");
            break;
        }
        default :   
        {
            console.log("you are a unverified User");
        }
}