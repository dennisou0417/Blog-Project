function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}


var form = document.getElementById("postForm");
var articleTitle;
var articleDetails;
var articleContent;

function valNew(){
    validatePost();
    newPost();
    form.classList.add("hide");
}

function validatePost(){
    var title = document.getElementById('title').value;
    var details = document.getElementById('details').value;
    var content = document.getElementById('content').value;

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
        articleTitle = title;
        articleDetails = details;
        articleContent = content;
        alert('You\'ve submitted the form...');
    }
}

function clearForm(){
    articleTitle = "";
    articleDetails = "";
    articleContent = "";
}

function display(){
    if(form.classList == "hide"){
        form.classList.remove("hide");
    }else{
        form.classList.add("hide");
    }
}

function newPost(){
    var article = document.createElement('article');
    article.className = "thumbnail articlePost";
    var post = document.getElementById('post');
    post.appendChild(article);
    var h1 = document.createElement('h1');
    var titleNode = document.createTextNode(articleTitle);
    h1.appendChild(titleNode);
    article.appendChild(h1);
    var p = document.createElement('p');
    var detailNode = document.createTextNode(articleDetails);
    p.appendChild(detailNode);
    article.appendChild(p);
    var button = document.createElement('button');
    button.className = "thumbsUp";
    article.appendChild(button);
    var i = document.createElement('i');
    i.className = "fa fa-thumbs-up";
    i.setAttribute = ("aria-hidden", "true");
    button.appendChild(i);
    var readMore = document.createElement('button');
    var read = document.createTextNode("Read More");
    readMore.className = "readMore";
    readMore.appendChild(read);
    article.appendChild(readMore);
    var hr = document.createElement('hr');
    article.appendChild(hr);
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

