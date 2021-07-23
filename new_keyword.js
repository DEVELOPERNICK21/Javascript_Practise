// var User = function(firstName, cursecount) {
//     this.firstName = firstName;
//     this.cursecount = cursecount;
// }


// User.prototype.getDetails = function(){
//     console.log(`The firstname of the user is ${this.firstName} and the number of course taken bt the user is ${this.cursecount}`)
// }
// var Nick = new User("Nick", 5);
// // Nick.getFirstName();
// // Nick.getDetails();

// if(Nick.hasOwnProperty("firstName" && "cursecount"))
// {
// Nick.getDetails();
// };
// // console.log(Nick);

var User = function(firstName, cursecount) {
    this.firstName = firstName;
    this.cursecount = cursecount;
}


User.prototype.getDetails = function(){
    console.log(`The firstname of the user is ${this.firstName} and the number of course taken bt the user is ${this.cursecount}`)
}
var Nick = new User("Nick", 5);
if(Nick.hasOwnProperty("firstName" && "cursecount"))
{
Nick.getDetails();
};
