let Player_1 = sprites.create(img`
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player_1, 0, 100)
Player_1.x = 0
Player_1.setStayInScreen(true)
info.setScore(0)
let Player_2 = sprites.create(img`
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    `, scene.screenWidth())
controller.moveSprite(Player_2, 0, 100)
info.player2.setScore(0)
Player_2.x = scene.screenWidth()
Player_2.setStayInScreen(true)
