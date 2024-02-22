

const Redux = () => {
  let displayValue: string = '';

function appendToDisplay(value: string): void {
  displayValue += value;
  updateDisplay();
}

function clearDisplay(): void {
  displayValue = '';
  updateDisplay();
}

function calculateResult(): void {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay(): void {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = displayValue;
}

  return (
    <div>
      
    </div>
  )
}

export default Redux