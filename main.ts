namespace SpriteKind {
    export const info = SpriteKind.create()
    export const slimeEnemy = SpriteKind.create()
}
// Jump
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`jump`,
        100,
        false
        )
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`magicGood`, function (sprite, location) {
    if (allowMagic == true) {
        if (magicVar < 100) {
            magicVar += 25
            Life += 1
            scene.cameraShake(4, 500)
            allowMagic = false
            timer.after(500, function () {
                allowMagic = true
            })
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
let allowMagic = false
let magicVar = 0
let dash = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Apprentice`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
dash = 100
let magicMeter = sprites.create(assets.image`manaMeterFour`, SpriteKind.info)
magicMeter.setPosition(9, 31)
magicMeter.setFlag(SpriteFlag.RelativeToCamera, true)
magicVar = 100
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 20))
let Life = 6
allowMagic = true
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
