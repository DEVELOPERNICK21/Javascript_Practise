var counter = document.querySelector(".counter");
var follower = document.querySelector(".follower");
var green = document.querySelector(".first");
var lightGreen = document.querySelector(".second");
var pink = document.querySelector(".third");
var cream = document.querySelector(".fourth");
var center = document.querySelector(".center");

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
}, 5000);



const getBGColor = (getelements) =>  {
    return window.getComputedStyle(getelements).backgroundColor;
    
};

// var check = getBGColor(pink);

// console.log(check);

// pink.addEventListener("mouseenter", () => {
//     center.style.background = check;
// })


const dynamicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
})
}

dynamicColorChanger(green, getBGColor(green));
dynamicColorChanger(lightGreen, getBGColor(lightGreen));
dynamicColorChanger(pink, getBGColor(pink));
dynamicColorChanger(cream, getBGColor(cream));
