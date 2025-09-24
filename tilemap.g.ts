// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2b00160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000005000001010000000000000000020000000000000000000000000000000000000000010100000000000001010000000009000000000000000900000000000000000003000000000000000000000000000101010000000000000000000900000000090000000000000000000000010101010101010101010000000000000000000000000000000000000101000009000000000001010100000000000000000000000000000000000000000000000000000000040000000000000900000900000000000000000000000000000000000000000000000000000000000000010101000000000000010100000000000000000000000000000000000000000000000000020300000101000000000000000000000000000000000000000000000000000000000000000000040000010101000000000000000000000000000000000000000000000000000000000000000000000000000101000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000200000001010100000000000000000000000000000000000000000000000000000000000003000000000101010000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000000000000000000000600000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
...........................................
...........................................
...........................................
....................................22.....
........................22......22....2....
...2.......................222.........2...
.2...........2222222222..................22
..2.....222................................
...2..2...............................222..
....22.............................22......
..............................222..........
...........................22..............
...............................22..........
...........................................
..........................222222...........
......................22...................
.................222.......................
............222............................
......22...................................
.22.............22.........................
...........222.............................
2222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile7,myTiles.tile9,myTiles.tile12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "stone":
            case "tile1":return tile1;
            case "key":
            case "tile5":return tile5;
            case "wand":
            case "tile6":return tile6;
            case "magicEvil0":
            case "tile8":return tile8;
            case "magicGood":
            case "tile10":return tile10;
            case "door":
            case "tile11":return tile11;
            case "stoneLeftEnd":
            case "tile7":return tile7;
            case "stoneRightEnd":
            case "tile9":return tile9;
            case "stoneSingle":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
