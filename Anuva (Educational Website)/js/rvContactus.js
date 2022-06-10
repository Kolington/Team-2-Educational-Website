function funcContact() {
    var firstname = document.forms["rvContactus"]["firstname"];
    var lastname = document.forms["rvContactus"]["lastname"];
    var email = document.forms["rvContactus"]["email"];
    var phonenumber = document.forms["rvContactus"]["phonenumber"];
    var message = document.forms["rvContactus"]["message"];

    if (firstname.value == "") {
        window.alert("Please enter your Firstname");
        firstname.focus;
        return false;
    }
    if (lastname.value == "") {
        window.alert("Please enter your Lastname");
        lastname.focus;
        return false;
    }
    if (email.value == "") {
        window.alert("Please enter your Email");
        email.focus;
        return false;
    }
    if (phonenumber.value == "") {
        window.alert("Please enter your Phonenumber");
        phonenumber.focus;
        return false;
    }
    if (message.value == "") {
        window.alert("Please enter your Message");
        message.focus;
        return false;
    }
    return true;
}