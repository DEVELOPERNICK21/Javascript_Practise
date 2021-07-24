var courses = [
  {
    name: "JavaScript Course",
    price: "5.8 ",
  },
  {
    name: "React Course",
    price: "85.8 ",
  },
  {
    name: "Node Course",
    price: "44.8 ",
  },
  {
    name: "Cyber Security Course",
    price: "84 ",
  },
  {
    name: "C++ Course",
    price: "55",
  },
  {
    name: "Blog Course",
    price: "59.5 ",
  },
];

function showCourses() {
  var ul = document.querySelector(".ul_html");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("listOfCorse");

    const courseName = document.createTextNode(course.name);
    li.appendChild(courseName);

    const span = document.createElement("span");
    span.classList.add("Span_Price");

    const pricehtml = document.createTextNode(course.price + "$");
    span.appendChild(pricehtml);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

showCourses();
const sortIt = document.querySelector(".sortButon");
sortIt.addEventListener("click", () => {
  courses.sort((a, b) => 
    (a.price - b.price)
  );
  showCourses();
});
