function togglePassword(){
    let pswd = document.getElementById("pswd");
    // console.log(pswd);

    let checkVal = document.getElementById("check").checked;
    if (checkVal){
        pswd.setAttribute("type", "text")
    } else {
        pswd.setAttribute("type", "password")
    }

}