let b  = document.body;
let heading = document.createElement("h1");
console.log(heading);
heading.innerText = "hello world";
b.append(heading)
console.log(b);
var spanElement = document.createElement("span");
spanElement.textContent = " My name is Mayur Kanyal";
heading.appendChild(spanElement);
spanElement.style.fontSize = "20px";
 