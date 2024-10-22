import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../index.css'
import { FormInput, FormSelect, FormTextArea, FormSelectSpecial } from "../ui/FormInput";
import AddIcon from '@mui/icons-material/Add';
import { useLogin } from "../../hooks/Access_Panel/useLogin";
import { useRegisterWorkProfile } from "../../hooks/Access_Panel/useRegisterWorkProfile";
import { useRegisterNormalUser } from "../../hooks/Access_Panel/useRegisterNormalUser";
import { MainButton,  SecondaryButtonOutline } from "../ui/Buttons";
import { Terms } from "./Terms_Modal";
import { useFetchProvincias } from "../../hooks/CostaRica/useFetchProvincias";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { useAddCategories } from "../../hooks/Access_Panel/useAddCategories";
import { useFetchSkills } from "../../hooks/useFetchSkills";
import { useAddSkills } from "../../hooks/Access_Panel/useAddSkills";
import { useDeleteCategory } from '../../hooks/EditProfile/useDeleteCategory.js';

export function LogIn() {
    const { login, loading, error } = useLogin()

    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 100);
    }, []);
    //Guarda los datos de inicio de sesion
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    //Maneja los inputs ingresados
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegisterClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/register-1');
        }, 100);
    };
    const handleRecovertClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/recover');
        }, 100);
    };

    //Realiza las acciones necesarias para iniciar sesion
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(formData.email, formData.password);

        if (result.success) {
            setFormData({ ...formData, email: '', password: '' });
            window.location.href = '/Community_Feed/';
        }

    };
    return (
        <form className={`w-1/2 md:w-[70%] transition-opacity duration-100 ${isAnimating ? 'opacity-0' : 'opacity-100'} `} onSubmit={handleSubmit}>
            <h1 className="text-5xl font-medium sm:text-2xl sm:mt-7">Iniciar Sesión</h1>
            {/* Email y contraseña */}
            <div className="flex flex-col gap-2 mt-10 mb-5 sm:mt-5">
                <FormInput id={"login_email"} type="email" name="email" title="Email" minLength={0} value={formData.email} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id={"login_password"} type="password" name="password" title="Contraseña" minLength={8} value={formData.password} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
            </div>
            {/* Olvide mi contraseña */}
            <div className="flex flex-col items-end mb-5">
                <a onClick={handleRecovertClick} className="text-clr-blue font-medium cursor-pointer">Olvidé mi contraseña</a>
            </div>

            {/* Boton de Login */}
            <div>
                {loading && <MainButton id="login_confirm" text="Iniciar Sesión" extraStyles="h-12 w-full" disabled />}
                {!loading && <MainButton id="login_confirm" type="submit" text="Iniciar Sesión" extraStyles="h-12 w-full" />}
            </div>

            {/* Cargando */}
            {loading && <p className="text-clr-black font-bold mt-5">Cargando...</p>}
            {/* Error */}
            {error && <p className="text-red-500 font-bold mt-5">{error}</p>}

            {/* Registrarse */}
            <div className="flex flex-col items-center">
                <p className="mt-10">¿Aún no tienes una cuenta? <a onClick={handleRegisterClick} className="text-clr-blue underline cursor-pointer sm:flex sm:flex-col sm:items-center">Regístrate</a></p>
            </div>
        </form>
    );
}

