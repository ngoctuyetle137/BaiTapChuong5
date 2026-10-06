const tableElement = document.getElementById("sampleTable");
const buttonElement = document.getElementById("insertBtn");
buttonElement.addEventListener("click", insertRow);
function insertRow() {
  const newRow = tableElement.insertRow(0);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
}