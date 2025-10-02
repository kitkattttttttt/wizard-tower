namespace SpriteKind {
    export const info = SpriteKind.create()
}
// Jump
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Apprentice`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Apprentice`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ApprenticeFaceRight1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`magicEvil0`, function (sprite, location) {
    if (isInvincible == false) {
        Life += -1
        scene.cameraShake(4, 500)
        isInvincible = true
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ApprenticeFaceLeft1`)
})
// Dash/Dash Meter
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dash == 100) {
        if (mySprite.vx != 0 || mySprite.vy != 0) {
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
            } else if (mySprite.vy < 0) {
                for (let index = 0; index < 10; index++) {
                    mySprite.y += -3
                    pause(15)
                }
            } else if (mySprite.vy > 0) {
                for (let index = 0; index < 10; index++) {
                    mySprite.y += 3
                    pause(15)
                }
            }
            dash = 0
            dashMeter = sprites.create(assets.image`dashEmpty`, SpriteKind.info)
            dashMeter.setPosition(12, 13)
            dashMeter.setFlag(SpriteFlag.RelativeToCamera, true)
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
let dashMeter: Sprite = null
let isInvincible = false
let dash = 0
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Apprentice`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
dash = 100
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 20))
let Life = 6
let lives = sprites.create(assets.image`health6`, SpriteKind.info)
lives.setPosition(27, 6)
lives.setFlag(SpriteFlag.RelativeToCamera, true)
forever(function () {
    if (Life == 6) {
        lives.setImage(assets.image`health6`)
    } else if (Life == 5) {
        lives.setImage(assets.image`health5`)
    } else if (Life == 4) {
        lives.setImage(assets.image`health4`)
    } else if (Life == 3) {
        lives.setImage(assets.image`health3`)
    } else if (Life == 2) {
        lives.setImage(assets.image`health2`)
    } else if (Life == 1) {
        lives.setImage(assets.image`health1`)
    } else {
        game.gameOver(false)
    }
})
