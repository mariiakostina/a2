function validateForm() {
    let fName = document.forms["myForm"]["fName"].value;
    let lName = document.forms["myForm"]["lName"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;

    if (fName == "") {
        alert("First Name must be filled out");
        return false;
    }

    if (fName.length < 3) {
        alert("First Name must be at least 3 characters long");
        return false;
    }

    if (lName === "") {
        alert("Last Name must be filled out");
        return false;
    }

    if (lName.length < 2) {
        alert("Last Name must be at least 2 characters long");
        return false;
    }



    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (email.indexOf("@") == -1) {
        alert("Email must contain @");
        return false;
    }

    if (phone && !/^[0-9\s\-\(\)\+]+$/.test(phone)) {
        alert("Invalid phone");
        return false;
    }
    
}

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block" && logo.style.display === "none") {menu.style.display = "none"; logo.style.display = "block";
    
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

