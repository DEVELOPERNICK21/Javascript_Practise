var user = 
{
    firstName : "Nick",
    lastName : "Kubde",
    role : " Prime User",
    loginCount : "21",
    isLoggedInFromFacebook : true,
    courseCount : [],
    buyCourse : function (courseName) {
        return this.courseCount.push(courseName);
        // courseName = "React JS"
        // return ` The ${this.firstName} get the ${this.courseName} course`;
        return courseName;
    },

    getCourseCount : function ()  {
        return ` The user ${this.firstName} get the ${this.courseCount.length} courses of name `
    },

    totalInfo :  function () {
        return `
        The user Fullname is ${this.firstName} ${this.lastName}  
        role of user is ${this.role} number of time's login ${this.loginCount}
        and the account is ${this.isLoggedInFromFacebook === true ? `Connected`: `not connected`} to facebook
        and number of course's purchased is ${this.courseCount}`
    }
    
}
        console.log(user.buyCourse("react"));
        console.log(user.getCourseCount());
        console.log(user.buyCourse("Angular"));
        console.log(user.getCourseCount());
        console.log(user.totalInfo());
        console.table(user);
        // console.log(user["loginCount"]);
