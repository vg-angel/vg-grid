import Grid from "./Grid";
import { ctx } from "./globals";


let grid = new Grid({
    ctx,
    center: {x: 200, y:200},
    height: 200,
    width: 200,
    unith: 30,
    unitw: 30,
})

grid.init()


export default Grid