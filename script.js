const display = document.getElementById('calculator-screen'); 
    const buttons = document.querySelectorAll('.number, .operator'); 
    const clearButton = document.getElementById('clear'); 
    const equalButton = document.getElementById('equals'); 
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display.value += button.innerHTML; 
        });
    });

    clearButton.addEventListener('click', () => {
        display.value = ''; 
    });

    equalButton.addEventListener('click', () => {
        try {
            display.value = eval(display.value); 
        } catch {
            display.value = 'Error'; 
        }
    });

