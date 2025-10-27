namespace SpriteKind {
    export const info = SpriteKind.create()
    export const slimeEnemy = SpriteKind.create()
}
// Jump
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        if (facing == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . f f f . . . . . . . . . 
                . . . f f f 8 f . . . . . . . . 
                . . . f f 8 8 9 f . . . . . . . 
                . . f . f f 8 8 9 f . . . . . . 
                . . . . f f 8 8 9 f . . . . . . 
                . . . f f f 8 8 8 9 f . . . . . 
                . . . f 1 1 5 5 4 4 f . . . . . 
                . . f f f 8 8 8 8 9 9 f . . . . 
                . . . f f d d d f d f . . . . . 
                . . . . f d d 3 3 d f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f f 8 9 f . . . . . . 
                . . . . f f 8 8 8 5 f . . . . . 
                . . . . f f 8 8 8 4 f f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . . . . . . 
                . . . f f f 8 f . . . . . . . . 
                . . . f f 8 8 9 f . . . . . . . 
                . . f . f f 8 8 9 f . . . . . . 
                . . . . f f 8 8 9 f . . . . . . 
                . . . f f f 8 8 8 9 f . . . . . 
                . . . f 1 1 5 5 4 4 f . . . . . 
                . . f f f 8 8 8 8 9 9 f . . . . 
                . . . f f d d d f d f . . . . . 
                . . . . f d d 3 3 d f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f f 8 9 f . . . . . . 
                . . . . f f 8 8 8 5 f . . . . . 
                . . . . f f 8 8 8 4 f f . . . . 
                . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . . . . . . 
                . . . f f f 8 f . . . . . . . . 
                . . . f f 8 8 9 f . . . . . . . 
                . . f . f f 8 8 9 f . . . . . . 
                . . . . f f 8 8 9 f . . . . . . 
                . . . f f f 8 8 8 9 f . . . . . 
                . . . f 1 1 5 5 4 4 f . . . . . 
                . . f f f 8 8 8 8 9 9 f . . . . 
                . . . f f d d d f d f . . . . . 
                . . 5 . f d d 3 3 d f . . . . . 
                . 5 1 5 . f f f f f . . . . . . 
                . 9 5 . . f f 8 9 5 . 9 . . . . 
                . 9 . . f f 9 8 5 1 5 9 . . . . 
                . 9 . 9 f f 9 8 8 5 f 9 . 9 . . 
                . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . . . . . . 
                . . . f f f 8 f . . . . . . . . 
                . . . f f 8 8 9 f . . . . . . . 
                . . f . f f 8 8 9 f . . . . . . 
                . . . . f f 8 8 9 f . . . . . . 
                . . . f f f 8 8 8 9 f . . . . . 
                . . . f 1 1 5 5 4 4 f . . . . . 
                . . f f f 8 8 8 8 9 9 f . . . . 
                . . . f f 5 d d f d 9 . . . . . 
                . . 9 . 5 1 5 3 3 d 9 . . . . . 
                . . 9 . . 5 9 f f 9 9 9 . . 9 . 
                . 9 9 . . 9 9 8 9 9 5 9 . . 9 . 
                . 9 9 . 9 9 9 9 9 5 1 5 . 9 9 . 
                . 9 9 9 9 9 9 9 9 9 5 9 9 9 9 . 
                . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . . . . . . 
                . . . f f f 8 f . . . . . . . . 
                . . . f f 8 8 9 f . . . . . . . 
                . . f . f f 8 8 9 f . . . . . . 
                . . . . f f 8 8 9 f . . . . . . 
                . . . f f f 8 8 8 9 f . . . . . 
                . . . f 1 1 5 5 4 4 f . . . . . 
                . . f f f 8 8 8 8 9 9 f . . . . 
                . . . f f d d d f d f . . . . . 
                . . 5 . f d d 3 3 d f . . . . . 
                . 5 1 5 . f f f f f . . . . . . 
                . 9 5 . . f f 8 9 5 . 9 . . . . 
                . 9 . . f f 9 8 5 1 5 9 . . . . 
                . 9 . 9 f f 9 8 8 5 f 9 . 9 . . 
                . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . . . . . . 
                . . . f f f 8 f . . . . . . . . 
                . . . f f 8 8 9 f . . . . . . . 
                . . f . f f 8 8 9 f . . . . . . 
                . . . . f f 8 8 9 f . . . . . . 
                . . . f f f 8 8 8 9 f . . . . . 
                . . . f 1 1 5 5 4 4 f . . . . . 
                . . f f f 8 8 8 8 9 9 f . . . . 
                . . . f f d d d f d f . . . . . 
                . . . . f d d 3 3 d f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f f 8 9 f . . . . . . 
                . . . . f f 8 8 8 5 f . . . . . 
                . . . . f f 8 8 8 4 f f . . . . 
                . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f . . . . . . . . . 
                . . . f f f 8 f . . . . . . . . 
                . . . f f 8 8 9 f . . . . . . . 
                . . f . f f 8 8 9 f . . . . . . 
                . . . . f f 8 8 9 f . . . . . . 
                . . . f f f 8 8 8 9 f . . . . . 
                . . . f 1 1 5 5 4 4 f . . . . . 
                . . f f f 8 8 8 8 9 9 f . . . . 
                . . . f f d d d f d f . . . . . 
                . . . . f d d 3 3 d f . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f f 8 9 f . . . . . . 
                . . . . f f 8 8 8 5 f . . . . . 
                . . . . f f 8 8 8 4 f f . . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            false
            )
        } else if (facing == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`jump`,
            100,
            false
            )
        }
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (isInvincible == false) {
        Life += -1
        scene.cameraShake(4, 500)
        isInvincible = true
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`stonemiddle0`, function (sprite, location) {
    if (needKeys == 0) {
        if (level == 1) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            tiles.setCurrentTilemap(tilemap`level3`)
            needKeys = 4
            dash = 100
            magicVar = 100
            Life = 6
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 18))
            slime1 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
            slime2 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
            book1 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
            book2 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(slime1, assets.tile`stoneLeftEnd0`)
            tiles.placeOnRandomTile(slime2, assets.tile`stoneLeftEnd0`)
            tiles.placeOnRandomTile(book1, assets.tile`stoneLeftEnd0`)
            tiles.placeOnRandomTile(book2, assets.tile`stoneLeftEnd0`)
            level += 2
        } else {
            game.gameOver(true)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`magicEvil0`, function (sprite2, location) {
    if (isInvincible == false) {
        Life += -1
        scene.cameraShake(4, 500)
        isInvincible = true
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite3, otherSprite2) {
    sprites.destroy(otherSprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key`, function (sprite, location) {
    needKeys += -1
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f . . . . . . . . 
        . . . . f f f 8 f . . . . . . . 
        . . . . f f 8 8 9 f . . . . . . 
        . . . f . f 8 8 8 9 f . . . . . 
        . . . . . f 8 8 8 9 f . . . . . 
        . . . . f f 8 8 8 8 9 f . . . . 
        . . . . f 4 4 5 5 1 1 f . . . . 
        . . . f f 8 8 8 8 8 9 9 f . . . 
        . . . . f f d d d f d f . . . . 
        . . . . . f d d 3 3 d f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f f 8 9 f . . . . . 
        . . . . . f f 8 8 8 5 f . . . . 
        . . . . . f f 8 8 8 4 f f . . . 
        . . . . . f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . f 8 8 8 8 9 9 f f . . . . . 
        . . f f f 8 8 8 8 8 9 f . . . . 
        . f . . f 8 8 8 8 8 8 9 f . . . 
        . . . . f 4 4 5 5 5 1 1 f . . . 
        . . . f 8 8 8 8 8 8 8 8 9 f . . 
        . . . . f f d d d f d f f . . . 
        . . . . . f d d 3 3 d f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . f f 8 8 8 9 f . . . . . 
        . . . f f 8 8 8 8 5 f . . . . . 
        . . . f f 8 8 8 8 4 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f . . . . . . . . 
        . . . . f f f 8 f . . . . . . . 
        . . . . f f 8 8 9 f . . . . . . 
        . . . f . f 8 8 8 9 f . . . . . 
        . . . . . f 8 8 8 9 f . . . . . 
        . . . . f f 8 8 8 8 9 f . . . . 
        . . . . f 4 4 5 5 1 1 f . . . . 
        . . . f f 8 8 8 8 8 9 9 f . . . 
        . . . . f f d d d f d f . . . . 
        . . . . . f d d 3 3 d f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f f 8 9 f . . . . . 
        . . . . . f f 8 8 8 5 f . . . . 
        . . . . . f f 8 8 8 4 f f . . . 
        . . . . . f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`magicGood`, function (sprite4, location2) {
    if (allowMagic == true) {
        if (magicVar < 100) {
            magicVar += 25
            if (Life < 6) {
                Life += 1
            }
            scene.cameraShake(4, 500)
            allowMagic = false
            timer.after(500, function () {
                allowMagic = true
            })
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = 2
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . f f f . . . . . 
        . . . . . . . f 8 f f f . . . . 
        . . . . . . f f 8 9 f f . . . . 
        . . . . . f f 8 8 9 f . f . . . 
        . . . . . f f 8 8 8 f . . . . . 
        . . . . f f 8 8 8 9 f f . . . . 
        . . . . f 4 4 5 5 1 1 f . . . . 
        . . . f f f 8 8 8 8 9 f f . . . 
        . . . . f d f d d d f f . . . . 
        . . . . f d 3 3 d d f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f 8 9 f . . . . . . 
        . . . . f 5 8 8 8 9 f . . . . . 
        . . . f f 4 8 8 8 9 f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . f f f f 8 8 8 9 f . . 
        . . . . f f 8 8 8 8 9 f f f . . 
        . . . f f 8 8 8 8 8 9 f . . f . 
        . . . f 4 4 5 5 5 1 1 f . . . . 
        . . f f 8 8 8 9 8 9 9 9 f . . . 
        . . . f f d f d d d f f . . . . 
        . . . . f d 3 3 d d f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f 8 8 9 f f . . . . 
        . . . . . f 5 8 8 8 9 f f . . . 
        . . . . . f 4 8 8 8 9 f f . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f f f . . . . . 
        . . . . . . . f 8 f f f . . . . 
        . . . . . . f f 8 9 f f . . . . 
        . . . . . f f 8 8 9 f . f . . . 
        . . . . . f f 8 8 8 f . . . . . 
        . . . . f f 8 8 8 9 f f . . . . 
        . . . . f 4 4 5 5 1 1 f . . . . 
        . . . f f f 8 8 8 8 9 f f . . . 
        . . . . f d f d d d f f . . . . 
        . . . . f d 3 3 d d f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f 8 9 f . . . . . . 
        . . . . f 5 8 8 8 9 f . . . . . 
        . . . f f 4 8 8 8 9 f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
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
            dashMeter.setPosition(26, 13)
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(Magic)
    if (magicVar >= 10) {
        Magic = sprites.create(assets.image`Projectile1`, SpriteKind.Projectile)
        Magic.setPosition(mySprite.x, mySprite.y)
        pause(50)
        Magic.setImage(assets.image`Projectile2`)
        pause(50)
        Magic.setImage(assets.image`Projectile3`)
        pause(50)
        if (controller.left.isPressed()) {
            Magic.setImage(assets.image`Projectile4left`)
            Magic.setVelocity(-200, 0)
        } else {
            Magic.setImage(assets.image`Projectile4right`)
            Magic.setVelocity(200, 0)
        }
        magicVar = magicVar - 10
        timer.after(500, function () {
            sprites.destroy(Magic)
        })
    }
})
let Magic: Sprite = null
let dashMeter: Sprite = null
let isInvincible = false
let facing = 0
let book2: Sprite = null
let book1: Sprite = null
let slime2: Sprite = null
let slime1: Sprite = null
let allowMagic = false
let Life = 0
let magicVar = 0
let needKeys = 0
let dash = 0
let mySprite: Sprite = null
let level = 0
level = 1
scene.setBackgroundImage(assets.image`background`)
game.splash("Wizard Tower!")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Apprentice`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
dash = 100
let magicMeter = sprites.create(assets.image`manaMeterFour`, SpriteKind.info)
needKeys = 4
magicMeter.setPosition(9, 31)
magicMeter.setFlag(SpriteFlag.RelativeToCamera, true)
magicVar = 100
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 20))
Life = 6
allowMagic = true
let lives = sprites.create(assets.image`health6`, SpriteKind.info)
lives.setPosition(27, 6)
lives.setFlag(SpriteFlag.RelativeToCamera, true)
slime1 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(slime1, tiles.getTileLocation(14, 5))
slime1.ay = 300
slime2 = sprites.create(assets.image`slimeEnemy`, SpriteKind.Enemy)
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
book1 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
tiles.placeOnTile(book1, tiles.getTileLocation(15, 4))
book2 = sprites.create(assets.image`bookEnemy`, SpriteKind.Enemy)
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
    if (magicVar < 25) {
        magicMeter.setImage(assets.image`manaMeterEmpty`)
    } else if (magicVar >= 25 && magicVar < 50) {
        magicMeter.setImage(assets.image`manaMeterOne`)
    } else if (magicVar >= 50 && magicVar < 75) {
        magicMeter.setImage(assets.image`manaMeterTwo`)
    } else if (magicVar >= 75 && magicVar < 100) {
        magicMeter.setImage(assets.image`manaMeterThree`)
    } else {
        magicMeter.setImage(assets.image`manaMeterFour`)
    }
})
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
forever(function () {
    if (spriteutils.distanceBetween(mySprite, slime1) < 100) {
        if (mySprite.x < slime1.x) {
            slime1.vx = -50
        } else {
            slime1.vx = 50
        }
    }
    slime1.ay = 300
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, slime2) < 100) {
        if (mySprite.x < slime2.x) {
            slime2.vx = -50
        } else {
            slime2.vx = 50
        }
    }
    slime2.ay = 300
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, slime3) < 100) {
        if (mySprite.x < slime3.x) {
            slime3.vx = -50
        } else {
            slime3.vx = 50
        }
    }
    slime3.ay = 300
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, slime4) < 100) {
        if (mySprite.x < slime4.x) {
            slime4.vx = -50
        } else {
            slime4.vx = 50
        }
    }
    slime4.ay = 300
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, slime5) < 100) {
        if (mySprite.x < slime5.x) {
            slime5.vx = -50
        } else {
            slime5.vx = 50
        }
    }
    slime5.ay = 300
})
forever(function () {
    music.play(music.createSong(hex`
                    0078000408020500001c00010a006400f401640000040000000000000000000000000005000004300000000800012a08001000012710001800012c18002000012720002800012a28003000012730003800012c38004000012701001c000f05001202c102c2010004050028000000640028000314000602000430000400080001240c00100001201400180001251c00200001202400280001242c00300001203400380001253c004000012005001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400012a08000c00012710001400012c18001c00012720002400012a28002c00012730003400012c38003c00012706001c00010a006400f401640000040000000000000000000000000000000002300004000c0001270c001400012414001c0001291c002400012424002c0001272c003400012434003c0001293c004000012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800680000000100020308040005000108080009000203080c000d00010810001100020308140015000108180019000203081c001d00010820002100020308240025000108280029000203082c002d00010830003100020308340035000108380039000203083c003d000108
                    `), music.PlaybackMode.UntilDone)
})
