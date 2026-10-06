function getFormvalue(event) {
    if (event) event.preventDefault();
    let firstName = $('input[name="fname"]').val();
    let lastName = $('input[name="lname"]').val();
    alert('Họ và tên: ' + firstName + ' ' + lastName);
}