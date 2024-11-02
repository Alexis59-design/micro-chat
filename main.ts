input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo Mejäi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
