controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx > 0) {
        for (let index = 0; index < 10; index++) {
            mySprite.x += 3
            pause(15)
        }
    } else if (mySprite.vx < 0) {
        for (let index = 0; index < 10; index++) {
            mySprite.x += -3
            pause(15)
        }
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Apprentice`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
