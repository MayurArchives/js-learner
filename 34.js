function getRandomRGBColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
     return `rgb(${r}, ${g}, ${b})`;
}
function changeBackgroundColor(){
    document.body.style.backgroundColor= getRandomRGBColor();

}
const button = document.getElementById('colourButton');
button.addEventListener('click', changeBackgroundColor);
