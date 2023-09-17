radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendNumber(2)
})
radio.setGroup(10)