export function SignIn_1({ onUserDataChange, handleRegisterContinue }) {
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 100);
    }, []);

    const navigate = useNavigate();
    //Guarda los datos ingresados en el SignIn
    const [formData, setFormData] = useState({
        firstname: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    //Maneja los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Maneja el confirmpassword
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handeLoginClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/login');
        }, 100);
    };

    const handleCompanyClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/company-1');
        }, 100);
    };

    //Realiza las acciones necesarias para registrar un usuario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        setError('');
        setIsAnimating(true);
        setTimeout(() => {
            onUserDataChange(formData);
            handleRegisterContinue();
            navigate('/Access_Panel/register-2');
        }, 100);
    };

    return (
        <form className={`w-1/2 md:w-[70%] transition-opacity duration-100 ${isAnimating ? 'opacity-0' : 'opacity-100'} `} onSubmit={handleSubmit}>
            <h1 className="text-5xl font-medium sm:text-2xl sm:mt-5">Registrarse</h1>

            {/* Formulario */}
            <div className="flex flex-col gap-2 my-10 sm:my-5">
                <FormInput id={"signIn_firstname"} type="text" name="firstname" title="Nombre" minLength={0} value={formData.firstname} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id={"signIn_lastName"} type="text" name="lastName" title="Apellidos" minLength={0} value={formData.lastName} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id={"signIn_email"} type="email" name="email" title="Email" minLength={0} value={formData.email} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id={"signIn_password"} type="password" name="password" title="Contraseña" minLength={8} value={formData.password} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id={"signIn_confirmPassword"} type="password" name="password" title="Confirmar contraseña" minLength={8} value={confirmPassword} onChange={handleConfirmPasswordChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Boton de Siguiente */}
            <button id="user_next" className="rounded-md bg-black text-white w-full h-12 font-medium" type="submit">
                Siguiente
            </button>

            {/* Iniciar Sesión */}
            <div className="flex flex-col items-center">
                <p className="mt-10 md:mt-5">¿Ya tienes una cuenta? <a onClick={handeLoginClick} className="text-clr-blue underline cursor-pointer sm:flex sm:flex-col sm:items-center">Iniciar Sesión</a></p>
            </div>
            {/* Registrar Empresa */}
            <div className="flex flex-col items-center">
                <p className="mt-5">¿Quieres registrar tu empresa? <a onClick={handleCompanyClick} className="text-clr-blue underline cursor-pointer sm:flex sm:flex-col sm:items-center">Regístrala aquí</a></p>
            </div>
        </form>
    );
}
export function SignIn_2({ userData, isRegister2, handleRegisterBack }) {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const { registerUserProfile, loading, error, message } = useRegisterNormalUser();
    const { login } = useLogin()
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!isRegister2) {
            navigate('/Access_Panel/register-1');
        } else {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }
    }, [isRegister2]);

    //Guarda los datos ingresados en el SignIn
    const [formData, setFormData] = useState({
        province: '',
        city: '',
        bio: ''
    });

    const { provincias } = useFetchProvincias();
    const [selectedProvince, setSelectedProvince] = useState(formData.province);
    const [availableCities, setAvailableCities] = useState([]);

    //Lista de opciones de los selects
    const stateOptions = provincias ? Object.values(provincias) : [];
    //console.log(provincias);

    const provinceIdMap = {
        'San José': '1',
        'Alajuela': '2',
        'Cartago': '3',
        'Heredia': '4',
        'Guanacaste': '5',
        'Puntarenas': '6',
        'Limón': '7'
    };

    useEffect(() => {
        const fetchCities = async (provinceId) => {
            try {
                const response = await fetch(`https://ubicaciones.paginasweb.cr/provincia/${provinceId}/cantones.json`);
                const data = await response.json();
                const citiesArray = data ? Object.values(data) : [];
                setAvailableCities(citiesArray);
                //console.log(citiesArray);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        if (selectedProvince) {
            const provinceId = provinceIdMap[selectedProvince];
            fetchCities(provinceId);
        }
    }, [selectedProvince]);

    //Maneja los selects, y actualiza la lista de ciudades respecto a la provincia
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'province') {
            setSelectedProvince(value);
        }
    };

    //Maneja los inputs ingresados
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Foto de Perfil
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const defaultImage = '/images/default_profile_picture.jpg';

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            //console.log(profileImage);
        }
    };

    const handleBack = () => {
        setIsAnimating(true);
        setTimeout(() => {
            handleRegisterBack();
            navigate('/Access_Panel/register-1');
        }, 100);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleCheckboxChange = (e) => {
        setTermsAccepted(e.target.checked);
    };


    //Maneja el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert("Debes aceptar los términos y condiciones");
            return;
        }

        const updatedUserData = {
            ...userData,
            ...formData,
            profileType: 'U',
        };

        const newFormData = new FormData();

        Object.keys(updatedUserData).forEach((key) => {
            newFormData.append(key, updatedUserData[key]);
        });
        newFormData.append('profilePictureUrl', profileImage || defaultImage);

        /*for (let pair of newFormData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }*/

        const response = await registerUserProfile(newFormData);
        const result = await login(response.email, userData.password);

        if (result.success) {
            window.location.href = (`/Community_Feed/`);
        }
    };

    return (
        <form className={`w-1/2 md:w-[70%] transition-opacity duration-100 ${isAnimating ? 'opacity-0' : 'opacity-100'} `} onSubmit={handleSubmit}>
            <h1 className="text-5xl font-medium sm:text-2xl sm:mt-5">Registrarse</h1>

            {/* Formulario */}
            <div className="flex flex-col gap-2 my-10 sm:my-5">
                <div className="flex w-full">
                    <div className="relative w-36 h-36 mx-auto sm:w-28 sm:h-28 sm:mt-5 sm:ml-2">

                        {/* Imagen de perfil */}
                        <div className="w-full h-full rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                            <img
                                src={previewImage || defaultImage}
                                alt="Previsualización"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Botón para subir imagen */}
                        <label htmlFor="userImage" className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer">
                            <AddIcon style={{ color: 'white' }} />
                        </label>
                        <input
                            id="userImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
                    <div className="flex flex-col  w-1/2 gap-2 sm:gap-1">
                        <FormSelect id="user_province" name="province" title="Provincia" value={formData.province} onChange={handleSelectChange} options={stateOptions} className="border h-12 bg-clr-white border-black rounded p-1" />
                        <FormSelect id="user_city" name="city" title="Ciudad" value={formData.city} onChange={handleSelectChange} options={availableCities} className="border h-12 bg-clr-white border-black rounded p-1" />
                    </div>
                </div>
                <FormTextArea id="user_bio" name="bio" title="Biografía" minLength={0} value={formData.bio} onChange={handleInputChange} className="border h-44 md:h-32 bg-clr-white border-black rounded p-1" />
                <div className="flex items-center gap-3">
                    <input id="terms" type="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} className="focus:ring-clr-blue h-4 w-4 border-gray-300 rounded" />
                    <label className="font-medium text-gray-700">
                        Acepto los{" "}
                        <a className="text-clr-blue hover:underline" onClick={openModal}>
                            Términos y Condiciones
                        </a>
                    </label>
                </div>
            </div>

            {/* Boton de volver o confirmar */}
            <div className="flex justify-between h-12">
                <SecondaryButtonOutline id="user_back" text="Volver" type="button" onClick={handleBack} extraStyles="w-[47%] font-medium" />
                <MainButton id="user_confirm" text="Confirmar" type="submit" extraStyles="w-[47%]" disabled={!termsAccepted} />
            </div>

            {/* Cargando */}
            {loading && <p className="text-clr-black font-bold mt-5">Cargando...</p>}
            {/* Error */}
            {error && <p className="text-red-500 font-bold mt-5">{message}</p>}


            {/* Modal de terminos y condiciones */}
            {showModal && (
                <Terms closeModal={closeModal} />
            )}
        </form>
    );
}

