import { useState} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import '../../index.css'
import { BackgroundPattern } from "../access_panel_components/BackgroundPattern";
import { Link } from "react-router-dom";
import { LogIn, SignIn_1, SignIn_2, Company_SignIn_1, Company_SignIn_2, Recovery_EmailVerification, Recovery_Password } from "../access_panel_components/Forms";
import { useAuth } from "../../utils/AuthProvider";


import useScreenWidth from '../../hooks/useScreenWidth';

export function Access_Panel() {
    const { token } = useAuth();
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

    const [isRegister2, setIsRegister2] = useState(false);
    const [isCompany2, setIsCompany2] = useState(false);

    const handleRegisterContinue = () => {
        setIsRegister2(true);
    };

    const handleCompanyContinue = () => {
        setIsCompany2(true);
    };

    const handleRegisterBack = () => {
        setIsRegister2(false);
    };

    const handleCompanyBack = () => {
        setIsCompany2(false);
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

    if (token) {
        return <Navigate to={'/Community_Feed/'} />;
    }

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
            <div className="w-1/2 h-full relative overflow-hidden md1:overflow-visible flex items-center justify-center bg-clr-white md1:w-full">
                {/* Logo */}
                <div className="absolute top-6 left-6 z-10 flex flex-no-shrink p-6 cursor-pointer md:hidden">
                    <Link to={'/'}>
                        <div>
                            <svg className="sm:w-12 sm:h-12 w-20 h-20" viewBox="0 0 117 66" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.78445 60H2.83945V46.4476H5.53903V50.6469H5.72991C6.13894 48.3564 7.93866 46.1749 11.3745 46.1749C15.1375 46.1749 16.9918 48.7108 16.9918 51.8467V60H14.0468V52.6375C14.0468 50.1015 12.9015 48.8199 10.0929 48.8199C7.1206 48.8199 5.78445 50.347 5.78445 53.292V60ZM26.4331 60.2727C21.9883 60.2727 19.0706 57.764 19.0706 53.2374C19.0706 49.0108 21.9611 46.1749 26.3785 46.1749C30.5779 46.1749 33.4411 48.4927 33.4411 52.6102C33.4411 53.1011 33.4138 53.4828 33.332 53.8919H21.8247C21.9338 56.5096 23.2154 57.9003 26.3513 57.9003C29.1872 57.9003 30.3597 56.9732 30.3597 55.3644V55.1462H33.3047V55.3916C33.3047 58.2821 30.4688 60.2727 26.4331 60.2727ZM26.324 48.4927C23.3245 48.4927 22.0156 49.8289 21.852 52.2558H30.6597V52.2012C30.6597 49.6925 29.2145 48.4927 26.324 48.4927ZM44.5364 60H41.4278C38.51 60 36.7103 58.7184 36.7103 55.4189V48.9017H34.4198V46.4476H36.7103V43.4753H39.628V46.4476H44.5364V48.9017H39.628V55.2553C39.628 56.9187 40.3916 57.355 42.0822 57.355H44.5364V60ZM52.8684 60H49.2144L45.1514 46.4476H48.2055L50.4688 54.1373L51.0959 57.6276H51.3141L52.323 53.8646L55.1589 46.4476H58.922L61.7852 53.8646L62.7941 57.6276H63.0123L63.6394 54.1373L65.9027 46.4476H68.9023L64.7847 60H61.1307L58.1585 52.2012L57.1223 48.8745H56.9041L55.8679 52.2012L52.8684 60ZM77.3244 60.2727C72.8251 60.2727 69.7983 57.4095 69.7983 53.2374C69.7983 49.0108 72.8251 46.1749 77.3244 46.1749C81.8509 46.1749 84.8777 49.0108 84.8777 53.2374C84.8777 57.4095 81.8509 60.2727 77.3244 60.2727ZM77.3244 57.6549C80.6239 57.6549 81.9873 56.1006 81.9873 53.2374C81.9873 50.347 80.6239 48.7654 77.3244 48.7654C74.0522 48.7654 72.6887 50.347 72.6887 53.2374C72.6887 56.1006 74.0522 57.6549 77.3244 57.6549ZM89.9599 60H87.0149V46.4476H89.7145V50.1015H89.9054C90.3144 47.9201 91.7869 46.1749 94.5683 46.1749C97.6496 46.1749 98.9858 48.3836 98.9858 50.9469V52.7193H96.0681V51.5195C96.0681 49.5834 95.25 48.6836 93.2321 48.6836C90.9143 48.6836 89.9599 49.9652 89.9599 52.3921V60ZM103.781 60H100.836V41.7301H103.781V51.8195H107.653L111.716 46.4476H115.152L110.052 52.9647L115.124 60H111.661L107.653 54.4645H103.781V60Z" />
                                <path d="M78.7668 0C72.8513 0 67.4729 3.06971 64.3774 8.21374C61.8672 12.3833 57.5356 15.091 52.7253 15.4982C52.3018 15.533 51.8817 15.5504 51.4616 15.5504C47.0956 15.5504 42.9189 13.6397 40.0369 10.2741C38.088 8.00143 35.2782 6.69629 32.3308 6.69629C26.7079 6.69977 22.1353 11.3217 22.1353 17.0017C22.1353 22.6817 26.7079 27.3002 32.3274 27.3002C35.2782 27.3002 38.0845 25.9951 40.0334 23.7224C42.9189 20.3568 47.0956 18.4461 51.4582 18.4461C51.8783 18.4461 52.2984 18.4635 52.7219 18.4983C57.5356 18.9055 61.8638 21.6133 64.3739 25.7828C67.4694 30.9303 72.8513 34 78.7668 34C88.0396 34 95.5838 26.3744 95.5838 17.0017C95.5838 7.62903 88.0396 0.003479 78.7668 0.003479V0Z" />
                            </svg>
                        </div>
                    </Link>
                </div>
                {/* Logo */}

                {/* Formularios de Ingreso */}
                <div className="relative w-full h-full overflow-scroll">
                    <Routes>
                        {/* Formulario de Login */}
                        <Route
                            path="/login"
                            element={
                                <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/login' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <LogIn />
                                </div>
                            }
                        />

                        {/* Formulario de SignIn 1 */}
                        <Route
                            path="/register-1"
                            element={
                                <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/register-1' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <SignIn_1 onUserDataChange={handleUserDataChange} handleRegisterContinue={handleRegisterContinue} />
                                </div>
                            }
                        />

                        {/* Formulario de SignIn 2 */}
                        <Route
                            path="/register-2"
                            element={
                                <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/register-2' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <SignIn_2 userData={userData} isRegister2={isRegister2} handleRegisterBack={handleRegisterBack} />
                                </div>
                            }
                        />

                        {/* Formulario de Company 1 */}
                        <Route
                            path="/company-1"
                            element={
                                <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/company-1' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <Company_SignIn_1 onUserDataChange={handleUserDataChange} handleCompanyContinue={handleCompanyContinue} />
                                </div>
                            }
                        />

                        {/* Formulario de Company 2 */}
                        <Route
                            path="/company-2"
                            element={
                                <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/company-2' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <Company_SignIn_2 userData={userData} isCompany2={isCompany2} handleCompanyBack={handleCompanyBack} />
                                </div>
                            }
                        />

                        {/* Formulario de Recovery */}
                        <Route
                            path="/recover"
                            element={
                                <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/recover' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <Recovery_EmailVerification />
                                </div>
                            }
                        />

                        {/* Formulario de Password */}
                        <Route
                            path="/password"
                            element={
                                <div className={`transition-opacity duration-500 absolute inset-0 flex items-center justify-center ${location.pathname === '/Access_Panel/password' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <Recovery_Password />
                                </div>
                            }
                        />
                        {/* Ruta de captura de errores */}
                        <Route path="*" element={<Navigate to="/Access_Panel/login" replace />} />
                    </Routes>
                </div>
                {/* Formularios de Ingreso */}
            </div>
        </div>
    );
}