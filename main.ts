namespace SpriteKind {
    export const info = SpriteKind.create()
    export const slimeEnemy = SpriteKind.create()
}
/**
 * Setup
 */
// Jump
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ApprenticeFaceLeft1`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Apprentice`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Apprentice`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`ApprenticeFaceRight1`)
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
let isInvincible = false
let dashMeter: Sprite = null
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
let slime1 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(slime1, tiles.getTileLocation(14, 5))
slime1.ay = 300
let slime2 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(slime2, tiles.getTileLocation(5, 8))
slime2.ay = 300
let slime3 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(slime3, tiles.getTileLocation(35, 20))
slime3.ay = 300
let slime4 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(slime4, tiles.getTileLocation(37, 20))
slime4.ay = 300
let slime5 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(slime5, tiles.getTileLocation(38, 20))
slime5.ay = 300
let book1 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book1, tiles.getTileLocation(15, 4))
let book2 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book2, tiles.getTileLocation(5, 3))
let book3 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book3, tiles.getTileLocation(1, 5))
let book4 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book4, tiles.getTileLocation(37, 19))
let book5 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book5, tiles.getTileLocation(39, 20))
let book6 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book6, tiles.getTileLocation(35, 17))
let book7 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book7, tiles.getTileLocation(40, 20))
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
forever(function () {
    if (spriteutils.distanceBetween(mySprite, book1) < 100) {
        book1.follow(mySprite, 50)
    } else {
        book1.follow(null)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, book2) < 100) {
        book2.follow(mySprite, 50)
    } else {
        book2.follow(null)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, book3) < 100) {
        book3.follow(mySprite, 50)
    } else {
        book3.follow(null)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, book4) < 100) {
        book4.follow(mySprite, 50)
    } else {
        book4.follow(null)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, book5) < 100) {
        book5.follow(mySprite, 50)
    } else {
        book5.follow(null)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, book6) < 100) {
        book6.follow(mySprite, 50)
    } else {
        book6.follow(null)
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, book7) < 100) {
        book7.follow(mySprite, 50)
    } else {
        book7.follow(null)
    }
})
