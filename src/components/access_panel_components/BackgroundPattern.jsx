import  { useEffect } from "react";
import '../../index.css'
export function BackgroundPattern({color}) {
    // Animación del patrón
    useEffect(() => {
        const pattern = document.getElementById('backgroundPattern');
        let offsetX = 0;
        let offsetY = 0;
        const animatePattern = () => {
          offsetX += 0.3; // Velocidad de movimiento en x
          offsetY -= 0.3; // Velocidad de movimiento en y
          pattern.setAttribute('patternTransform', `translate(${offsetX}, ${offsetY})`);
    
          // Reinicia el movimiento si el patrón se desplaza por completo
          if (offsetX >= 314) {
            offsetX = 0;
          }
          if (offsetY <= -314) {
            offsetY = 0;
          }    
          requestAnimationFrame(animatePattern);
        };    
        animatePattern();
      }, []);

      //Listado de posibles colores
      const colorMap = {
        'clr-blue': 'hsla(217, 81%, 43%, 1)',
        'clr-black' : 'hsla(20, 8%, 7%, 1)',
        'clr-white': 'hsla(0, 0%, 98%, 1)',
      };    
      // Obteber el valor HEX para el color seleccionado
      const fillColor = colorMap[color] || 'hsla(0, 0%, 0%, 1)'; // Valor por defecto si no se encuentra el color
      
    return (
        <>     
            {/*  Fondo */}
            <svg className="h-full w-full flex-no-shrink transition-fill" style={{ fill: fillColor }}>
                <defs>
                    <pattern id="backgroundPattern" x="0" y="0" width="314" height="314" patternUnits="userSpaceOnUse" patternTransform="translate(150 -100)">
                    <path transform="scale(1.45)" d="m112.4,17.77c-15.09,15.09-21.09,36.54-16.04,57.38,4.09,16.9-.15,34.77-11.4,48.05-1,1.17-2.02,2.28-3.09,3.36-11.14,11.14-26.6,16.98-42.43,15.87-10.69-.75-21.14,3.14-28.66,10.66-14.34,14.35-14.38,37.65-.08,51.95,14.3,14.3,37.58,14.25,51.92-.08,7.53-7.53,11.41-17.97,10.66-28.66-1.11-15.83,4.74-31.3,15.87-42.43,1.07-1.07,2.18-2.1,3.36-3.09,13.31-11.26,31.16-15.48,48.05-11.4,20.85,5.06,42.31-.95,57.4-16.04,23.66-23.66,23.72-62.1.13-85.68s-62.02-23.54-85.68.12h0Z"/>
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#backgroundPattern)" />
            </svg>
        </>
    );
}