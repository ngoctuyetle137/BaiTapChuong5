const formElement = document.getElementById("form1");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const ho = formElement.elements["fname"].value;
  const ten = formElement.elements["lname"].value;

  alert("Họ và tên: " + ho + " " + ten);
});