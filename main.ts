sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
tiles.setTilemap(tilemap`level1`)
let Not_Mario = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Not_Mario, tiles.getTileLocation(0, 3))
scene.cameraFollowSprite(Not_Mario)
Not_Mario.say("We need to save the princess come on!!!")
let not_goomba = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff1111bff.......
    .......fb1111111bf......
    .......f111111111f......
    ......fd1111111ffff.....
    ......fd111dd1c111bf....
    ......fb11fcdf1b1bff....
    ......f11111bfbfbff.....
    ......f1b1bdfcffff......
    ......fbfbfcfcccf.......
    ......ffffffffff........
    .........ffffff.........
    .........ffffff.........
    .........fffffff..f.....
    ..........fffffffff.....
    ...........fffffff......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
not_goomba.setPosition(randint(30, 70), randint(20, 80))
let not_enemy = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
not_enemy.setPosition(randint(10, 40), randint(20, 50))
let goomba = sprites.create(img`
    . . . . . . c c c c c c c . . . 
    . . . . . c f f 6 6 f f 7 c . . 
    . . . . c 7 6 6 6 6 6 6 7 6 c . 
    . . . c 7 7 7 7 7 7 7 7 7 7 c . 
    . . . c 7 8 1 f f 1 6 7 7 7 c . 
    . . . f 6 f 1 f f 1 f 7 7 7 f . 
    . . . f 6 f 2 2 2 2 f 7 7 7 f . 
    . . c c 6 f 2 2 2 2 f 7 7 6 f . 
    . c 7 7 7 7 2 2 2 2 7 7 f c . . 
    c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
    f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
    f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 6 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
let enemy2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    c d e e d d d d e e d d f . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e b d c . f f 
    . f d d d d e e e f f c . f e f 
    . f f f f f f e e e e f . f e f 
    . f f f f e e e e e e e f f e f 
    f d d f d d f e f e e e e f f . 
    f d b f d b f e f e e e e f . . 
    f f f f f f f f f f f f e f . . 
    . . . . . . . . . f c d d f . . 
    . . . . . . . . . . f f f f . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . c 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . f f 5 3 c 3 5 f f 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    ..............cfff..............
    ............ccddbf..............
    ...........cbddbff.........ccc..
    ..........fccbbcf.........cbbc..
    ...fffffffccccccff.......cdbc...
    .ffcbbbbbbbbbbbbbcfff....cdbf...
    fcbbbbbbbbbcbbbbbbcccff.cdbf....
    fbcbbbbffbbbcbcbbbcccccffdcf....
    fbb1111ffbbbcbcbbbccccccbbcf....
    .fb11111111bbcbbbccccccccbbcf...
    ..fccc33cb11bbbbcccccccfffbbf...
    ...fc131c111bbbcccccbdbc..fbbf..
    ....f33c111cbbccdddddbc....fff..
    .....ff1111fdbbccddbcc..........
    .......cccccfdbbbfcc............
    .............fffff..............
    `, SpriteKind.Player)
goomba.setPosition(randint(30, 100), randint(20, 70))
not_goomba.setStayInScreen(true)
goomba.setStayInScreen(true)
not_enemy.setStayInScreen(true)
Not_Mario.setStayInScreen(true)
controller.moveSprite(Not_Mario, 50, 50)
