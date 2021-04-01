sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
info.setScore(0)
sprites.onDestroyed(SpriteKind.Enemy, function(sprite) {
    info.changeScoreBy(1)
    
})
let timeInterval = 1000
info.setLife(3)
game.onUpdateInterval(timeInterval, function() {
    let rock = sprites.create(img`
        . . . . . c c b b b . . . . . .
        . . . . c b d d d d b . . . . .
        . . . . c d d d d d d b b . . .
        . . . . c d d d d d d d d b . .
        . . . c b b d d d d d d d b . .
        . . . c b b d d d d d d d b . .
        . c c c c b b b b d d d b b b .
        . c d d b c b b b b b b b b d b
        c b b d d d b b b b b d d b d b
        c c b b d d d d d d d b b b d c
        c b c c c b b b b b b b d d c c
        c c b b c c c c b d d d b c c b
        . c c c c c c c c c c c b b b b
        . . c c c c c b b b b b b b c .
        . . . . . . c c b b b b c c . .
        . . . . . . . . c c c c . . . .
    `, SpriteKind.Enemy)
    rock.x = 160
  rock.y = randint(0, 120)
  rock.setFlag(SpriteFlag.AutoDestroy, true)
  rock.setVelocity(randint(-100,-50), randint(-5, 5))

let score = info.score()
if (score <= 10) {
    timeInterval = 1000
    rock.vx = -40
} else if (score > 10 && score <= 20) {
    timeInterval = 800
    controller.moveSprite(ship, 0, 150)
    rock.vx = -60
} else if (score > 20 && score <= 30) {
    timeInterval = 300
    controller.moveSprite(ship, 0, 200)
    rock.vx = -80
} else if (score >30 && score <= 40) {
    timeInterval = 200
    controller.moveSprite(ship, 0, 250)
    rock.vx = -100
} else if (score > 40 && score <= 50) {
    timeInterval = 100
    controller.moveSprite(ship, 0, 300)
    rock.vx = -120
} else {
    timeInterval = 50
    controller.moveSprite(ship, 0, 350)
    rock.vx = -140
}
})

let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)
ship.setPosition(20, 60)
controller.moveSprite(ship, 0,100)
ship.setStayInScreen(true)
