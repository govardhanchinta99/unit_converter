/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const metricBtn = document.getElementById("metric-btn")
const lengthInfo = document.getElementById("length-info")
const volumeInfo = document.getElementById("volume-info")
const massInfo = document.getElementById("mass-info")
const inputEl = document.getElementById("metric-input")


metricBtn.addEventListener("click", function() {
    meterAndFeet(inputEl.value)
    litersAndGallons(inputEl.value)
    kilogramsAndPounds(inputEl.value)
})

function meterAndFeet(length) {
    let meterInFeet = length * 3.28084
    let feetInmeter = length * 0.3048
    let meterAndFeetConversion = `
    <p class="info">${length} meters = ${meterInFeet.toFixed(3)} feet | ${length} feet = ${feetInmeter.toFixed(3)} meters</p>
    `
    lengthInfo.innerHTML = meterAndFeetConversion
}

function litersAndGallons(volume) {
    let litersIngallons = volume * 0.264172
    let gallonsInLiters = volume * 3.78541
    let litersAndGallonsConversion = `
    <p class="info">${volume} liters = ${litersIngallons.toFixed(3)} gallons | ${volume} gallons = ${gallonsInLiters.toFixed(3)} liters</p>
    `
    volumeInfo.innerHTML = litersAndGallonsConversion
}

function kilogramsAndPounds(mass) {
    let kilogramsInPounds = mass * 2.20462
    let poundsInKilograms = mass * 0.453592
    let kilogramsAndPoundsConversion = `
    <p class="info">${mass} kilos = ${kilogramsInPounds.toFixed(3)} pounds | ${mass} pounds = ${poundsInKilograms.toFixed(3)} kilos</p>
    `
    massInfo.innerHTML = kilogramsAndPoundsConversion
}