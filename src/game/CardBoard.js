import React, {useRef, useEffect,} from 'react'

export const CardBoard = () => {

    const canvasRef = useRef(null)

    const cardBack = ctx => {
        let img = new Image()
        img.src = 'https://www.simonlucasbridgesupplies.co.uk/wp-content/uploads/product_images/pc10g_blue-150x150.jpg'
        ctx.drawImage(img, 600, 150, 150, 150)
    }
    useEffect(() => {
        
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        let animationFrameId
        
        const render = () => {
          
          cardBack(context)
          
          animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
        
      }, [ cardBack ])

    return (
        <div>
            <canvas ref={canvasRef}  height="400" width="800"/>
        </div>
    )
}
