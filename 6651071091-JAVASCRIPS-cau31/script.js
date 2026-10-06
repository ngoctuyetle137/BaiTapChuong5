const selectElement = document.getElementById("colorSelect");
const removeButton = document.getElementById("removeBtn");

removeButton.addEventListener("click", removeColor);

function removeColor() {
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex !== -1) {
    selectElement.remove(selectedIndex);
  }
}