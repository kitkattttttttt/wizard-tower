// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1a":
            case "level2":return tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000003040000000304000000000000000000000000000000000003010101010101010104`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . 2 2 . . 
. 2 2 . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile9], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`2b001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000040000060700000000000000000100000000000000000000000000000000000000000607000000000000060700000000080000000000000008000000000000000000020000000000000000000000000006090700000000000000000008000000000800000000000000000000000609090909090909090700000000000000000000000000000000000006070000080000000000060907000000000000000000000000000000000000000000000000000000000300000000000008000a08000000000000000000000000000000000000000000000000000000000000000609070000000000000607000000000000000000000000000000000000000000000000000102000006070000000000000000000000000000000000000000000000000000000000000000000300000609070000000000000000000000000000000000000000000000000000000000000000000000000006070000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000607000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000609090909070000000000000000000000000000000000000000000000000000000000000000000607000000000000000000000000000000000000000000000000000000000000000001000000060907000000000000000000000000000000000000000000000000000000000000020000000006090700000000000000000000000000000000000000000000000000000000000000000000060700000000000000000000000000000000000000000000000000000000000000000000000006070000000000000000000000000006070000000000000000000000000000000000000000000000000000000000000000000000000609070000000000000000000000000000000000000000000a050a000a00000006090909090909090909090909090909090909090909090909090909090909090909090909090909090907`, img`
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
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile6,myTiles.tile8,myTiles.tile10,myTiles.tile11,myTiles.tile7,myTiles.tile9,myTiles.tile12,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "key":
            case "tile5":return tile5;
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
            case "wand":
            case "tile6":return tile6;
            case "stoneLeftEnd0":
            case "tile3":return tile3;
            case "stoneSlime":
            case "tile1":return tile1;
            case "bookSpawn":
            case "tile13":return tile13;
            case "slimeSpawn":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
