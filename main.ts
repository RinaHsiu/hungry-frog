controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (frog.overlapsWith(fly)) {
        game.over(true)
    } else if (frog.overlapsWith(fly2)) {
        game.over(true)
    } else if (frog.overlapsWith(fly3)) {
        game.over(true)
    } else {
        info.changeLifeBy(-1)
    }
    
})
let fly3 : Sprite = null
let fly2 : Sprite = null
let fly : Sprite = null
let frog : Sprite = null
scene.setBackgroundImage(assets.image`
    pond
`)
frog = sprites.create(img`
        ..........888..888..........
            .........8577885778.........
            ........857777777778........
            ........878877778878........
            ........878f77778f78........
            .......87777777777778.......
            .......877777777777788......
            ......8777778888777778......
            ......877778dddd877778......
            ......8d888dddddd888d8......
            ......8dddddddddddddd8......
            .......8dddddddddddd8.......
            ........888888888888........
            .......85777777777758.......
            ......8577777777777758......
            .....857777777777777758.....
            ....88777777777777777788....
            ...8587778dddddddd8777858...
            ...878778dddddddddd877878...
            ...878778dddddddddd877878...
            ...878778dddddddddd877878...
            ...8787778dddddddd8777878...
            ...877878dddddddddd878778...
            ..87787778dddddddd87778778..
            .8888787878dddddd8787878888.
            cccccccccccccccccccccccccccc
            .cccccccccccccccccccccccccc.
            ..cccccccccccccccccccccccc..
    `, SpriteKind.Player)
frog.setPosition(90, 88)
fly = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly.setVelocity(190, 100)
fly.setBounceOnWall(true)
fly2 = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly2.setVelocity(150, 50)
fly2.setBounceOnWall(true)
fly3 = sprites.create(flies_imgs.fly, SpriteKind.Food)
fly3.setVelocity(120, 70)
fly3.setBounceOnWall(true)
info.startCountdown(10)
