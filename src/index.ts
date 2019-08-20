/*example*/

import Grid2 from "./Grid2"

let canvas = <HTMLCanvasElement> document.getElementById('canvas')
let context = <CanvasRenderingContext2D> canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight

let moveGridAxis = false
let moveGrid = false


onkeydown = (e) => {
    if(e.key === 'm') moveGridAxis = !moveGridAxis
    if(e.key === 'n') moveGrid = !moveGrid
}
window.onresize = (e) => {
    canvas.width  = innerWidth
    canvas.height = innerHeight
    migrid.obj.wW = innerWidth
    migrid.obj.wH = innerHeight
}

let migrid = new Grid2({
    cX: 800/2,
    cY: 500/2 + 100,
    cellH: 20,
    cellW: 20,
    context,
    wH: 500,
    wW: 500,
    gH: 500,
    gW: 800,
    gX: 100,
    gY: 150,
})
canvas.onmousemove = (e) => {
    if(moveGridAxis){
        moveGrid = false

        migrid.obj.cX = e.x - migrid.obj.gX
        migrid.obj.cY = e.y - migrid.obj.gY
    }
    if(moveGrid){
        moveGridAxis = false

        if(e.x > migrid.obj.gX && e.x < migrid.obj.gX + migrid.obj.gW){
            
            migrid.obj.gX = e.x - migrid.obj.gX
        }
    }
}

render()
function render(){
    context.clearRect(0,0,innerWidth, innerHeight)
    
    migrid.drawAll()
    requestAnimationFrame(render)
}