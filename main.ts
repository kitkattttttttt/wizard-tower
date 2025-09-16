namespace SpriteKind {
    export const info = SpriteKind.create()
}
// Single Jump
// 
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
// Dash/Dash Meter
// 
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dash == 100) {
        if (mySprite.vx != 0) {
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
            dash = 0
            dashMeter = sprites.create(assets.image`dashEmpty`, SpriteKind.info)
            dashMeter.setPosition(12, 4)
            for (let index = 0; index < 25; index++) {
                dash += 1
                pause(10)
            }
            dashMeter.setImage(assets.image`dashOne`)
            for (let index = 0; index < 25; index++) {
                dash += 1
                pause(10)
            }
            dashMeter.setImage(assets.image`dashTwo`)
            for (let index = 0; index < 25; index++) {
                dash += 1
                pause(10)
            }
            dashMeter.setImage(assets.image`dashThree`)
            for (let index = 0; index < 25; index++) {
                dash += 1
                pause(10)
            }
            dashMeter.setImage(assets.image`dashFour`)
            pause(1000)
            sprites.destroy(dashMeter)
        }
    }
})
// Setup
// 
let dashMeter: Sprite = null
let dash = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Apprentice`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
dash = 100
