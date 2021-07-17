var User = function(firstName, cursecount) {
    this.firstName = firstName;
    this.cursecount = cursecount;
}

User.prototype.getFirstName = function () {
    console.log(`Get the Name ${this.firstName}`);
}

var Nick = new User("NIck", 5);
Nick.getFirstName();

console.log(Nick);