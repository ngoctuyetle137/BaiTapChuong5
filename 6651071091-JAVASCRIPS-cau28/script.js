const textElement = document.getElementById("text");
const buttonElement = document.getElementById("jsstyle");

// Bắt sự kiện click (thay vì dùng onclick trực tiếp trong HTML)
buttonElement.addEventListener("click", jsStyle);

function jsStyle() {
  // Thêm/bớt class CSS để đổi giao diện
  textElement.classList.toggle("active-style");
}