export function Recovery_EmailVerification() {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 100);
    }, []);

    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBack = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/login');
        }, 100);
    }

    //Maneja el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/password');
        }, 100);
    };
    return (
        <form className={`w-1/2 md:w-[70%] transition-opacity duration-100 ${isAnimating ? 'opacity-0' : 'opacity-100'} `} onSubmit={handleSubmit}>
            <h1 className="text-5xl font-medium sm:text-2xl sm:mt-7">Recuperar contraseña</h1>
            <p className="mt-2">Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.</p>
            <div className="flex flex-col gap-2 my-10 sm:my-5">
                <FormInput id="recovery_email" type="email" name="email" title="Email" minLength={0} value={email} onChange={handleEmailChange} className="border h-12 bg-clr-white border-black rounded p-1" />
            </div>
            {/* Boton de Login */}
            <button id="recovery_confirm" className="rounded-md bg-black text-white w-full h-12 font-medium" type="submit">Enviar Correo</button>

            {/* Iniciar Sesion */}
            <div className="flex flex-col items-center">
                <p className="mt-10">¿No quieres recuperar tu contraseña? <a onClick={handleBack} className="text-clr-blue underline cursor-pointer sm:flex sm:flex-col sm:items-center">Inicia Sesión</a></p>
            </div>
        </form>
    );
}

