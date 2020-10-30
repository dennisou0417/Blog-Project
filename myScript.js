function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validatePost(){
    var title = document.postForm.title.value;
    var details = document.postForm.details.value;
    var content = document.postForm.content.value;

    var titleErr = detailsErr = contentErr = true;

    if(title == ""){
        printError("titleErr", "Enter a title");
    }
    else{
        printError("titleErr", "");
        titleErr = false;
    }

    if(details == ""){
        printError("detailsErr", "Enter some details");
    }
    else{
        printError("detailsErr", "");
        detailsErr = false;
    }

    if(content == ""){
        printError("contentErr", "Enter some content");
    }
    else{
        printError("contentErr", "");
        contentErr = false;
    }

    if(titleErr || detailsErr || contentErr == true){
        return false;
    }else{
        alert('You\'ve submitted the form...');
    }
}

function validateForm(){

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var message = document.contactForm.message.value;

    var nameErr = emailErr = mobileErr = messageErr = true;

    if(name == ""){
        printError("nameErr", "Please enter your name");
    }else{
        var regex = /^[a-zA-z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "Please enter a valid name");
        }else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(email == ""){
        printError("emailErr", "Please enter your email");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emailErr", "Please enter a valid email");
        }else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(mobile == ""){
        printError("mobileErr", "Please enter your phone number");
    }else{
        var regex = /^[0-9]{10}$/;
        if(regex.test(mobile) === false){
            printError("mobileErr", "Please enter a valid phone number");
        }else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if(message == ""){
        printError("messageErr", "Please enter a message");
    }else{
        printError("messageErr", "");
        messageErr = false;
    }

    if(nameErr || emailErr || mobileErr || messageErr == true){
        return false;
    }else{
        alert('You\'ve submitted the form...');
    }
}