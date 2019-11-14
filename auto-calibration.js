let moist = 0;
let dryReading1 = 0;
let dryReading2 = 0;
let dryReading3 = 0;
let wetReading1 = 0;
let wetReading2 = 0;
let wetReading3 = 0;
let dryAverage = 0;
let wetAverage = 0;
function wetRead(wetReading: number) {
    basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    wetReading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return wetReading1
    basic.pause(1000)

}
function dryRead(dryReading: number) {
    basic.showLeds(`
. . # . .
. . # . .
# # # # #
. # # # .
. . # . .
`)
    basic.pause(2000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P8, 1)
    dryReading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return dryReading
    basic.pause(1000)
}

function findAverage(average: number, num1: number, num2: number, num3: number) {
    average = (num1 + num2 + num3) / 3
    return average;
}

wetReading1 = wetRead(wetReading1)
dryReading1 = dryRead(dryReading2)
wetReading2 = wetRead(wetReading2)
dryReading2 = dryRead(dryReading3)
wetReading3 = wetRead(wetReading3)
dryReading3 = dryRead(dryReading3)
dryAverage = findAverage(dryAverage, dryReading1, dryReading2, dryReading3)
wetAverage = findAverage(wetAverage, wetReading1, wetReading2, wetReading3)
basic.showString("Calibration Success")

basic.forever(function () {



    pins.digitalWritePin(DigitalPin.P8, 1)
    moist = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    let scaleLevel = pins.map(moist, dryAverage, wetAverage, 4, 0)
    for (let x = 0; x < 5; x++) {
        for (let y = 5; y > scaleLevel; y--) {
            led.plot(x, y)
        }
    }

    basic.pause(1000)
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < scaleLevel; y++) {
            led.unplot(x, y)
        }
    }
})
