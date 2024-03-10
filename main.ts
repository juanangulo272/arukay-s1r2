info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite3.setPosition(randint(10, 110), randint(10, 110))
    info.changeScoreBy(4)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(10, 110), randint(10, 110))
    info.changeScoreBy(4)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(10, 10)
mySprite2 = sprites.create(img`
    . . . e e e e . . . . . . . . . 
    . . . e . . e . . . . . . . . . 
    . . . e . . e . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
mySprite2.setPosition(randint(10, 110), randint(10, 110))
mySprite3 = sprites.create(img`
    . . . e e e e . . . . . . . . . 
    . . . e . . e . . . . . . . . . 
    . . . e . . e . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite3.setPosition(randint(10, 110), randint(10, 110))
controller.moveSprite(mySprite)
info.setScore(0)
info.startCountdown(60)
