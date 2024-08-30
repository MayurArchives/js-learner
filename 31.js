 
    const inputField = document.getElementById('inputField');
    const displayText = document.getElementById('displayText');

    inputField.addEventListener('input', () =>{
        displayText.textContent = inputField.value;
    });   
