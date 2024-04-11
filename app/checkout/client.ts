
const address = document.getElementById("address") as HTMLInputElement
const printButton = document.getElementById("review") as HTMLButtonElement
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement


function printOrder(): void { // Prints value
    const add = address.value;
    printValue.textContent = add.toString()
}

printButton.addEventListener("click", printOrder) // When the button is pressed, printOrder function is run 
