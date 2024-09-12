import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import '../../index.css'
import { BackgroundPattern } from "../access_panel_components/BackgroundPattern";
import { LogIn, SignIn_1, SignIn_2, Company_SignIn_1, Company_SignIn_2, Recovery_EmailVerification, Recovery_Password } from "../access_panel_components/Forms";

export function Access_Panel() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Guarda los datos de la empresa para pasarlos entre ambos formularios de registro de empresa
    const [companyData, setCompanyData] = useState({
        companyName: '',
        email: '',
        password: '',
        state: '',
        city: '',
        category: '',
        description: ''
    });
    //Se encarga de hacer la actualizacion necesaria en el formulario de empresa
    const handleCompanyDataChange = (updatedData) => {
        setCompanyData((prevData) => ({
            ...prevData,
            ...updatedData
        }));
    };

    // Guarda los datos del usuario para pasarlos entre ambos formularios de registro de usuario normal
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        state: '',
        city: '',
        biography: ''
    });
    //Se encarga de hacer la actualizacion necesaria en el formulario de usuario
    const handleUserDataChange = (updatedData) => {
        setUserData((prevData) => ({
            ...prevData,
            ...updatedData
        }));
    };

    //Resetea formularios de registro una vez enviados
    const [resetForm, setResetForm] = useState(false);
    const handleResetForm = () => {
        setResetForm(true);
    };
    const handleResetComplete = () => {
        setResetForm(false);
    };

    {/*        
    //Todo esto de los estados esta sujeto a cambio cuando implementos ya la lectura de direcciones de url
    // Obtiene el estado inicial de localStorage para mantener el estado cada que se recarga, el por defecto es 'login'
    const [activeForm, setActiveForm] = useState(() => {
        return sessionStorage.getItem('activeForm') || 'login';
    });
    // Guarda el estado en localStorage cuando cambie, asi se resume la pagina en la seccion en la que se estaba
    useEffect(() => {
        sessionStorage.setItem('activeForm', activeForm);
    }, [activeForm]);    
    */}

    // Define los colores de fondo y patrón para cada vista
    const backgroundColor = location.pathname === '/Access_Panel/login' ? 'bg-clr-white' :
        location.pathname === '/Access_Panel/signin1' ? 'bg-clr-blue' :
        location.pathname === '/Access_Panel/signin2' ? 'bg-clr-blue' :
        location.pathname === '/Access_Panel/company1' ? 'bg-clr-white' :
        location.pathname === '/Access_Panel/company2' ? 'bg-clr-white' :
        location.pathname === '/Access_Panel/recovery' ? 'bg-clr-black' :
        location.pathname === '/Access_Panel/password' ? 'bg-clr-black' : 'bg-clr-white';

    const patternColor = location.pathname === '/Access_Panel/login' ? 'clr-blue' :
        location.pathname === '/Access_Panel/signin1' ? 'clr-white' :
        location.pathname === '/Access_Panel/signin2' ? 'clr-white' :
        location.pathname === '/Access_Panel/company1' ? 'clr-black' :
        location.pathname === '/Access_Panel/company2' ? 'clr-black' :
        location.pathname === '/Access_Panel/recovery' ? 'clr-white' :
        location.pathname === '/Access_Panel/password' ? 'clr-white' : 'clr-blue';

    return (

        <div className="flex h-screen bg-clr-white">
            {/*Background */}
            <div className={`h-full transition-bg absolute inset-0 ${backgroundColor}`}>
                <BackgroundPattern color={patternColor} />
            </div>
            {/*Background */}

            {/* Forms */}
            <div className="w-1/2 h-full relative overflow-hidden flex items-center justify-center bg-clr-white md:w-full">
                {/* Logo */}
                <div className="absolute top-6 left-6 z-10 flex flex-no-shrink p-6 cursor-pointer">
                    <img src="/logo/logo.svg" alt="Logo" className="h-12 cursor-pointer" onClick={() => window.location.href = '/'} />
                </div>
                {/* Logo */}

                {/* Formularios de Ingreso */}
                <div className="relative w-full h-full">
                    {/* Formulario de Login */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/login' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <LogIn switchToSignIn={() => navigate('/Access_Panel/signin1')} switchToRecovery={() => navigate('/Access_Panel/recovery')} />
                    </div>

                    {/* Formulario de SignIn 1 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/signin1' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <SignIn_1 userData={userData} resetForm={resetForm} onResetComplete={handleResetComplete} onUserDataChange={handleUserDataChange} switchToLogIn={() => navigate('/Access_Panel/login')} switchToCompany={() => navigate('/Access_Panel/company1')} switchToSignIn2={() => navigate('/Access_Panel/signin2')} />
                    </div>

                    {/* Formulario de SignIn 2 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/signin2' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <SignIn_2 userData={userData} onResetForm={handleResetForm} switchToLogIn={() => navigate('/Access_Panel/login')} switchToSignIn1={() => navigate('/Access_Panel/signin1')} />
                    </div>

                    {/* Formulario de Company 1 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/company1' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Company_SignIn_1 companyData={companyData} resetForm={resetForm} onResetComplete={handleResetComplete} onCompanyDataChange={handleCompanyDataChange} switchToSignIn={() => navigate('/Access_Panel/signin1')} switchToLogIn={() => navigate('/Access_Panel/login')} switchToCompany2={() => navigate('/Access_Panel/company2')} />
                    </div>

                    {/* Formulario de Company 2 */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/company2' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Company_SignIn_2 companyData={companyData} onResetForm={handleResetForm} switchToCompany1={() => navigate('/Access_Panel/company1')} switchToLogIn={() => navigate('/Access_Panel/login')} />
                    </div>

                    {/* Formulario de Recovery */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/recovery' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Recovery_EmailVerification switchToLogIn={() => navigate('/Access_Panel/login')} />
                    </div>

                    {/* Formulario de Password */}
                    <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/password' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <Recovery_Password switchToLogIn={() => navigate('/Access_Panel/login')} />
                    </div>
                </div>
                {/* Formularios de Ingreso */}
            </div>
        </div>
    );
}