export function Recovery_Password({ }) {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 100);
    }, []);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState('');

    //Maneja los inputs ingresados
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBack = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/login');
        }, 100);
    }

    //Maneja el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        console.log(formData);
        setFormData({ ...formData, password: '', confirmPassword: '' });
        setError('');
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/login');
        }, 100);
    };
    return (
        <form className={`w-1/2 md:w-[70%] transition-opacity duration-100 ${isAnimating ? 'opacity-0' : 'opacity-100'} `} onSubmit={handleSubmit}>
            <h1 className="text-5xl font-medium sm:text-2xl sm:mt-7">Nueva Contraseña</h1>
            <div className="flex flex-col gap-2 my-10 sm:my-5">
                <FormInput id="recovery_password" type="password" name="password" title="Contraseña" minLength={8} value={formData.password} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id="recovery_confirmpassword" type="password" name="confirmPassword" title="Confirmar contraseña" minLength={8} value={formData.confirmPassword} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            {/* Boton de Login */}
            <button id="password_confirm" className="rounded-md bg-black text-white w-full h-12 font-medium" type="submit">Cambiar contraseña</button>

            {/* Iniciar Sesion */}
            <div className="flex flex-col items-center">
                <p className="mt-10">¿No quieres cambiar tu contraseña? <a onClick={handleBack} className="text-clr-blue underline cursor-pointer sm:flex sm:flex-col sm:items-center">Iniciar Sesion</a></p>
            </div>
        </form>
    );
}

export function Company_SignIn_1({ onUserDataChange, handleCompanyContinue }) {
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 100);
    }, []);
    const navigate = useNavigate();
    //Guarda los datos ingresados en el SignIn
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    //Maneja los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Maneja el confirmpassword
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handeLoginClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/login');
        }, 100);
    };

    const handleRegisterClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate('/Access_Panel/register-1');
        }, 100);
    };

    //Maneja el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        setError('');
        setIsAnimating(true);
        setTimeout(() => {
            onUserDataChange(formData);
            handleCompanyContinue();
            navigate('/Access_Panel/company-2');
        }, 100);
    };

    return (
        <form className={`relative w-1/2 items-center justify-center md:w-[70%] transition-opacity duration-100 ${isAnimating ? 'opacity-0' : 'opacity-100'} `} onSubmit={handleSubmit}>
            <h1 className="text-5xl font-medium sm:text-2xl sm:mt-7">Registrar Empresa</h1>

            {/* Formulario */}
            <div className="flex flex-col gap-2 my-10 sm:my-5">
                <FormInput id="company_name" type="text" name="name" title="Nombre de la Empresa" minLength={0} value={formData.name} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id="company_email" type="email" name="email" title="Email" minLength={0} value={formData.email} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id="company_password" type="password" name="password" title="Contraseña" minLength={8} value={formData.password} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormInput id="company_confirmpassword" type="password" name="confirmPassword" value={confirmPassword} title="Confirmar contraseña" onChange={handleConfirmPasswordChange} minLength={8} className="border h-12 bg-clr-white border-black rounded p-1" />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Boton de Siguiente */}
            <button id="company_next" className="rounded-md bg-black text-white w-full h-12 font-medium" type="submit">Siguiente</button>

            {/* Iniciar Sesion */}
            <div className="flex flex-col items-center">
                <p className="mt-10">¿Ya tienes una cuenta? <a onClick={handeLoginClick} className="text-clr-blue underline cursor-pointer sm:flex sm:flex-col sm:items-center">Iniciar Sesion</a></p>
            </div>
            {/* Registrar Usuario */}
            <div className="flex flex-col items-center">
                <p className="mt-5">¿Quieres registrar un usuario normal? <a onClick={handleRegisterClick} className="text-clr-blue underline cursor-pointer sm:flex sm:flex-col sm:items-center">Regístrate aquí</a></p>
            </div>
        </form>
    );
}

