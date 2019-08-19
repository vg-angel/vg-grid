/*example*/

import Grid from "./Grid"

let canvas = <HTMLCanvasElement> document.getElementById('canvas')
let context = <CanvasRenderingContext2D> canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight

let migrid = new Grid({
    cX: 100,
    cY: 50,
    cellH: 20,
    cellW: 20,
    context,
    wH: innerHeight,
    wW: innerWidth,
    gH: 123,
    gW: 1234
})
migrid.draw()