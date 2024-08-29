import React from "react";
import '../../index.css'

const LogIn = () => {
    return (
        <div className="flex h-screen bg-clr-white">
            {/* Lado Izquiero */}
            <div className="w-1/2 bg-clr-white">
                {/* Logo */}
                <div className="flex items-center p-6 relative">
                    <svg className="h-8 mr-4 flex-no-shrink fill-black" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 121">
                        <path d="m204.32,0c-21.34,0-40.75,10.92-51.92,29.23-9.06,14.84-24.69,24.48-42.04,25.92-1.53.12-3.04.19-4.56.19-15.75,0-30.82-6.8-41.22-18.78-7.03-8.09-17.17-12.73-27.8-12.73-20.29.01-36.79,16.46-36.79,36.68s16.5,36.65,36.77,36.65c10.65,0,20.77-4.64,27.8-12.73,10.41-11.98,25.48-18.78,41.22-18.78,1.52,0,3.03.06,4.56.19,17.37,1.45,32.98,11.09,42.04,25.92,11.17,18.32,30.59,29.24,51.93,29.24,33.46,0,60.68-27.14,60.68-60.49S237.78.01,204.32.01h0Z"/>
                    </svg>
                </div>

                {/* Login */}
                <div className="w-1/2 mx-auto my-[20%]">
                    <h1 className="text-5xl font-medium">Iniciar Sesión</h1>

                    {/* Form */}
                    <div className="flex flex-col gap-2 mt-10 mb-5">
                        <p className="text-fs-small">Email</p>
                        <input type="text" className="border h-12 bg-clr-white border-black rounded p-1"/>
                        <p className="text-fs-small">Contraseña</p>
                        <input type="text" className="border h-12 bg-clr-white border-black rounded"/>
                    </div>

                    {/* Olvide mi contraseña */}
                    <div className="flex flex-col items-end mb-5">
                      <a className="text-clr-blue font-medium" href="">Olvide mi contraseña</a>
                    </div>
                    
                    {/* Boton de Login */}
                    <button className="rounded-md bg-black text-white w-full h-12 font-medium">Iniciar Sesión</button>

                    {/* Registrarse */}
                    <div className="flex flex-col items-center">
                      <p className="mt-10">¿Aún no tienes una cuenta? <a className="text-clr-blue underline" href="">Regístrate</a></p>
                    </div>                    
                </div>
            </div>

            {/* Lado Derecho */}
            <div className="w-1/2 h-full"> 
            
            {/*  Fondo */}
            <svg className="h-full w-full flex-no-shrink fill-clr-blue">
                <defs>
                    <pattern id="myPattern" x="0" y="0" width="314" height="314" patternUnits="userSpaceOnUse" patternTransform="translate(150 -100)">
                    <path transform="scale(1.45)" d="m112.4,17.77c-15.09,15.09-21.09,36.54-16.04,57.38,4.09,16.9-.15,34.77-11.4,48.05-1,1.17-2.02,2.28-3.09,3.36-11.14,11.14-26.6,16.98-42.43,15.87-10.69-.75-21.14,3.14-28.66,10.66-14.34,14.35-14.38,37.65-.08,51.95,14.3,14.3,37.58,14.25,51.92-.08,7.53-7.53,11.41-17.97,10.66-28.66-1.11-15.83,4.74-31.3,15.87-42.43,1.07-1.07,2.18-2.1,3.36-3.09,13.31-11.26,31.16-15.48,48.05-11.4,20.85,5.06,42.31-.95,57.4-16.04,23.66-23.66,23.72-62.1.13-85.68s-62.02-23.54-85.68.12h0Z"/>
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#myPattern)" />
            </svg>

            </div>
        </div>   
      );
    };
export default LogIn