

let canvas  = <HTMLCanvasElement>document.getElementById("canvas")
let ctx     = canvas.getContext("2d")
let w       = canvas.width  = innerWidth
let h       = canvas.height = innerHeight

export {
    canvas, 
    ctx, 
    w, 
    h
}