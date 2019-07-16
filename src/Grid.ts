import { ctx } from "./globals";

interface Point2D{
    x: number
    y: number
}

/** Grid constructor Parameters*/
interface P{
    /** the context in where to draw the canvas must be an HTMLCanvasElement */
    ctx: CanvasRenderingContext2D
     /**Center point of the Grid*/
    center?: Point2D
    /** the width of the grid */
    width?: number
    /** the height of the grid */
    height?: number
    /** the unit width of the lines */
    unitw?: number
    /**the unit height of the lines */
    unith?: number
    /**Style for drawing axes and grid*/
    style?: {
        /** grid of the canvas */
        //grid?  : Style
        /** Axis of the canvas */
        //right? : Style
        //left?  : Style
        //up?    : Style
        //down?  : Style
    }
}

class Grid{
    
    private gridPoints: number[]
    p: P

    constructor(params: P){
        this.p = params
        this.p.center = params.center || {x:0 , y:0}
        return this
    }

    /** Getters and Setters */

    get center(){
        return this.p.center
    }
    set center(center: Point2D){
        this.p.center = center
    }

    get cx(){
        return this.p.center.x
    }
    set cx(x: number){
        this.p.center.x = x
    }

    get cy(){
        return this.p.center.y
    }
    set cy(y: number){
        this.p.center.y = y

    }

    get width(){
        return this.p.width
    }
    set width(val: number){
        this.p.width = val
    }
    
    get height(){
        return this.p.height
    }
    set height(val: number){
        this.p.height = val
    }

    get unitw(){
        return this.p.unitw
    }
    set unitw(val: number){
        this.p.unitw = val
    }

    get unith(){
        return this.p.unith
    }
    set unith(val: number){
        this.p.unith = val
    }

    get ctx(){
        return this.p.ctx
    }
    set ctx(val: CanvasRenderingContext2D){
        this.p.ctx = val
    }


    /** Private methods */


    /**Calculate points to draw Horizontal and Vertical Lines*/
    private calcHVL(): void{
        
        let totalx = this.width / this.unitw
        let totaly = this.height / this.unith
        let points = []

        for(let i = 0; i < totaly/2 + 1; i++) {          
            points.push(
                this.cx - this.width/2  ,  this.cy + this.unith*i,
                this.cx + this.width/2  ,  this.cy + this.unith*i,
                
                this.cx - this.width/2  ,  this.cy - this.unith*i,
                this.cx + this.width/2  ,  this.cy - this.unith*i,

            )
        }
        for(let i = 0; i < totalx/2 + 1; i++) {          
            points.push(
                this.cx + this.unitw*i ,  this.cy - this.height/2,
                this.cx + this.unitw*i ,  this.cy + this.height/2,
         
                this.cx - this.unitw*i ,  this.cy - this.height/2,
                this.cx - this.unitw*i ,  this.cy + this.height/2,
            )
        }

        //let buffer = new ArrayBuffer(totalx+totaly)
        this.gridPoints = points
    }
    draw(){

        for (let i = 0; i < this.gridPoints.length; i+=4) {

            let {ctx} = this

            ctx.beginPath()
            ctx.moveTo(this.gridPoints[i+0]  ,  this.gridPoints[i+1])
            ctx.lineTo(this.gridPoints[i+2]  ,  this.gridPoints[i+3])
            ctx.stroke()
            ctx.closePath()
        }

    }

    /** public methods */


    /** set default parameters */
    defaults(){
        this.cx     = 200
        this.cy     = 200
        this.height = 300
        this.width  = 300
        this.unith  = 30
        this.unitw  = 30
    }
    init(){
        this.calcHVL()
        this.draw()
    }
    log(){
        console.log(
            "points " , this.gridPoints, "\n",
            "center"  , this.center
        )
    }
    ang(){
        return Math.atan2(this.cy, this.cx)
    }
}

export default Grid