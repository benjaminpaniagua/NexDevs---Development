import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import '../../index.css'
import { BackgroundPattern } from "../access_panel_components/BackgroundPattern";
import { Link } from "react-router-dom";
import { LogIn, SignIn_1, SignIn_2, Company_SignIn_1, Company_SignIn_2, Recovery_EmailVerification, Recovery_Password } from "../access_panel_components/Forms";

import useScreenWidth from '../../hooks/useScreenWidth';

export function Access_Panel() {
    const location = useLocation();
    const isRendering = useScreenWidth();  

    // Guarda los datos del usuario para pasarlos entre ambos formularios de registro de usuario normal
    const [userData, setUserData] = useState()

    //Se encarga de hacer la actualizacion necesaria en el formulario de usuario
    const handleUserDataChange = (updatedData) => {
        setUserData(() => ({
            ...updatedData
        }));
    };

    // Define los colores de fondo y patrón para cada vista
    const backgroundColor = location.pathname === '/Access_Panel/login' ? 'bg-clr-white' :
        location.pathname === '/Access_Panel/register-1' ? 'bg-clr-blue' :
        location.pathname === '/Access_Panel/register-2' ? 'bg-clr-blue' :
        location.pathname === '/Access_Panel/company-1' ? 'bg-clr-white' :
        location.pathname === '/Access_Panel/company-2' ? 'bg-clr-white' :
        location.pathname === '/Access_Panel/recover' ? 'bg-clr-black' :
        location.pathname === '/Access_Panel/password' ? 'bg-clr-black' : 'bg-clr-white';

    const patternColor = location.pathname === '/Access_Panel/login' ? 'clr-blue' :
        location.pathname === '/Access_Panel/register-1' ? 'clr-white' :
        location.pathname === '/Access_Panel/register-2' ? 'clr-white' :
        location.pathname === '/Access_Panel/company-1' ? 'clr-black' :
        location.pathname === '/Access_Panel/company-2' ? 'clr-black' :
        location.pathname === '/Access_Panel/recover' ? 'clr-white' :
        location.pathname === '/Access_Panel/password' ? 'clr-white' : 'clr-blue';

    return (

        <div className="flex h-screen bg-clr-white">
            {/*Background */}
            {isRendering && (
            <div className={`h-full transition-bg absolute inset-0 ${backgroundColor}`}>
                <BackgroundPattern color={patternColor} />
            </div>
            )}
            {/*Background */}

            {/* Forms */}
            <div className="w-1/2 h-full relative overflow-hidden flex items-center justify-center bg-clr-white md:w-full">
                {/* Logo */}
                <div className="absolute top-6 left-6 z-10 flex flex-no-shrink p-6 cursor-pointer">
                    <Link to={'/'}>
                        <img src="/logo/logo.svg" alt="Logo" className="h-12 cursor-pointer" />
                    </Link>
                </div>
                {/* Logo */}

                {/* Formularios de Ingreso */}
                <div className="relative w-full h-full">
                    {/* Formulario de Login */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/login' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Routes>
                            <Route path="/login" element={<LogIn />} />
                        </Routes>
                    </div>

                    {/* Formulario de SignIn 1 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/register-1' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Routes>
                            <Route path="/register-1" element={<SignIn_1 onUserDataChange={handleUserDataChange} />} />
                        </Routes>
                    </div>

                    {/* Formulario de SignIn 2 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/register-2' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Routes>
                            <Route path="/register-2" element={<SignIn_2 userData={userData} />} />
                        </Routes>
                    </div>

                    {/* Formulario de Company 1 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/company-1' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Routes>
                            <Route path="/company-1" element={<Company_SignIn_1 onUserDataChange={handleUserDataChange} />} />
                        </Routes>
                    </div>

                    {/* Formulario de Company 2 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/company-2' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Routes>
                            <Route path="/company-2" element={<Company_SignIn_2 userData={userData} />} />
                        </Routes>
                    </div>

                    {/* Formulario de Recovery */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/recover' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>                       
                        <Routes>
                            <Route path="/recover" element={<Recovery_EmailVerification/>} />
                        </Routes>
                    </div>

                    {/* Formulario de Password */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/password' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Routes>
                            <Route path="/password" element={<Recovery_Password/>} />
                        </Routes>
                    </div>
                </div>
                {/* Formularios de Ingreso */}
            </div>
        </div>
    );
}