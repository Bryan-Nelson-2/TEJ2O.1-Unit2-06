/* Copyright (c) 2025 MTHS All rights reserved
*
* Created by: Alex
* Created on: Sep 2025
* This program turns an LED on and off with buttons A and B.
*/

// clears screen then shows a happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// turns on LED with B button
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// turns of LED with A button
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
