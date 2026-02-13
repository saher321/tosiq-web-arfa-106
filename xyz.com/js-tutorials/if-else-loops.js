// = -> assignment
// a = 10
// operator, operants
// camparison operators
// >, <, <=, >=, !=, ==, !, ||, &&

function showResult(){
    var n = Number(document.getElementById("number").value);
    console.log(typeof n, n)
    
    if (!n) {
            Toastify({
            text: "Please provide valid number",
            duration: 3000

            }).showToast();
        return;
    }

    if (n % 2 == 0){
        console.log("This is even number")
    } else {
        console.log("This is odd number")
    }
    if(n == 0) {
        console.log("Number is neutral");
    } else if(n > 0){
        console.log("this is Positive number")
    } else {
        console.log("This is negative number")
    }



}