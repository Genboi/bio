namespace SpriteKind {
    export const Support = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const Money = SpriteKind.create()
    export const Portal = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Azoteous.vy == 0) {
        Azoteous.vy = -225
    } else {
        animation.runImageAnimation(
        Azoteous,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . . f f 1 1 f f . . . . . 
            . . . . f f 8 6 6 8 f f . . . . 
            . . . f f a 8 8 8 8 a f f . . . 
            . . f f 6 6 a a a a 6 6 f f . . 
            . . f 6 6 b f c c f b 6 6 f . . 
            . . f f f 1 f 7 7 f 1 f f f . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . . f 7 f f 7 f . . 3 . . 
            . . e 4 f 6 6 6 6 6 6 f 4 e . . 
            . . 4 d f 6 6 1 1 6 6 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . c c 6 6 c c . . . . . 
            . . . . . c c 6 6 c c . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . . . a a a a . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . . f f 1 1 f f . . . . . 
            . . . . f f 8 6 6 8 f f . . . . 
            . . . f f a 8 8 8 8 a f f . . . 
            . . f f 6 6 a a a a 6 6 f f . . 
            . . f 6 6 b f c c f b 6 6 f . . 
            . . f f f 1 f 7 7 f 1 f f f . . 
            . . . . f 7 7 f f 7 7 f . . . . 
            . . . . . f 7 f f 7 f . . . . . 
            . . e 4 f 6 6 6 6 6 6 f 4 e . . 
            . . 4 d f 6 6 1 1 6 6 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . c c 6 6 c c . . . . . 
            . . . . . c c 6 6 c c . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . . f f 1 1 f f . . . . . 
            . . . . f f 8 6 6 8 f f . . . . 
            . . . f f a 8 8 8 8 a f f . . . 
            . . f f 6 6 a a a a 6 6 f f . . 
            . . f 6 6 b f c c f b 6 6 f . . 
            . . f f f 1 f 7 7 f 1 f f f . . 
            . . . . f 7 7 7 7 7 7 f . . . . 
            . . . . . f 7 f f 7 f . . . . . 
            . . e 4 f 6 6 6 6 6 6 f 4 e . . 
            . . 4 d f 6 6 1 1 6 6 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . c c 6 6 c c . . . . . 
            . . . . . c c 6 6 c c . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . . . a a a a . . . . . . 
            `],
        100,
        false
        )
    }
})
function lev2 () {
    tiles.setTilemap(tilemap`level3`)
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbff6bbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbb
        bbbbbbbbbbbffbbbbbbbbbbbbfffbbbbbbbbbbbbbbfbbbbbbbbffbbbbbbbbbbbbfffbbbbbbbbbbbbbbfbbbbbbbbffbbbbbbbbbbbbfffbbbbbbbbbbbbbbfbbbbbbbbffbbbbbbbbbbbbfffbbbbbbbbbbbb
        bbbbbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbbbbfbbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbbbbfbbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbbbbfbbbbbbbbbffbbbbbbbbbbbbffbbbbbbbbbbbb
        bbbbbbbbbbbbbfffbbbbbbbbbbffbbbbbbbbbbbbbffbbbbbbbbbbfffbbbbbbbbbbffbbbbbbbbbbbbbffbbbbbbbbbbfffbbbbbbbbbbffbbbbbbbbbbbbbffbbbbbbbbbbfffbbbbbbbbbbffbbbbbbbbbbbb
        bbbbbbfbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbbbffbbbfbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbbbffbbbfbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbbbffbbbfbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbb
        bbbbbffbbbbbbbbffbbbbbbbbbbffbbbbbbbbbbbbffbbffbbbbbbbbffbbbbbbbbbbffbbbbbbbbbbbbffbbffbbbbbbbbffbbbbbbbbbbffbbbbbbbbbbbbffbbffbbbbbbbbffbbbbbbbbbbffbbbbbbbbbbb
        bbbbbbfbbbbbbbbffbbbbbbbbbbfffbbbbbbbbbbfffbbbfbbbbbbbbffbbbbbbbbbbfffbbbbbbbbbbfffbbbfbbbbbbbbffbbbbbbbbbbfffbbbbbbbbbbfffbbbfbbbbbbbbffbbbbbbbbbbfffbbbbbbbbbb
        bbbffbfbbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbfffffbfbbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbfffffbfbbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbfffffbfbbbbbbbbfffbbbbbbbbbfffbbbbbbbbbb
        bbbbfffbbbbbbbbbffbbbbbbbbbfffbbbbbbbbbbfffbfffbbbbbbbbbffbbbbbbbbbfffbbbbbbbbbbfffbfffbbbbbbbbbffbbbbbbbbbfffbbbbbbbbbbfffbfffbbbbbbbbbffbbbbbbbbbfffbbbbbbbbbb
        bbbbfffbbbbbbbbbfffbbbbbbbbfffbbbbbbbbbbfffbfffbbbbbbbbbfffbbbbbbbbfffbbbbbbbbbbfffbfffbbbbbbbbbfffbbbbbbbbfffbbbbbbbbbbfffbfffbbbbbbbbbfffbbbbbbbbfffbbbbbbbbbb
        bbbffffbbbbbbbbbbffbbbbbbbbffffbbbbbbbbbfffffffbbbbbbbbbbffbbbbbbbbffffbbbbbbbbbfffffffbbbbbbbbbbffbbbbbbbbffffbbbbbbbbbfffffffbbbbbbbbbbffbbbbbbbbffffbbbbbbbbb
        bbbffffbbbbbbbbbbbffbbbbbbbffffbbbbbbbbbffbffffbbbbbbbbbbbffbbbbbbbffffbbbbbbbbbffbffffbbbbbbbbbbbffbbbbbbbffffbbbbbbbbbffbffffbbbbbbbbbbbffbbbbbbbffffbbbbbbbbb
        bbbbfffffbbbbbbbbbfffbbbbbbbfffbbbbbbbbbffbbfffffbbbbbbbbbfffbbbbbbbfffbbbbbbbbbffbbfffffbbbbbbbbbfffbbbbbbbfffbbbbbbbbbffbbfffffbbbbbbbbbfffbbbbbbbfffbbbbbbbbb
        bbbbffffbbbbbbbbbbfffffbbbbbfffbbbbbbbbfffbbffffbbbbbbbbbbfffffbbbbbfffbbbbbbbbfffbbffffbbbbbbbbbbfffffbbbbbfffbbbbbbbbfffbbffffbbbbbbbbbbfffffbbbbbfffbbbbbbbbf
        bbbbfffbbbbbbbbbbbffffffbbbbffffbbbbbbbfffbbfffbbbbbbbbbbbffffffbbbbffffbbbbbbbfffbbfffbbbbbbbbbbbffffffbbbbffffbbbbbbbfffbbfffbbbbbbbbbbbffffffbbbbffffbbbbbbbf
        bbbbfffbbbbbbbbbbbffffffffbbffffbbbbbbbfffbbfffbbbbbbbbbbbffffffffbbffffbbbbbbbfffbbfffbbbbbbbbbbbffffffffbbffffbbbbbbbfffbbfffbbbbbbbbbbbffffffffbbffffbbbbbbbf
        bbbbbffbbbbbbbbbbffffffffffffffffbbbbbbffbbbbffbbbbbbbbbbffffffffffffffffbbbbbbffbbbbffbbbbbbbbbbffffffffffffffffbbbbbbffbbbbffbbbbbbbbbbffffffffffffffffbbbbbbf
        bbbbbfffbbbbbbbbbffbbbbbfffffffffbbbbbbffbbbbfffbbbbbbbbbffbbbbbfffffffffbbbbbbffbbbbfffbbbbbbbbbffbbbbbfffffffffbbbbbbffbbbbfffbbbbbbbbbffbbbbbfffffffffbbbbbbf
        bbbbbffffbbbbbbbbffbbbbbbffffffffbbbbbfffbbbbffffbbbbbbbbffbbbbbbffffffffbbbbbfffbbbbffffbbbbbbbbffbbbbbbffffffffbbbbbfffbbbbffffbbbbbbbbffbbbbbbffffffffbbbbbff
        bbbbbfffffbbbbbbfffbbbbbbbfffffffbbbbffffbbbbfffffbbbbbbfffbbbbbbbfffffffbbbbffffbbbbfffffbbbbbbfffbbbbbbbfffffffbbbbffffbbbbfffffbbbbbbfffbbbbbbbfffffffbbbbfff
        ffbbbbbfffffbbbbfffbbbbbbbbbfffffbbbffffffbbbbbfffffbbbbfffbbbbbbbbbfffffbbbffffffbbbbbfffffbbbbfffbbbbbbbbbfffffbbbffffffbbbbbfffffbbbbfffbbbbbbbbbfffffbbbffff
        bfbbbbbfffffffbfffbbbbbbbbbbfffffbbffffbbfbbbbbfffffffbfffbbbbbbbbbbfffffbbffffbbfbbbbbfffffffbfffbbbbbbbbbbfffffbbffffbbfbbbbbfffffffbfffbbbbbbbbbbfffffbbffffb
        bfbbbbbbffffffffffbbbbbbbbbbfffffbbfffbbbfbbbbbbffffffffffbbbbbbbbbbfffffbbfffbbbfbbbbbbffffffffffbbbbbbbbbbfffffbbfffbbbfbbbbbbffffffffffbbbbbbbbbbfffffbbfffbb
        bfbbbbbbfffffffffbbbbbbbbbbbfffffbbffbbbbfbbbbbbfffffffffbbbbbbbbbbbfffffbbffbbbbfbbbbbbfffffffffbbbbbbbbbbbfffffbbffbbbbfbbbbbbfffffffffbbbbbbbbbbbfffffbbffbbb
        bffbbbbbfffffffbbbbbbbbbbbbbfffffbbfffbbbffbbbbbfffffffbbbbbbbbbbbbbfffffbbfffbbbffbbbbbfffffffbbbbbbbbbbbbbfffffbbfffbbbffbbbbbfffffffbbbbbbbbbbbbbfffffbbffbbb
        bbffbbbbffffffbbbbbbbbbbbbbbfffffbbfffbbbbffbbbbffffffbbbbbbbbbbbbbbfffffbbfffbbbbffbbbbffffffbbbbbbbbbbbbbbfffffbbfffbbbbffbbbbffffffbbbbbbbbbbbbbbfffffbbffbbb
        bbfffbbbffffffbbbbbbbbbbbbbbfffffbfffffbbbfffbbbffffffbbbbbbbbbbbbbbfffffbfffffbbbfffbbbffffffbbbbbbbbbbbbbbfffffbfffffbbbfffbbbffffffbbbbbbbbbbbbbbfffffbfffbbb
        bbbbffffffffffbbbbbbbbbbbbbffffffbfffbfbbbbbffffffffffbbbbbbbbbbbbbffffffbfffbfbbbbbffffffffffbbbbbbbbbbbbbffffffbfffbfbbbbbffffffffffbbbbbbbbbbbbbffffffbfffbbb
        bbbbffffffffffbbbbbbbbbbbbbfffffffffbbfbbbbbffffffffffbbbbbbbbbbbbbfffffffffbbfbbbbbffffffffffbbbbbbbbbbbbbfffffffffbbfbbbbbffffffffffbbbbbbbbbbbbbfffffffffbbbb
        bbbbbbffffffffbbbbbbbbbbbbbfffffffffbbffbbbbbbffffffffbbbbbbbbbbbbbfffffffffbbffbbbbbbffffffffbbbbbbbbbbbbbfffffffffbbffbbbbbbffffffffbbbbbbbbbbbbbfffffffffbbbb
        bbbbbbbbffffffbbbbbbbbbbbbfffffffffbbbbffbbbbbbbffffffbbbbbbbbbbbbfffffffffbbbbffbbbbbbbffffffbbbbbbbbbbbbfffffffffbbbbffbbbbbbbffffffbbbbbbbbbbbbfffffffffbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbbfffffffffbbbbbffbbbbbbbfffffbbbbbbbbbbbbfffffffffbbbbbffbbbbbbbfffffbbbbbbbbbbbbfffffffffbbbbbffbbbbbbbfffffbbbbbbbbbbbbfffffffffbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbbffffffffbbbbbbffbbbbbbbfffffbbbbbbbbbbbbffffffffbbbbbbffbbbbbbbfffffbbbbbbbbbbbbffffffffbbbbbbffbbbbbbbfffffbbbbbbbbbbbbffffffffbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbbbfbbbbbbbfffffbbbbbbbbbbbfffffffffbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbbffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbbffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbbffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbbffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbbffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbbffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbfffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbfffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbfffbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbb
        bbbbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbffbbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbffbbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbbffbbbbbbbfffffbbbbbbbbbbbffffffffbbbbbbb
        bbbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbbffbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbbffbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbbffbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbb
        bbbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbbffbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbbffbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbbffbbbbbbbffffffbbbbbbbbbbffffffffbbbbbbb
        bbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbbffbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbbffbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbbffbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbfffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbfffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbfffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbfffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbfffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbfffbbbbbbbbffffffbbbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbfffbbbbbbbbbfffffffbbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbffffffffbbbbbbbbfffffffbbbbffffbbbbbbbbbffffffffbbbbbbbbfffffffbbbbffffbbbbbbbbbffffffffbbbbbbbbfffffffbbbbffffbbbbbbbbbffffffffbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbffffffffbbbbbbbbfffffffbbbbffffbbbbbbbbbffffffffbbbbbbbbfffffffbbbbffffbbbbbbbbbffffffffbbbbbbbbfffffffbbbbffffbbbbbbbbbffffffffbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbffffffffbbbbbbbbfffffffbbbbfffbbbbbbbbbbffffffffbbbbbbbbfffffffbbbbfffbbbbbbbbbbffffffffbbbbbbbbfffffffbbbbfffbbbbbbbbbbffffffffbbbbbbbbfffffffbbbbbbbb
        bbbbbbbbbbffffffffbbbbbbffffffffbbbbfffbbbbbbbbbbbffffffffbbbbbbffffffffbbbbfffbbbbbbbbbbbffffffffbbbbbbffffffffbbbbfffbbbbbbbbbbbffffffffbbbbbbffffffffbbbbbbbb
        fbbbbbbbbbffffffffbbbbbbfffffffffffffffffbbbbbbbbbffffffffbbbbbbfffffffffffffffffbbbbbbbbbffffffffbbbbbbfffffffffffffffffbbbbbbbbbffffffffbbbbbbffffffffbbbbbbbb
        fffffbbbbbffffffffbbbbbbfffffffffffffffffffffbbbbbffffffffbbbbbbfffffffffffffffffffffbbbbbffffffffbbbbbbfffffffffffffffffffffbbbbbffffffffbbbbbbfffffffffbbbbfff
        ffffffffbbfffffffffbbbffffffffffffffffffffffffffbbfffffffffbbbffffffffffffffffffffffffffbbfffffffffbbbffffffffffffffffffffffffffbbfffffffffbbbfffffffffffbbfffff
        fffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffbffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffeeeeeeeeeeffffffffffffffffffffffffffffffeeeeeeeeeeffffffffffffffffffffffffffffffeeeeeeeeeeffffffffffffffffffffffffffffffeeeeeeeeeefffffffffff
        ffffffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeffffff
        fffffffffffeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffff
        ffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff
        fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.trail, -10)
    music.pewPew.playUntilDone()
    if (info.score() == 30) {
        nextLevel()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Bullet = sprites.createProjectileFromSprite(assets.image`myImage`, Azoteous, 300, 0)
})
function nextLevel () {
    game.splash("Powering teleporter", "Taking you to rhizobium")
    tiles.setTilemap(tilemap`level2`)
    scene.setBackgroundColor(9)
    scene.setBackgroundImage(assets.image`myImage0`)
    info.setLife(6)
    info.setScore(0)
    for (let value1 of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.placeOnRandomTile(Azoteous, assets.tile`myTile6`)
        tiles.setTileAt(value1, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile7`)) {
        Rhizobium = sprites.create(assets.image`rhizo`, SpriteKind.NPC)
        tiles.placeOnRandomTile(Rhizobium, assets.tile`myTile7`)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    if (Azoteous.overlapsWith(Rhizobium)) {
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . f 7 f . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . 1 7 1 . . . . . . . 
            . . . . . . 7 1 7 . . . . . . . 
            . . . . . . 7 1 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            `)
        game.splash("Azoteous you have come at last ")
        game.setDialogCursor(assets.image`myImage5`)
        game.splash("You claim to know me but even I don't know who I am")
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . f 7 f . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . . 1 7 1 . . . . . . . 
            . . . . . . 7 1 7 . . . . . . . 
            . . . . . . 7 1 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            `)
        game.splash("Patience child your memories were taken for a reason", "they will return")
        game.splash("Go forth my child and wreak vengeance upon those pesticides", "I will give u my essence to help you")
        Rhizobium.destroy(effects.bubbles, 500)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 1000)
    scene.cameraShake(4, 1000)
    music.zapped.playUntilDone()
})
let Jelly_boy: Sprite = null
let Rhizobium: Sprite = null
let Bullet: Sprite = null
let Crystals: Sprite = null
let Azoteous: Sprite = null
let lelve = 1
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`1`)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
    8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888886
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888888888888886888888688888888
    8888888888888888888888888888886968888888888888888888888888888888888888696888888888888888888888888888888888888869688888888888888888888888888888888888886968888888
    8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
    8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
    8888883333388888888888888888888888888888888888333338888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
    8888888333888888888888888888888888888888888888833388888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
    8888888383888888888888888888888888888888888888838388888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888886888888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888
    8888888888888888888888888888888886888688888888888888888888888888888888888688868888888888888888888888888888888888868886888888888888888888888888888888888886888688
    8888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d88888888888886888888
    888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888
    8888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d88888888888866688888
    8888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888
    8888888888888888888888688888888886888888888888888888888888888868888888888688888888888888888888888888886888888888868888888888888888888888888888688888888886888888
    8888886888888888888888688888888666688888888888688888888888888868888888866668888888888868888888888888886888888886666888888888886888888888888888688888888666688888
    8888886688888888888886668888888866688888888888668888888888888666888888886668888888888866888888888888866688888888666888888888886688888888888886668888888866688888
    8888886888888888888888688888866666888888888888688888888888888868888886666688888888888868888888888888886888888666668888888888886888888888888888688888866666888888
    8888866688888888888888666888886666668888888886668888888888888866688888666666888888888666888888888888886668888866666688888888866688888888888888666888886666668888
    8888886668888888888886668888888666668888888888666888888888888666888888866666888888888866688888888888866688888886666688888888886668888888888886668888888666668888
    8888866688888888888866668888866666688888888886668888888888886666888886666668888888888666888888888888666688888666666888888888866688888888888866668888866666688888
    6688886668888888888888666888888666666666668888666888888888888866688888866666666666888866688888888888886668888886666666666688886668888888888888666888888666666666
    6666666888888888888866668888666666666666666666688888888888886666888866666666666666666668888888888888666688886666666666666666666888888888888866668888666666666666
    6666666666688888888886666666666666666666666666666668888888888666666666666666666666666666666888888888866666666666666666666666666666688888888886666666666666666666
    6666666666666688888866666666666666666666666666666666668888886666666666666666666666666666666666888888666666666666666666666666666666666688888866666666666666666666
    6666666666667799999999999999776666666666666666666666779999999999999977666666666666666666666677999999999999997766666666666666666666667799999999999999776666666666
    6666666667799999999999999999999977666666666666666779999999999999999999997766666666666666677999999999999999999999776666666666666667799999999999999999999977666666
    6666666799999999999999999999999999997666666666679999999999999999999999999999766666666667999999999999999999999999999976666666666799999999999999999999999999997666
    6666679999999999999999999999996111199977666667999999999999999999999999611119997766666799999999999999999999999961111999776666679999999999999999999999996111199977
    7779999999996999999999999999996999111997777999999999699999999999999999699911199777799999999969999999999999999969991119977779999999996999999999999999996999111997
    9999999999996999999999999999996699911119999999999999699999999999999999669991111999999999999969999999999999999966999111199999999999996999999999999999996699911119
    1999999999996699999999999999966999999111199999999999669999999999999996699999911119999999999966999999999999999669999991111999999999996699999999999999966999999111
    1119999999966699999999999999996999999991111999999996669999999999999999699999999111199999999666999999999999999969999999911119999999966699999999999999996999999991
    9911119999996999999999999999966669999999991111999999699999999999999996666999999999111199999969999999999999999666699999999911119999996999999999999999966669999999
    9999999999966699999999999999996699999999999999999996669999999999999999669999999999999999999666999999999999999966999999999999999999966699999999999999996699999999
    9999999999996669999999999911166619999999999999999999666999999999991116661999999999999999999966699999999999111666199999999999999999996669999999999911166619999999
    9999999999966999999999911119966669999999999999999996699999999991111996666999999999999999999669999999999111199666699999999999999999966999999999911119966669999999
    9999999999966699999991111999996666999999999999999996669999999111199999666699999999999999999666999999911119999966669999999999999999966699999991111999996666999999
    9999999999666669999111199999666669999999999999999966666999911119999966666999999999999999996666699991111999996666699999999999999999666669999111199999666669999999
    9999999999966699111111999999966666699999999999999996669911111199999996666669999999999999999666991111119999999666666999999999999999966699111111999999966666699999
    1111999996666661111199999999666666999911111199999666666111119999999966666699991111119999966666611111999999996666669999111111999996666661111199999999666666999911
    1111111996666699999999999999996666911111111111199666669999999999999999666691111111111119966666999999999999999966669111111111111996666699999999999999996666911111
    1111111166666666999999999996666691111111111111116666666699999999999666669111111111111111666666669999999999966666911111111111111166666666999999999996666691111111
    1111111111666669999999999999666911111111111111111166666999999999999966691111111111111111116666699999999999996669111111111111111111666669999999999999666911111111
    1111111116666666999999999999691111111111111111111666666699999999999969111111111111111111166666669999999999996911111111111111111116666666999999999999691111111111
    1111111166666666661111199999111111111111111111116666666666111119999911111111111111111111666666666611111999991111111111111111111166666666661111199999111111111111
    1111111666666666661119999111111111111111111111166666666666111999911111111111111111111116666666666611199991111111111111111111111666666666661119999111111111111111
    1111111116666666199999111111111111111111111111111666666619999911111111111111111111111111166666661999991111111111111111111111111116666666199999111111111111111111
    1111111166666666699111111111111111111111111111116666666669911111111111111111111111111111666666666991111111111111111111111111111166666666699111111111111111111111
    1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
    1111111116666666666111111111111111111111111111111666666666611111111111111111111111111111166666666661111111111111111111111111111116666666666111111111111111111111
    1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
    1111111166666666611111111111111119999911111111116666666661111111111111111999991111111111666666666111111111111111199999111111111166666666611111111111111119999911
    9111111111666666661111111111111991111199911111111166666666111111111111199111119991111111116666666611111111111119911111999111111111666666661111111111111991111199
    9999111666666666661111111111999111111111999911166666666666111111111199911111111199991116666666666611111111119991111111119999111666666666661111111111999111111111
    1199991166666666666111111199111111111111119999116666666666611111119911111111111111999911666666666661111111991111111111111199991166666666666111111199111111111111
    1111999996666661111111199911111111111111111199999666666111111119991111111111111111119999966666611111111999111111111111111111999996666661111111199911111111111111
    1111119999999111111111911111111111111111111111999999911111111191111111111111111111111199999991111111119111111111111111111111119999999111111111911111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
