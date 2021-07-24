var Nick = {
  firstName: "Nikhil",
  LastName: "Developer",
  role: "admin",
  getInfo: function () {
    console.log(`The First name is ${this.firstName} and the last name is ${this.LastName} with role of ${this.role}`);
  },
};

var Sam = {
  firstName: "Sam",
  LastName: "Dev",
  role: "sub - admin",
};

Nick.getInfo();
var show = Nick.getInfo.bind(Sam);
show();


























// Nick.getInfo.call(Sam);
