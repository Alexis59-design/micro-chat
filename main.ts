input.onButtonPressed(Button.A, function () {
    radio.sendString("schinke apfel und käse")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
