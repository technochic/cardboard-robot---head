input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 60)
    pins.servoWritePin(AnalogPin.P1, 60)
})
input.onSound(DetectedSound.Loud, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.setBrightness(100)
    strip.show()
    basic.pause(10)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 110)
    pins.servoWritePin(AnalogPin.P1, 70)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 120)
    pins.servoWritePin(AnalogPin.P1, 120)
})
input.onSound(DetectedSound.Quiet, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    strip.setBrightness(255)
    strip.show()
    basic.pause(10)
})
let strip: neopixel.Strip = null
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
strip = neopixel.create(DigitalPin.P14, 24, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(100)
strip.show()
basic.forever(function () {
	
})
