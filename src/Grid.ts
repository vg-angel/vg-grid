interface Params {
    cX: number /*center x of the grid * */
    cY: number /*center y of the grid */
    gW: number /*grid width*/
    gH: number /*grid height*/
    wW: number /*windows width */
    wH: number /*windows height */
    cellW: number /* cell width */
    cellH: number /* cell height */
    context: CanvasRenderingContext2D /**the context in wich to draw */
    style?: {}    /* style according to canvas style */
}

export default class Grid {
    obj: Params
    constructor(obj: Params) {
        this.obj = obj
        return this
    }
    draw() {

        let {
            cellH: cH, 
            cellW: cW, 
            context: c,
            cX, cY,
            wW, wH,
            gW, gH, gX, gY,
        }: Partial<Params> = this.obj

        let cellNW = wW / cW
        let cellNH = wH / cH
        
        let xi = 0 - cX 
        let xf = xi + wW
        let yi = 0 - cY
        let yf = yi + wH

        c.save()
        c.translate(cX, cY)

        /** X axis */
        if(cX > gX || cX < gX+gW){
            c.save()
            c.beginPath()
            c.lineWidth = 3
            c.strokeStyle = 'blue'
            c.moveTo(xi, 0)
            c.lineTo(xf, 0)
            c.stroke()
            c.closePath()
            c.restore()
        }
        
        /** Y axis */
        c.save()
        c.beginPath()
        c.lineWidth = 3
        c.strokeStyle = 'blue'
        c.moveTo(0, yi)
        c.lineTo(0, yf)
        c.stroke()
        c.closePath()
        c.restore()


        /** draw horizontal lines */
        for (let i = 0; i < cellNH; i++) { 
                if(i*cH > yi){
                    c.beginPath()
                    c.moveTo( xi, i*cH )
                    c.lineTo( xf, i*cH )
                    c.stroke()
                    c.closePath()
                }
                if(-i*cH < yf){
                    c.beginPath()
                    c.moveTo( xi, -i*cH )
                    c.lineTo( xf, -i*cH )
                    c.stroke() 
                    c.closePath()
                }
               /*  c.moveTo( xi, yi+i*cH )
                    c.lineTo( xf, yi+i*cH )
                    c.stroke() */
        }
        /** draw vertical lines */
        for (let i = 0; i < cellNW; i++) {
            if(i*cW > xi){
                c.moveTo(  i*cW, yi )
                c.lineTo(  i*cW, yf )
                c.stroke()
            }
            if(-i*cW < xf){
                c.moveTo(  -i*cW, yi )
                c.lineTo(  -i*cW, yf )
                c.stroke() 
            }
            /* c.moveTo( xi+i*cW, yi  )
            c.lineTo( xi+i*cW, yf )
            c.stroke() */
        }

        c.restore()
    }
}
