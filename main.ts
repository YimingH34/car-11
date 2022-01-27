let distance = 0
function Forward () {
    pins.servoSetPulse(AnalogPin.P12, 1700)
    pins.servoSetPulse(AnalogPin.P14, 1300)
    control.waitMicros(20000)
}
function left () {
    pins.servoSetPulse(AnalogPin.P12, 0)
    pins.servoSetPulse(AnalogPin.P14, 1000)
    control.waitMicros(100000)
}
function stop () {
    pins.servoSetPulse(AnalogPin.P12, 0)
    pins.servoSetPulse(AnalogPin.P14, 0)
    control.waitMicros(20000)
}
function Right () {
    pins.servoSetPulse(AnalogPin.P12, 0)
    pins.servoSetPulse(AnalogPin.P14, 2000)
    control.waitMicros(20000)
}
function sensor () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function Backward () {
    pins.servoSetPulse(AnalogPin.P12, 1300)
    pins.servoSetPulse(AnalogPin.P14, 1700)
    control.waitMicros(20000)
}
basic.forever(function () {
    Forward()
    basic.pause(100)
    sensor()
    if (distance < 10) {
        Right()
        basic.pause(770)
        sensor()
        if (distance < 10) {
            left()
            basic.pause(1700)
        }
    }
})
