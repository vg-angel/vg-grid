interface Params {
    cX: number /*center x of the axis * */
    cY: number /*center y of the axis */
    gW: number /*grid width*/
    gH: number /*grid height*/
    wW: number /*windows width */
    wH: number /*windows height */
    cellW: number /* cell width */
    cellH: number /* cell height */
    gX: number
    gY: number
    context: CanvasRenderingContext2D /**the context in wich to draw */
    style?: {}    /* style according to canvas style */
}

export default class Grid2 {
    obj: Params
    constructor(obj: Params) {
        this.obj = obj
        return this
    }
    drawFrame(){
        let {
            context: c,
            gW, gH,
            gX, gY,
        }: Partial<Params> = this.obj
        
        let [xi, xf, yi, yf] = [0,0,0,0]

        c.save()
        c.beginPath()
        c.translate(gX, gY)

        xi = 0
        xf = gW
        yi = 0
        yf = gH
        c.lineWidth = 3
        c.moveTo(xi, 0)
        c.lineTo(xf, 0)
        c.lineTo(xf, yf)
        c.lineTo(0,  yf)
        c.lineTo(0,  yi)
        c.stroke()

        c.closePath()
        c.restore()
        
    }
    drawAxis() {
        let {
            context: c,
            gW, gH,
            gX, gY,
            cX, cY,
        }: Partial<Params> = this.obj
        
        c.save()
        c.translate(gX+cX, gY+cY)

        let xi = -cX
        let xf = xi + gW
        let yi = -cY
        let yf = yi + gH
        
        if( cY>0 && cY<gH){
            c.beginPath()
            c.lineWidth = 3
            c.strokeStyle = "blue"
            c.moveTo(xi, 0)
            c.lineTo(xf, 0)
            c.stroke()
            c.closePath()
        }
        if( cX>0 && cX<gW){
            c.beginPath()
            c.lineWidth = 3
            c.strokeStyle = "blue"
            c.moveTo(0, yi)
            c.lineTo(0, yf)
            c.stroke()
            c.closePath()
        }
        c.restore()
    }
    drawGrid(){
        let {
            cellH: cH, 
            cellW: cW, 
            context: c,
            gW, gH,
            gX, gY,
            cX, cY,
        }: Partial<Params> = this.obj
        
        let cellNW = gW/cW /**number of vertical lines */
        let cellNH = gH/cH /**number of horizontal lines */

        let xi = 0 - cX 
        let xf = xi + gW
        let yi = 0 - cY
        let yf = yi + gH

        c.save()
        c.translate(gX+cX, gY+cY)
        c.globalAlpha = .3
        /*drawign hjorizontal lines */
        for(let i=0 ; i<cellNH+50; i++){
            if(i*cH < yf && i*cH>yi){
                c.beginPath()
                c.moveTo(xi,   i*cH)
                c.lineTo(xf,   i*cH)
                c.stroke()
                c.closePath()
            }
           if(-i*cH>yi && -i*cH<yf){
                c.beginPath()
                c.moveTo(xi,   -i*cH)
                c.lineTo(xf,   -i*cH)
                c.stroke()
                c.closePath()
            }
        }
        /*drawign vertical lines */
        for(let i=0 ; i<cellNW+50; i++){
            if( i*cW < xf && i*cW > xi){
                c.beginPath()
                c.moveTo(i*cW, yi)
                c.lineTo(i*cW, yf)
                c.stroke()
                c.closePath()
            }
           if(-i*cW > xi && -i*cW < xf){
                c.beginPath()
                c.moveTo(-i*cW, yi)
                c.lineTo(-i*cW, yf)
                c.stroke()
                c.closePath()
            }
        }
        c.restore()
    } 
    
    drawAll(){
        this.drawFrame()
        this.drawAxis()
        this.drawGrid()
    }
}