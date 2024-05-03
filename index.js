let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281.toFixed(3)
const feetToMeter = 0.3048.toFixed(3)
const literToGallon =  0.264.toFixed(3)
const gallonToliter = 3.785.toFixed(3)
const kiloToPound =  2.204.toFixed(3)
const poundToKilo = 0.454.toFixed(3)

convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value

    lengthEl.textContent = `${inputValue} meters = ${inputValue * meterToFeet} feet | ${inputValue} Feet =  ${inputValue * feetToMeter} meters`
    volumeEl.textContent = `${inputValue} liters = ${inputValue * literToGallon} gallons | ${inputValue} gallons = ${inputValue * gallonToliter} liters` 
    massEl.textContent = `${inputValue} kilos = ${inputValue * kiloToPound} pounds | ${inputValue} pounds = ${inputValue * poundToKilo} kilos`
})