export function Company_SignIn_2({ userData, isCompany2, handleCompanyBack }) {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const { registerWorkProfile, loading, error, message } = useRegisterWorkProfile();
    const { addCategories } = useAddCategories()
    const { deleteCategory } = useDeleteCategory();
    const { addSkills } = useAddSkills()
    const { login } = useLogin()
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!isCompany2) {
            navigate('/Access_Panel/company-1');
        } else {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
            }, 100);
        }
    }, [isCompany2]);

    //Guarda los datos ingresados en el SignIn
    const [formData, setFormData] = useState({
        province: '',
        city: '',
        number: '',
        workDescription: ''
    });

    const [categoryForm, setCategoryForm] = useState({
        category1: '',
        category2: '',
        category3: '',
    });

    const [skillForm, setSkillForm] = useState({
        skill1: '',
        skill2: '',
        skill3: '',
    });

    const handleCategoryChange = (event) => {
        const { name, value } = event.target;
        setCategoryForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSkillChange = (event) => {
        const { name, value } = event.target;
        setSkillForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const { categories } = useFetchCategories();

    const { skills } = useFetchSkills();

    const categoryList = categories.map(category => ({
        id: category.categoryId,
        name: category.categoryName
    }));

    const skillList = skills.map(skill => ({
        id: skill.id,
        name: skill.skillName
    }));

    const { provincias } = useFetchProvincias();
    const [selectedProvince, setSelectedProvince] = useState(formData.province);
    const [availableCities, setAvailableCities] = useState([]);

    //Lista de opciones de los selects
    const stateOptions = provincias ? Object.values(provincias) : [];
    //console.log(provincias);

    const provinceIdMap = {
        'San José': '1',
        'Alajuela': '2',
        'Cartago': '3',
        'Heredia': '4',
        'Guanacaste': '5',
        'Puntarenas': '6',
        'Limón': '7'
    };

    useEffect(() => {
        const fetchCities = async (provinceId) => {
            try {
                const response = await fetch(`https://ubicaciones.paginasweb.cr/provincia/${provinceId}/cantones.json`);
                const data = await response.json();
                const citiesArray = data ? Object.values(data) : [];
                setAvailableCities(citiesArray);
                //console.log(citiesArray);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        if (selectedProvince) {
            const provinceId = provinceIdMap[selectedProvince];
            fetchCities(provinceId);
        }
    }, [selectedProvince]);

    //Maneja los selects, y actualiza la lista de ciudades respecto a la provincia
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'province') {
            setSelectedProvince(value);
        }
    };

    //Maneja los inputs ingresados
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNumberChange = (e) => {
        const { name, value } = e.target;
        if (/^\d*$/.test(value)) {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    //Foto de Perfil
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const defaultImage = '/images/default_profile_picture.jpg';

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBack = () => {
        setIsAnimating(true);
        setTimeout(() => {
            handleCompanyBack();
            navigate('/Access_Panel/company-1');
        }, 100);
    };

    const handleCheckboxChange = (e) => {
        setTermsAccepted(e.target.checked);
    };

    const [categoryisEqual, setCategoryIsEqual] = useState(false);
    const [skillisEqual, setSkillIsEqual] = useState(false);

    //Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert("Debes aceptar los términos y condiciones");
            return;
        }

        const { category1, category2, category3 } = categoryForm;
        const cat1 = Number(category1);
        const cat2 = Number(category2);
        const cat3 = Number(category3);

        const { skill1, skill2, skill3 } = skillForm;
        const sk1 = Number(skill1);
        const sk2 = Number(skill2);
        const sk3 = Number(skill3);

        if (cat1 === cat2 || cat2 === cat3 || cat3 === cat1) {
            if (cat2 === 0 || cat3 === 0) {
                setCategoryIsEqual(false);
            } else {
                setCategoryIsEqual(true);
                return;
            }
        } else {
            setCategoryIsEqual(false);
        }

        if (sk1 === sk2 || sk2 === sk3 || sk3 === sk1) {
            setSkillIsEqual(true);
            return;
        } else {
            setSkillIsEqual(false);
        }
        
        //console.log(categoryForm);
        //console.log(skillForm);
        const updatedUserData = {
            ...userData,
            ...formData,
            profileType: 'W',
        };

        const newFormData = new FormData();

        Object.keys(updatedUserData).forEach((key) => {
            newFormData.append(key, updatedUserData[key]);
        });
        newFormData.append('profilePictureUrl', profileImage || defaultImage);

        const response = await registerWorkProfile(newFormData);
        if (response) {
            if (categoryForm.category1) {
                await addCategories({
                    WorkId: response.workId,
                    CategoryId: categoryForm.category1,
                });
            }
    
            if (categoryForm.category2) {
                if (categoryForm.category2 === "57") {
                } else {
                    await addCategories({
                        WorkId: response.workId,
                        CategoryId: categoryForm.category2,
                    });
                }
            }
    
            if (categoryForm.category3) {
                if (categoryForm.category3 === "57") {
                } else {
                    await addCategories({
                        WorkId: response.workId,
                        CategoryId: categoryForm.category3,
                    });
                }
            }
    
            if (skillForm.skill1) {
                await addSkills({
                    WorkId: response.workId,
                    SkillId: skillForm.skill1,
                });
            }
    
            if (skillForm.skill2) {
                await addSkills({
                    WorkId: response.workId,
                    SkillId: skillForm.skill2,
                });
            }
    
            if (skillForm.skill3) {
                await addSkills({
                    WorkId: response.workId,
                    SkillId: skillForm.skill3,
                });
            }
            
            const result = await login(response.email, userData.password);

            if (result.success) {
                window.location.href = (`/workProfile/${response.workId}`);
            }
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <form className={`relative w-1/2 items-center justify-center md:w-[70%] transition-opacity duration-100 ${isAnimating ? 'opacity-0' : 'opacity-100'} `} onSubmit={handleSubmit}>
            <h1 className="text-5xl font-medium sm:text-2xl md:mt-32 md:-mb-3">Registrar Empresa</h1>

            {/* Formulario */}
            <div className="flex flex-col gap-2 my-10 sm:my-5">
                <div className="flex w-full">
                    <div className="relative w-36 h-36 mx-auto sm:w-28 sm:h-28 sm:mt-5 sm:ml-2">
                        {/* Imagen de perfil */}
                        <div className="w-full h-full rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                            <img
                                src={previewImage || defaultImage}
                                alt="Previsualización"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Botón para subir imagen */}
                        <label htmlFor="profileImage" className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer">
                            <AddIcon style={{ color: 'white' }} />
                        </label>
                        <input
                            id="profileImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>

                    <div className="flex flex-col w-1/2 gap-2 sm:gap-1">
                        <FormSelect id="company_state" name="province" title="Provincia" value={formData.province} onChange={handleSelectChange} options={stateOptions} className="border h-12 bg-clr-white border-black rounded p-1" />
                        <FormSelect id="company_city" name="city" title="Ciudad" value={formData.city} onChange={handleSelectChange} options={availableCities} className="border h-12 bg-clr-white border-black rounded p-1" />
                    </div>

                </div>
                <div className="flex gap-2">
                    <div className="flex flex-col w-1/2 gap-2">
                        <FormSelectSpecial id="company_category1" name="category1" title="Categorías" type="Categoría" required={true} value={categoryForm.category1} onChange={handleCategoryChange} options={categoryList} className="border h-12 bg-clr-white border-black rounded p-1" />
                        <FormSelectSpecial id="company_category2" name="category2" title="" type="Categoría" required={false} value={categoryForm.category2} onChange={handleCategoryChange} options={categoryList} className="border h-12 bg-clr-white border-black rounded p-1" />
                        <FormSelectSpecial id="company_category3" name="category3" title="" type="Categoría" required={false} value={categoryForm.category3} onChange={handleCategoryChange} options={categoryList} className="border h-12 bg-clr-white border-black rounded p-1" />
                    </div>
                    <div className="flex flex-col w-1/2 gap-2">
                        <FormSelectSpecial id="company_category3" name="skill1" title="Habilidades" type="Habilidad" required={true} value={skillForm.skill1} onChange={handleSkillChange} options={skillList} className="border h-12 bg-clr-white border-black rounded p-1" />
                        <FormSelectSpecial id="company_category3" name="skill2" title="" type="Habilidad" required={true} value={skillForm.skill2} onChange={handleSkillChange} options={skillList} className="border h-12 bg-clr-white border-black rounded p-1" />
                        <FormSelectSpecial id="company_category3" name="skill3" title="" type="Habilidad" required={true} value={skillForm.skill3} onChange={handleSkillChange} options={skillList} className="border h-12 bg-clr-white border-black rounded p-1" />
                    </div>
                </div>
                <FormInput id="company_number" type="text" name="number" value={formData.number} title="Numero de celular" onChange={handleNumberChange} minLength={8} maxLength={8} className="border h-12 bg-clr-white border-black rounded p-1" />
                <FormTextArea id="company_description" name="workDescription" title="Descripción" minLength={0} maxLength={450} value={formData.workDescription} onChange={handleInputChange} className="border h-44 md:h-32 bg-clr-white border-black rounded p-1" />
                <div className="flex items-center gap-3">
                    <input id="terms" type="checkbox" checked={termsAccepted} onChange={handleCheckboxChange} className="focus:ring-clr-blue h-4 w-4 border-gray-300 rounded" />
                    <label className="font-medium text-gray-700">
                        Acepto los{" "}
                        <a className="text-clr-blue hover:underline" onClick={openModal}>
                            Términos y Condiciones
                        </a>
                    </label>
                </div>
            </div>

            {/* Boton de volver o confirmar */}
            <div className="flex justify-between h-12">
                <SecondaryButtonOutline id="company_back" text="Volver" type="button" onClick={handleBack} extraStyles="w-[47%] font-medium" />
                <MainButton id="company_confirm" text="Confirmar" type="submit" extraStyles="w-[47%]" disabled={!termsAccepted} />
            </div>

            {/* Cargando */}
            {loading && <p className="text-clr-black font-bold mt-5">Cargando...</p>}
            {/* Error */}
            {error && <p className="text-red-500 font-bold mt-5">{message}</p>}
            {/* Equals */}
            {skillisEqual && <p className="text-red-500 font-bold mt-5">Las habilidades no pueden ser iguales</p>}
            {categoryisEqual && <p className="text-red-500 font-bold mt-5">Las categorías no pueden ser iguales</p>}

            {/* Modal de terminos y condiciones */}
            {showModal && (
                <Terms closeModal={closeModal} />
            )}

        </form>
    );
}