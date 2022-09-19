/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let ConvertNum = document.getElementById("convert-num")
let convertBtn = document.getElementById("convert-btn")

const convertmtof = 3.281
const convertltog = 0.264
const convertktop = 2.204 

let pLength = document.getElementById("p-lenght")
let pVolume = document.getElementById("p-volume")
let pMass = document.getElementById("p-mass")


convertBtn.addEventListener("click", function(){

    pLength.innerHTML = `${ConvertNum.value} meters = ${ (ConvertNum.value * convertmtof).toFixed(3)} feet 
    | ${ConvertNum.value} feet = ${ (ConvertNum.value / convertmtof).toFixed(3)} meter`

    pVolume.innerHTML = `${ConvertNum.value} liters = ${ (ConvertNum.value * convertltog).toFixed(3)} gallons 
    | ${ConvertNum.value} gallons = ${ (ConvertNum.value / convertltog).toFixed(3)} liters`

    pMass.innerHTML = `${ConvertNum.value} kilos = ${ (ConvertNum.value * convertktop).toFixed(3)} pounds 
    | ${ConvertNum.value} pounds = ${ (ConvertNum.value / convertktop).toFixed(3)} kilos`

})