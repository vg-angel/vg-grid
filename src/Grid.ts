import { Vector2D as vec2} from "vg-vector";

/** Grid constructor Parameters*/
interface P{
    /** the context in where to draw the canvas must be an HTMLCanvasElement */
    ctx: CanvasRenderingContext2D
     /**Center point of the Grid*/
    cp: vec2
    /** the width of the grid */
    width?: number
    /** the height of the grid */
    height?: number
    /** the unit vector is goona be used to create the entire grid */
    unit: {
        x: vec2
        y: vec2
    }
    /**Style for drawing axes and grid*/
    //style?: {
        /** grid of the canvas */
        //grid?  : Style
        /** Axis of the canvas */
        //right? : Style
        //left?  : Style
        //up?    : Style
        //down?  : Style
    //}
}


class Grid{

    cp: vec2
    unit: {
        x: vec2
        y: vec2
    }
    height: number
    width: number
    ctx: CanvasRenderingContext2D
    points: vec2[]

    constructor(p: P){
        let {
            cp,
            unit,
            width,
            height
        }: P = p

        this.height = width  || 300
        this.width  = height || 300
        this.ctx    = p.ctx
        this.cp     = cp
        this.unit   = {
            x: unit.x,
            y: unit.y,
        }
        this.points = []
    }
    
    // -----GETTERS AND SETTERS

    /** get Unit vectors values*/
    get unitx(): vec2{
        return this.unit.x
    }

    /**get the unit vector in y */
    get unity(): vec2{
        return this.unit.y
    }

    /** get center point in x */
    get cpx(): number{
        return this.cp.x
    }
    /**center point in y */
    get cpy(): number{
        return this.cp.y
    }

    //-----private methods


    /** get the angle from the unit vestor used to draw X-axis */
    private get angX(){
        return this.unit.x.ang
    }
    private get angY(){
        return this.unit.y.ang
    }

    private XAxisPoints(){

        let i_unit = vec2.clone(this.unitx)
        i_unit.len = this.width/2

        let p1 = vec2.add( this.cp, i_unit )
        let p2 = vec2.sub( this.cp, i_unit )
        
        this.points.push(p1, p2)

    }
    private YAxisPoints(){
        
        let i_unit = vec2.clone(this.unity)
        i_unit.len = this.height/2

        let p2 = vec2.add( this.cp, i_unit )
        let p3 = vec2.sub( this.cp, i_unit )

        this.points.push(p2, p3)

    }


    // ----  public methods
    drawAxis(){
        
        this.XAxisPoints()
        this.YAxisPoints()
        
        console.log(this.points)

        let {ctx} = this
        let {points} = this

        for (let i = 0; i < points.length; i+=2) {

            let p1 = this.points[i+0];
            let p2 = this.points[i+1];

            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.closePath()

        }

        // draw center point
            ctx.beginPath()
            
            ctx.arc( this.cpx, this.cpy, 5, 0, Math.PI*2 )
            ctx.fill()
            ctx.stroke()
            
            ctx.closePath()
    }

}

export default Grid