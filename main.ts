input.onGesture(Gesture.Shake, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 0)
})
basic.forever(function () {
	
})