Azoteous = sprites.create(assets.image`myImage5`, SpriteKind.Player)
game.setDialogCursor(assets.image`myImage5`)
game.showLongText("Where am I? Who am I?", DialogLayout.Bottom)
game.setDialogCursor(assets.image`myImage3`)
game.showLongText("You are Azoteous, King of nitrogen. Your dear friends, plants need you", DialogLayout.Bottom)
game.showLongText("Lead the path of victory and take your fellow nitrogens to your dear friends plants and destroy anything that comes in your way.", DialogLayout.Bottom)
game.splash("Make your way to Rhizobium", "He will help you")
game.splash("Go DOWN", "")
controller.moveSprite(Azoteous, 150, 0)
Azoteous.ay = 450
scene.cameraFollowSprite(Azoteous)
info.setLife(6)
music.magicWand.playUntilDone()
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    Crystals = sprites.create(img`
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . a 8 8 8 a . . . . . . 
        . . . . a a a 8 a a a . . . . . 
        . . . . a 1 a a a a a . . . . . 
        . . . . 8 a 1 a a a 8 . . . . . 
        . . . . 8 8 a 1 a 8 8 . . . . . 
        . . . . 8 8 8 a 8 8 8 . . . . . 
        . . . . 8 1 8 a 8 8 8 . . . . . 
        . . . . 8 8 1 a 8 8 8 . . . . . 
        . . . . a a 8 1 8 a a . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . . . 8 a 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Money)
    animation.runImageAnimation(
    Crystals,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f 8 f . . . . . . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . f a 8 8 8 a f . . . . . . . 
        . f a a a 8 a a a f . . . . . . 
        . f a 1 a a a a a f . . . . . . 
        . f 8 a 1 a a a 8 f . . . . . . 
        . f 8 8 a 1 a 8 8 f . . . . . . 
        . f 8 8 8 a 8 8 8 f . . . . . . 
        . f 8 1 8 a 8 8 8 f . . . . . . 
        . f 8 8 1 a 8 8 8 f . . . . . . 
        . f a a 8 1 8 a a f . . . . . . 
        . f a a a a a a a f . . . . . . 
        . . f a a a a a f . . . . . . . 
        . . . f 8 a 8 f . . . . . . . . 
        . . . . f 8 f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 8 f . . . . . . . . . . 
        . . f 8 8 8 f . . . . . . . . . 
        . . f 8 8 8 f . . . . . . . . . 
        . . f a 8 a f . . . . . . . . . 
        . . f a a a f . . . . . . . . . 
        . . f 1 a a f . . . . . . . . . 
        . . f a 1 a f . . . . . . . . . 
        . . f 8 a 8 f . . . . . . . . . 
        . . f 8 a 8 f . . . . . . . . . 
        . . f 1 a 8 f . . . . . . . . . 
        . . f 8 1 8 f . . . . . . . . . 
        . . f a a a f . . . . . . . . . 
        . . f a a a f . . . . . . . . . 
        . . f 8 a 8 f . . . . . . . . . 
        . . . f 8 f . . . . . . . . . . 
        `,img`
        . . . . 8 . . . . . . . . . . . 
        . . . f 8 f . . . . . . . . . . 
        . . . f 8 f . . . . . . . . . . 
        . . . f 8 f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . f 1 f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . f 1 f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . f a f . . . . . . . . . . 
        . . . . 8 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f 8 f . . . . . . . . . . 
        . . f 8 8 8 f . . . . . . . . . 
        . . f 8 8 8 f . . . . . . . . . 
        . . f a 8 a f . . . . . . . . . 
        . . f a a a f . . . . . . . . . 
        . . f 1 a a f . . . . . . . . . 
        . . f a 1 a f . . . . . . . . . 
        . . f 8 a 8 f . . . . . . . . . 
        . . f 8 a 8 f . . . . . . . . . 
        . . f 1 a 8 f . . . . . . . . . 
        . . f 8 1 8 f . . . . . . . . . 
        . . f a a a f . . . . . . . . . 
        . . f a a a f . . . . . . . . . 
        . . f 8 a 8 f . . . . . . . . . 
        . . . f 8 f . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f 8 f . . . . . . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . f a 8 8 8 a f . . . . . . . 
        . f a a a 8 a a a f . . . . . . 
        . f a 1 a a a a a f . . . . . . 
        . f 8 a 1 a a a 8 f . . . . . . 
        . f 8 8 a 1 a 8 8 f . . . . . . 
        . f 8 8 8 a 8 8 8 f . . . . . . 
        . f 8 1 8 a 8 8 8 f . . . . . . 
        . f 8 8 1 a 8 8 8 f . . . . . . 
        . f a a 8 1 8 a a f . . . . . . 
        . f a a a a a a a f . . . . . . 
        . . f a a a a a f . . . . . . . 
        . . . f 8 a 8 f . . . . . . . . 
        . . . . f 8 f . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(Crystals, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdateInterval(1000, function () {
    for (let PoomP of tiles.getTilesByType(assets.tile`myTile4`)) {
        Jelly_boy = sprites.create(assets.image`myImage7`, SpriteKind.Enemy)
        animation.runImageAnimation(
        Jelly_boy,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . . f f 2 2 f f . . . . . 
            . . . . f f 2 2 2 2 f f . . . . 
            . . . f f 4 4 1 1 4 4 f f . . . 
            . . f f e 2 2 2 2 2 2 e f f . . 
            . . f e 4 4 4 4 4 4 4 4 e f . . 
            . . f f f f f f f f f f f f . . 
            . . f 7 f f 5 5 5 5 f f 7 f . . 
            . . f 7 4 f 5 2 2 5 f 4 7 f . . 
            . . e f e f 5 5 5 5 f e f e . . 
            . . 4 4 . f f f f f f . 4 4 . . 
            . . b 4 . c . c . . c . 4 b . . 
            . . . . c . . . c . . c . . . . 
            . . . . . c . . . . c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f 2 2 f f . . . . . 
            . . . . f f 2 2 2 2 f f . . . . 
            . . . f f 4 4 1 1 4 4 f f . . . 
            . . f f e 2 2 2 2 2 2 e f f . . 
            . . f e 4 4 4 4 4 4 4 4 e f . . 
            . . f f f f f f f f f f f f . . 
            . . f 7 f f 5 5 5 5 f f 7 f . . 
            . . f 7 4 f 5 2 2 5 f 4 7 f . . 
            . . e f e f 5 5 5 5 f e f e . . 
            . . 4 4 . f f f f f f . 4 4 . . 
            . . b 4 . c . c . . c . 4 b . . 
            . . . . c . . . c . . c . . . . 
            . . . . . c . c . . c . . . . . 
            . . . . c . . . c . . c . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(Jelly_boy, PoomP)
        tiles.setTileAt(PoomP, assets.tile`transparency16`)
    }
})
