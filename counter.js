var counter = document.querySelector(".counter");
var follower = document.querySelector(".follower");

let count = 1;

setInterval(() => {
    if(count < 1000)
    {
        count++;
        counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    follower.innerText ="INSTAGRAM FOLLOWER ! ";
}, 5000)