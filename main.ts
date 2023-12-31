namespace SpriteKind {
    export const Endboss = SpriteKind.create()
    export const Guard = SpriteKind.create()
}
namespace StatusBarKind {
    export const Boss_Leben = StatusBarKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ninja,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hatSchwert == 1) {
        Schlag = 1
        Ninja.setImage(img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        pause(100)
        Ninja.setImage(img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        pause(100)
        Ninja.setImage(img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............ccc22eddf..
            .............cdc22fee...
            ............cddc4444f...
            ...........cddcfffff....
            ..........cddc..fff.....
            ..........cdc...........
            ..........cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        pause(100)
        Ninja.setImage(img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        pause(100)
        Ninja.setImage(img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        pause(100)
        Ninja.setImage(img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        pause(100)
        Ninja.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        Schlag = 0
    } else {
        myDart = darts.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . 1 1 1 1 f 1 . . . . . . 
            . . . 1 1 1 f f f 1 . . . . . . 
            . . . . . . 1 f f f 1 1 1 . . . 
            . . . . . . 1 f 1 1 1 1 . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player, Ninja.x, Ninja.y)
        Winkel = 0
        if (controller.dx() < 0 && controller.dy() == 0) {
            Winkel += 180
        } else if (controller.dx() < 0 && controller.dy() < 0) {
            Winkel += 135
        } else if (controller.dx() == 0 && controller.dy() < 0) {
            Winkel += 90
        } else if (controller.dx() > 0 && controller.dy() < 0) {
            Winkel += 45
        } else if (controller.dx() > 0 && controller.dy() == 0) {
            Winkel += 0
        } else if (controller.dx() > 0 && controller.dy() > 0) {
            Winkel += 315
        } else if (controller.dx() == 0 && controller.dy() > 0) {
            Winkel += 270
        } else {
            Winkel += 225
        }
        myDart.angle = Winkel
        myDart.gravity = 0
        myDart.iter = 1
        myDart.controlWithArrowKeys(false)
        myDart.throwDart()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ninja,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ninja,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hatSchwert == 0) {
        animation.runImageAnimation(
        Ninja,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ninja.overlapsWith(Schalter)) {
        tiles.placeOnTile(Leben, tiles.getTileLocation(5, 4))
    }
    if (Ninja.overlapsWith(Leben)) {
        tiles.placeOnTile(Leben, tiles.getTileLocation(-1, -1))
        info.changeLifeBy(1)
        for (let index = 0; index < 100; index++) {
            Leben.startEffect(effects.disintegrate, 5000)
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 0, function (status) {
    info.changeScoreBy(info.life())
    game.setDialogTextColor(5)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 . . 5 5 5 5 5 5 5 . . 5 . 
        . 5 . . 5 5 5 5 5 5 5 . . 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . 
        `)
    game.showLongText("Du hast gewonnen", DialogLayout.Full)
    game.reset()
})
let Winkel = 0
let Schlag = 0
let hatSchwert = 0
let Leben: Sprite = null
let Schalter: Sprite = null
let myDart: Dart = null
let Ninja: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`Level2`)
game.splash("MIT DER LEERTASTE SAMMELT MAN DINGE AUF UND LEGT SCHALTER UM. MIT DER EINGABETASTE BENUTZT MAN SEIN SCHWERT.")
Ninja = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b b 4 4 b b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . 1 1 1 1 f 1 . . . . . . 
    . . . 1 1 1 f f f 1 . . . . . . 
    . . . . . . 1 f f f 1 1 1 . . . 
    . . . . . . 1 f 1 1 1 1 . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player, Ninja.x, Ninja.y)
Schalter = sprites.create(assets.image`meinBild`, SpriteKind.Player)
Leben = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .......22...22......
    ......2322.2222.....
    ......232222222.....
    ......222222222.....
    .......22222b2......
    ........222b2.......
    .........222........
    ..........2.........
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
let _1Geist = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let Schwert = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 f f f 1 f 1 1 1 1 
    1 1 1 1 1 1 1 1 f f f f f 1 1 1 
    1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 
    1 1 1 1 1 1 1 1 f f 1 f 1 1 1 1 
    1 1 1 1 1 1 1 1 1 f 1 1 f 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
let _2Geist = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let _3Geist = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let _4Geist = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let _5Geist = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let _6Geist = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let _7Geist = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let Boss_Leben = statusbars.create(20, 4, StatusBarKind.Health)
let Boss_Geist = sprites.create(img`
    ....55..555.555.555.....
    ....55..555.555.555.....
    ..555555555555555555....
    ..555555555555555555....
    ..555555555555555555....
    ..555555555555555555....
    ..555555555555555555....
    .....fbb11111111bbf.....
    .....f111111111111f.....
    ....fd111111111111df....
    ....fd111111111111df....
    ....fdddd111111ddddf....
    ....fdddd111111ddddf....
    ....fbdd222dd222ddbf....
    ....fcdd22211222ddcf....
    .....fbb11111111bbf.....
    ....ffffcddb1bbdffffff..
    .fcc1111cbbfbffc1111ccf.
    .fcc1111cbbfbffc1111ccf.
    .f11b1bb1ffffff1bb1b11f.
    .fbbfbfffffffffbffbfbbf.
    ........ffffffff........
    ...........ffff.........
    ........................
    `, SpriteKind.Endboss)
let Wurfstern = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f 1 f f f f f f f 
    f f f f f f f f 1 1 f f f f f f 
    f f f f f f f f 1 1 f f f f f f 
    f f f f 1 1 1 1 f 1 f f f f f f 
    f f f 1 1 1 f f f 1 f f f f f f 
    f f f f f f 1 f f f 1 1 1 f f f 
    f f f f f f 1 f 1 1 1 1 f f f f 
    f f f f f f 1 1 f f f f f f f f 
    f f f f f f 1 1 f f f f f f f f 
    f f f f f f f 1 f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Projectile)
Boss_Leben.attachToSprite(Boss_Geist, 0, 0)
info.setLife(3)
tiles.placeOnTile(Schalter, tiles.getTileLocation(4, 3))
tiles.placeOnTile(Leben, tiles.getTileLocation(0, 0))
tiles.placeOnRandomTile(_1Geist, assets.tile`transparency16`)
tiles.placeOnTile(Schwert, tiles.getTileLocation(1, 10))
tiles.placeOnRandomTile(Ninja, assets.tile`transparency16`)
tiles.placeOnTile(Wurfstern, tiles.getTileLocation(-1, -1))
tiles.placeOnRandomTile(_3Geist, assets.tile`transparency16`)
_3Geist.follow(Ninja, 10)
_1Geist.follow(Ninja, 10)
_2Geist.follow(Ninja, 10)
Boss_Geist.follow(Ninja, 10)
controller.moveSprite(Ninja, 70, 70)
tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
scene.cameraFollowSprite(Ninja)
tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
game.setGameOverMessage(false, "Game Over!")
forever(function () {
    if (myDart.overlapsWith(_1Geist)) {
        tiles.placeOnRandomTile(_1Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (myDart.overlapsWith(_3Geist)) {
        tiles.placeOnRandomTile(_3Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (myDart.overlapsWith(_4Geist)) {
        tiles.placeOnRandomTile(_4Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (myDart.overlapsWith(_5Geist)) {
        tiles.placeOnRandomTile(_5Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (myDart.overlapsWith(_7Geist)) {
        tiles.placeOnRandomTile(_7Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (myDart.overlapsWith(_2Geist)) {
        tiles.placeOnRandomTile(_2Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (myDart.overlapsWith(_7Geist)) {
        tiles.placeOnRandomTile(_7Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (myDart.overlapsWith(_6Geist)) {
        tiles.placeOnRandomTile(_6Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    _7Geist.follow(Ninja, 10)
})
forever(function () {
    _4Geist.follow(Ninja, 10)
})
forever(function () {
    if (Ninja.overlapsWith(_1Geist)) {
        tiles.placeOnRandomTile(_1Geist, assets.tile`transparency16`)
        if (Schlag == 0) {
            tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
            info.changeLifeBy(-1)
        }
    }
})
forever(function () {
    if (Ninja.overlapsWith(_7Geist)) {
        tiles.placeOnRandomTile(_7Geist, assets.tile`transparency16`)
        if (Schlag == 0) {
            tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
            info.changeLifeBy(-1)
        }
    }
})
forever(function () {
    if (Ninja.overlapsWith(_6Geist)) {
        tiles.placeOnRandomTile(_6Geist, assets.tile`transparency16`)
        if (Schlag == 0) {
            tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
            info.changeLifeBy(-1)
        }
    }
})
forever(function () {
    if (Ninja.overlapsWith(Schwert) && controller.A.isPressed()) {
        hatSchwert = 1
        myDart.setTrace(false)
        tiles.placeOnTile(Schwert, tiles.getTileLocation(-1, -1))
        pause(5000)
        pause(5000)
        pause(5000)
        pause(5000)
        hatSchwert = 0
        tiles.placeOnTile(Schwert, tiles.getTileLocation(1, 10))
    }
})
forever(function () {
    if (Schlag == 1 && Ninja.overlapsWith(Boss_Geist)) {
        tiles.placeOnTile(Ninja, tiles.getTileLocation(4, 7))
        Boss_Leben.value += -30
    }
})
forever(function () {
    if (Schlag == 1 && Ninja.overlapsWith(_4Geist)) {
        tiles.placeOnRandomTile(_4Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (Schlag == 1 && Ninja.overlapsWith(_3Geist)) {
        tiles.placeOnRandomTile(_3Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (Schlag == 1 && Ninja.overlapsWith(_5Geist)) {
        tiles.placeOnRandomTile(_5Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (Schlag == 1 && Ninja.overlapsWith(_2Geist)) {
        tiles.placeOnRandomTile(_2Geist, assets.tile`transparency16`)
    }
})
forever(function () {
    if (Schlag == 0 && Ninja.overlapsWith(Boss_Geist)) {
        tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
        tiles.placeOnRandomTile(Boss_Geist, assets.tile`transparency16`)
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Schlag == 0 && Ninja.overlapsWith(_3Geist)) {
        tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
        tiles.placeOnRandomTile(_3Geist, assets.tile`transparency16`)
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Schlag == 0 && Ninja.overlapsWith(_2Geist)) {
        tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
        tiles.placeOnRandomTile(_2Geist, assets.tile`transparency16`)
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Schlag == 0 && Ninja.overlapsWith(_4Geist)) {
        tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
        tiles.placeOnRandomTile(_4Geist, assets.tile`transparency16`)
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Schlag == 0 && Ninja.overlapsWith(_5Geist)) {
        tiles.placeOnTile(Ninja, tiles.getTileLocation(7, 4))
        tiles.placeOnRandomTile(_5Geist, assets.tile`transparency16`)
        info.changeLifeBy(-1)
    }
})
forever(function () {
    _6Geist.follow(Ninja, 10)
})
forever(function () {
    _5Geist.follow(Ninja, 10)
})
