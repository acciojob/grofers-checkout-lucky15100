// Function to calculate the total price
const calculateTotalPrice = () => {
  const itemElements = document.querySelectorAll(".item");
  const priceElements = document.querySelectorAll(".price");
  let totalPrice = 0;

  // Loop through the item and price elements to calculate the total
  for (let i = 0; i < itemElements.length; i++) {
    const price = parseFloat(priceElements[i].textContent); // Parse price as a number
    totalPrice += price;
  }

  return totalPrice;
};

// Function to update the total price row in the table
const updateTotalPriceRow = () => {
  const table = document.querySelector("table");
  const totalPrice = calculateTotalPrice();

  // Create a new row for the total price
  const totalRow = table.insertRow(-1);
  const cell1 = totalRow.insertCell(0);
  cell1.colSpan = 2;
  cell1.textContent = `Total Price: Rs ${totalPrice}`;

  // Update the table caption
  const caption = table.querySelector("caption");
  caption.textContent = "Monthly savings (Updated)";
};

const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
  updateTotalPriceRow();
});
