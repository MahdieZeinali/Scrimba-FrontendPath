// first functions - related to Home side //

let addh = document.getElementById("home-num") 
counth=0

function hbtn1() {
    counth = counth + 1
    addh.innerText = counth
}


function hbtn2() {
    counth = counth + 2
    addh.innerText = counth
}


function hbtn3() {
    counth = counth + 3
    addh.innerText = counth
}

// save first function
let hsaveEl = document.getElementById("hsave-el")

function hsave() {
   let hcountStr = counth + " - "
   hsaveEl.textContent += hcountStr
   addh.textContent = 0
   counth=0
}








// second functions - related to Guest side //

let addg = document.getElementById("guest-num") 
countg=0

function gbtn1() {
    countg = countg + 1
    addg.innerText = countg
}


function gbtn2() {
    countg = countg + 2
    addg.innerText = countg
}


function gbtn3() {
    countg = countg + 3
    addg.innerText = countg
}

// save first function

let gsaveEl = document.getElementById("gsave-el")

function gsave() {
   let gcountStr = countg + " - "
   gsaveEl.textContent += gcountStr
   addg.textContent = 0
   countg=0
}

