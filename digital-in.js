basic.forever(function () {


    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        pins.analogWritePin(AnalogPin.P16, 1023)
    }
    else {
        pins.analogWritePin(AnalogPin.P16, 0)
    }
})
