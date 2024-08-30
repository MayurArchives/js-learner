function getRandomRGBColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
     return `rgb(${r}, ${g}, ${b})`;
}
function changeBackgroundColor(){
    setInterval(() =>{
        document.body.style.backgroundColor= getRandomRGBColor();
    },1000);

}
const button = document.getElementById('colourButton');
button.addEventListener('click', changeBackgroundColor);
