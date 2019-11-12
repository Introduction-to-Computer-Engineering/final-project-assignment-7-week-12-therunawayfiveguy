basic.forever(function () {


    let moist = 0
    pins.digitalWritePin(DigitalPin.P8, 1)
    moist = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    let scaleLevel = pins.map(moist, 50, 840, 4, 0)
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
