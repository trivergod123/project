def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

not_enemy: Sprite = None
goomba: Sprite = None
not_goomba: Sprite = None
tiles.set_tilemap(tilemap("""
    level1
"""))
Not_Mario = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.place_on_tile(Not_Mario, tiles.get_tile_location(0, 4))
scene.camera_follow_sprite(Not_Mario)
not_goomba.set_stay_in_screen(True)
goomba.set_stay_in_screen(True)
not_enemy.set_stay_in_screen(True)
Not_Mario.set_stay_in_screen(True)
Not_Mario.say("We need to save the princess come on!!!")
not_goomba = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
not_goomba.set_velocity(10, 40)
not_enemy = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
goomba = sprites.create(img("""
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
    """),
    SpriteKind.enemy)