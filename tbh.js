let password = prompt("Enter the password");
if(password=="yagami light"){
    window.alert("Welcome Kurayami-Kun");
}
while(password!="yagami light"){
    window.alert("Wrong password, try again");
    document.write("<!--");
    password = prompt("Enter The Password");
    if( password == "yagami light" ){
        document.write("-->");
        window.alert("Welcome Kurayami-Kun");
    }
}
