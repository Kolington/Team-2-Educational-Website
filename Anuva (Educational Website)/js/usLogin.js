function funcLogin() {
    var email = document.forms["usLogin"]["email"];
    var password = document.forms["usLogin"]["password"];

    if (email.value == "") {
        window.alert('Please enter your Email');
        email.focus;
        return false;
    }
    if (password.value == "") {
        window.alert('Please enter your Password');
        password.focus;
        return false;
    } else if (password.value.length < 8) {
        window.alert("PASSWORD IS NOT STRONG");
    }
    return true;
}