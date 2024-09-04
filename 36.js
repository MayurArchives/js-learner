// const red = document.getElementById("redSlider").value;
// const green = document.getElementById("greenSlider").value;
// const blue = document.getElementById("blueSlider").value;

// console.log(red,green,blue);


// function changeBackgroundColor() {

//     // document.body.style.backgroundColor =  `rgb(${red}, ${green},${blue})`;


//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }

// function applyBackgroundColor() {
//     changeBackgroundColor();
//     alert(`Background color applied: rgb(${red}, ${green}, ${blue})`);

// }


let red = document.getElementById("redSlider");
let green = document.getElementById("greenSlider");
let blue = document.getElementById("blueSlider");
let body = document.body;
let btn = document.getElementById("btn");

const handleChange = () => {
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;
    console.log(redValue);

    return [redValue, greenValue, blueValue];
}


const handleClick = () => {
    let [r, g, b] = handleChange();
    console.log(r, g, b);
    body.style.background = `rgb(${r},${g},${b})`;
}

handleClick();
