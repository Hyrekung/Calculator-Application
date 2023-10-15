const screen = document.querySelector(".screen")
var a, b, c, operator = "none"
//document.addEventListener("click", NumberButton)

function NumberButton(num) {
    if (screen.innerHTML == 0) {
        screen.innerHTML = num
    } else {
       // if (operator !== "none") {
           // screen.innerHTML = num
            if(screen.innerHTML !== 0){
                screen.innerHTML += num
            }
        }
       // if (operator === "none") {
         //   screen.innerHTML += num
        //}

    }

//}

function Clear() {
    screen.innerHTML = 0
    operator = "none"
    a = 0
    b = 0
    c = 0
}

function Equal() {
    if (operator === "+") {
        b = screen.innerHTML
        c = parseInt(a) + parseInt(b)
        screen.innerHTML = c
    }
    //alert("a = "+ a + ", b = "+ b + ", c = " +c+ ", operator = " + operator)
}

function Plus() {
    if (operator === "none") {
        a = screen.innerHTML
        screen.innerHTML = 0
        operator = "+"
        //alert("a = " + a + ", b = " + b + ", c = " + c + ", operator = " + operator)
    }
    else {
        if (operator === "+") {
            b = screen.innerHTML
            c = parseInt(a) + parseInt(b)
            screen.innerHTML = c
            //alert("a = " + a + ", b = " + b + ", c = " + c + ", operator = " + operator)
        }
        if (operator === "−") {

        }
        if (operator === "×") {

        }
        if (operator === "÷") {

        }
        // alert("a = " + a + ", b = " + b + ", c = " + c + ", operator = " + operator)
    }
}
