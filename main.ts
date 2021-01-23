radio.onReceivedStringDeprecated(function (receivedString) {
    if (serialWrite != 0) {
        serial.writeLine(receivedString)
        serial.writeValue("signal strength", radio.receivedPacket(RadioPacketProperty.SignalStrength))
    }
    if (receivedString == "Button A") {
        basic.showIcon(IconNames.Heart)
    }
    if (receivedString == "Button B") {
        basic.showIcon(IconNames.StickFigure)
    }
    if (receivedString == "Button C") {
        basic.showIcon(IconNames.Pitchfork)
    }
    if (receivedString == "Button D") {
        basic.showIcon(IconNames.Square)
    }
    if (receivedString == "Button E") {
        basic.showIcon(IconNames.Yes)
    }
})
let serialWrite = 0
radio.setGroup(68)
led.plot(2, 2)
serialWrite = 0
