function formatss() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
 
    var name_reg = /^[a-z]+[ ]?[a-z]+$/i;
    var phone_reg = /^\d{10}$/;
    var email_reg = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;
    var password_reg = /[a-zA-Z0-9]{6,50}$/;
 
    console.log(name_reg.test(name_reg));
    console.log(phone_reg.test(phone_reg));
    console.log(email_reg.test(email_reg));
    console.log(password_reg.test(password_reg));
    return false;
 }