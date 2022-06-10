function funcSignup() {
    var fullname = document.forms["nwSignup"]["fullname"];
    var email = document.forms["nwSignup"]["email"];
    var password = document.forms["nwSignup"]["password"];
    var confirmpassword = document.forms["nwSignup"]["confirmpassword"];

    if (fullname.value == "") {
        window.alert("Please enter your Fullname");
        fullname.focus;
        return false;
    }
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
    if (confirmpassword.value == "") {
        window.alert('Please enter your Password Again');
        confirmpassword.focus;
        return false;
    } else if (confirmpassword.value.length < 8) {
        window.alert("PASSWORD IS NOT STRONG");
    }
    return true;
}