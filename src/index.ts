import Grid from "./Grid";
import { ctx , w, h} from "./globals";
import { Vector2D as vec2} from "vg-vector";

let grid = new Grid({
    ctx,
    cp: new vec2(w/2, h/2),
    height: 300,
    width:  300,
    unit:{
       x: new vec2(30, 0  ), //  0  inclinacion  (0 , 0)
       y: new vec2(0 , 30 )  //  90 inclinacion  (0,  0)
    },
})
grid.drawAxis()

function render(){
    ctx.clearRect(0,0,w,h)
    requestAnimationFrame(render)
}

export default Grid