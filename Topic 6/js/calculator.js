// Add value to display
function appendValue(value)
{
  document.getElementById("display").value += value;
}

// Clear display
function clearDisplay()
{
  document.getElementById("display").value = "";
}

// Calculate result
function calculate()
{
  let expression = document.getElementById("display").value;

  try
  {
    let result = eval(expression);
    document.getElementById("display").value = result;
  }
  catch
  {
    alert("Invalid calculation");
  }
}
