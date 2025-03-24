input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("- D E F E - F C5 ", 200), music.PlaybackMode.InBackground)
    basic.showString("normal end")
    basic.pause(5000)
    music.play(music.stringPlayable("C5 B F G D B C C5 ", 256), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # . . .
        # . . . .
        . # . # .
        # # # # #
        # # # # #
        `)
    basic.pause(200)
    basic.showString("pirson")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 A C5 E C5 D C5 C ", 295), music.PlaybackMode.InBackground)
    basic.showString("you got caught by the fbi")
    basic.pause(5000)
    music.play(music.stringPlayable("F G A C5 D C5 A D ", 382), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . #
        . . # . .
        . # # # .
        . . # . .
        # . . . #
        `)
    basic.pause(200)
    basic.showString("you were able to escape")
})
