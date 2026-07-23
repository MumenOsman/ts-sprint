const form = document.getElementById("fuelForm") as HTMLFormElement; 
const fuelInput = document.getElementById("fuelInput") as HTMLInputElement; 
const message = document.getElementById("message") as HTMLParagraphElement; 

form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault(); 

    const rawValue = fuelInput.value.trim()
    const numValue = Number(rawValue); 

    if (rawValue !== "" && !Number.isNaN(numValue) && numValue <= 100 && numValue >= 0) {
        message.textContent = `Fuel level set to: ${numValue}`; 
    } else {
        message.textContent = "Invalid fuel input. Please enter a number between 0 and 100.";
    }
}); 