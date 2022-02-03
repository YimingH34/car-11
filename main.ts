radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        Right()
        basic.pause(770)
    } else if (receivedNumber == 3) {
        left()
        basic.pause(770)
    } else if (receivedNumber == 2) {
        Forward()
        basic.pause(770)
    } else if (receivedNumber == 1) {
        Backward()
        basic.pause(770)
    } else if (receivedNumber == 5) {
        stop()
        basic.pause(770)
    }
})
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
let distance = 0
radio.setGroup(159)
while (false) {
    Forward()
    basic.pause(500)
    sensor()
    if (distance >= 15) {
        left()
        basic.pause(1000)
    } else if (distance <= 2) {
        Right()
        basic.pause(200)
    }
}
