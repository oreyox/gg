input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("C C5 - - - - - - ", 100), music.PlaybackMode.UntilDone)
})
for (let pořadí = 0; pořadí <= 4; pořadí++) {
    led.plot(pořadí, 0)
}
for (let pořadí = 0; pořadí <= 4; pořadí++) {
    led.plot(pořadí, 1)
}
for (let pořadí = 0; pořadí <= 4; pořadí++) {
    led.plot(pořadí, 3)
}
for (let pořadí = 0; pořadí <= 4; pořadí++) {
    led.plot(pořadí, 2)
}
for (let pořadí = 0; pořadí <= 4; pořadí++) {
    led.plot(pořadí, 4)
}
basic.pause(2000)
basic.showString("ahoj ja jsem microbit a vidis muj oblicej tak na ten oblicej zmackni")
basic.forever(function () {
	
})
