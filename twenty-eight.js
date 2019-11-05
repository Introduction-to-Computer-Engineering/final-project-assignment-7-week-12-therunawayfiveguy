led.enable(true)

pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)

basic.forever(function () {
    let RandomNumA = Math.randomRange(0, 4)
    let RandomNumB = Math.randomRange(0, 4)

    led.plot(RandomNumA, RandomNumB)

    for (let index = 0; index <= 1023; index++) {
        pins.analogWritePin(AnalogPin.P8, index)
    }
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P8, 0)
    led.unplot(RandomNumA, RandomNumB)
    for (let index = 0; index <= 1023; index++) {
        pins.analogWritePin(AnalogPin.P12, index)
    }
    basic.pause(500)

    pins.analogWritePin(AnalogPin.P12, 0)

    led.plot(RandomNumA + 1, RandomNumB + 1)
    led.plot(RandomNumA + 1, RandomNumB)
    led.plot(RandomNumA, RandomNumB + 1)
    led.plot(RandomNumA - 1, RandomNumB - 1)
    led.plot(RandomNumA - 1, RandomNumB)
    led.plot(RandomNumA, RandomNumB - 1)
    led.plot(RandomNumA - 1, RandomNumB + 1)
    led.plot(RandomNumA + 1, RandomNumB - 1)

    for (let index = 0; index <= 1023; index++) {
        pins.analogWritePin(AnalogPin.P16, index)
    }

    basic.pause(500)

    pins.analogWritePin(AnalogPin.P16, 0)

    led.unplot(RandomNumA + 1, RandomNumB + 1)
    led.unplot(RandomNumA + 1, RandomNumB)
    led.unplot(RandomNumA, RandomNumB + 1)
    led.unplot(RandomNumA - 1, RandomNumB - 1)
    led.unplot(RandomNumA - 1, RandomNumB)
    led.unplot(RandomNumA, RandomNumB - 1)
    led.unplot(RandomNumA - 1, RandomNumB + 1)

    led.unplot(RandomNumA + 1, RandomNumB - 1)

    for (let index = 1023; index >= 0; index--) {
        pins.analogWritePin(AnalogPin.P8, index)
        pins.analogWritePin(AnalogPin.P12, index)
        pins.analogWritePin(AnalogPin.P16, index)
    }

    basic.pause(500)
})
