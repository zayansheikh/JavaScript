function submit() {
    var name = document.getElementById('u-name').value;
    var age = document.getElementById('u-age').value;
    var email = document.getElementById('u-email').value;
    var phone = document.getElementById('u-phone').value;

    // REGX
    var nameExp = /^[A-z ]{3,20}$/gm;
    var ageExp = /^[0-9]{2}/gm
    var emailExp = /^[a-z0-9]{3,}@[a-z]{3,10}.[a-z]{2,6}/gm;
    var phoneExp = /^[0-9+]{4}-[0-9]{7}/gm

    // NAME TESTING
    if (name != "") {
        if (nameExp.test(name)) {
            document.getElementById('name-error').innerHTML = "Valid name";
            document.getElementById('name-error').style.color = "green";
        } else {
            document.getElementById('name-error').innerHTML = "Invalid name";
            document.getElementById('name-error').style.color = "red";
        }
    } else {
        document.getElementById('name-error').innerHTML = "Please enter name"
        document.getElementById('name-error').style.color = "rgb(194, 194, 53)"
    }
    // AGE TESTING
    if (age != "") {
        if (age < 18) {
            document.getElementById('age-error').innerHTML = "Your age is must 18"
            document.getElementById('age-error').style.color = "black"
        }
        else if (ageExp.test(age)) {
            document.getElementById('age-error').innerHTML = "Valid age";
            document.getElementById('age-error').style.color = "green";
        } else {
            document.getElementById('age-error').innerHTML = "Invalid age";
            document.getElementById('age-error').style.color = "red";
        }
    } else {
        document.getElementById('age-error').innerHTML = "Please enter name"
        document.getElementById('age-error').style.color = "rgb(194, 194, 53)"
    }
    // EMAIL TESTING
    if (email != "") {
        if (emailExp.test(email)) {
            document.getElementById('email-error').innerHTML = "Valid email";
            document.getElementById('email-error').style.color = "green";
        } else {
            document.getElementById('email-error').innerHTML = "Invalid email";
            document.getElementById('email-error').style.color = "red";
        }
    } else {
        document.getElementById('email-error').innerHTML = "Please enter email"
        document.getElementById('email-error').style.color = "rgb(194, 194, 53)"
    }
    // PHONE TESTING
    if (phone != "") {
        if (phoneExp.test(phone)) {
            document.getElementById('phone-error').innerHTML = "Valid phone";
            document.getElementById('phone-error').style.color = "green";
        } else {
            document.getElementById('phone-error').innerHTML = "Invalid phone"
            document.getElementById('phone-error').style.color = "red"
        }
    } else {
        document.getElementById('phone-error').innerHTML = "Please enter phone"
        document.getElementById('phone-error').style.color = "rgb(194, 194, 53)"
    }
}