import '../../index.css'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Loading_Screen } from '../ui/Loading_Screen.jsx'
import { useFetchWorkUserData } from '../../hooks/useFetchWorkUserData.js';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FormInput, FormSelect, FormTextArea } from '../ui/FormInput.jsx';
import { MainButton, SecondaryButton, SecondaryButtonOutline } from '../ui/Buttons.jsx';
import { useEditNormalUser } from '../../hooks/EditProfile/useEditNormalProfile.js';
import { Link } from 'react-router-dom';
import { useFetchProvincias } from '../../hooks/CostaRica/useFetchProvincias.js';
import { q } from 'framer-motion/client';

export function NormalUserEdit() {
    const navigate = useNavigate();
    //const [isOwner, setIsOwner] = useState(false);
    const { userData, loading, error } = useFetchWorkUserData();
    const { userId } = useParams();
    const { editProfile, editError } = useEditNormalUser();

    const [previewImage, setPreviewImage] = useState(null);
    const defaultImage = '/images/default_profile_picture.jpg';

    const [formData, setFormData] = useState({
        userId: userData.userId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        province: userData.province,
        city: userData.city,
        bio: userData.bio,
        profilePictureUrl: userData.profilePictureUrl,
        profileType: 'U',
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    profilePictureUrl: file
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const { provincias } = useFetchProvincias();
    const [selectedProvince, setSelectedProvince] = useState(formData.province);
    const [availableCities, setAvailableCities] = useState([]);

    //Lista de opciones de los selects
    const stateOptions = provincias ? Object.values(provincias) : [];

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


    if (error) {
        navigate('/error503');
    }

    useEffect(() => {
        if (!loading) {
            if (userData.userId == userId) {
                //console.log("Is owner");
                //console.log(userData);
                setFormData({
                    userId: userData.userId,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    password: userData.password,
                    province: userData.province,
                    city: userData.city,
                    bio: userData.bio,
                    profilePictureUrl: userData.profilePictureUrl,
                    profileType: 'U',
                });
                if (userData.profilePictureUrl !== "ND" && userData.profilePictureUrl !== "default_image_url") {
                    setPreviewImage(userData.profilePictureUrl);
                }
                setSelectedProvince(userData.province);
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
            } else if (userData.workId !== userId) {
                window.location.href = '/WorkUserEdit/' + userData.workId;
            }
        }
    }, [userData, loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log("submitted data", formData);

        const newFormData = new FormData();

        Object.keys(formData).forEach((key) => {
            if (key !== 'profilePictureUrl') {
                newFormData.append(key, formData[key]);
            }
        });

        if (formData.profilePictureUrl instanceof File) {
            newFormData.append('profilePictureUrl', formData.profilePictureUrl);
        } else {
            newFormData.append('profilePictureUrl', userData.profilePictureUrl);
        }

        /*for (let pair of newFormData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }*/

        const result = await editProfile(newFormData);
        if (result.success) {
            console.log('Perfil editado con éxito', result);
            window.location.href = '/Community_Feed/';
        } else if (editError) {
            console.error('Error al editar el perfil', editError);
        }
    };

    /* className='bg-[url("/logo/Logo_BG.svg")] bg-repeat bg-[length:150px_150px]'*/

    return (
        <>
            {/* Loading Screen */}
            <Loading_Screen Loading={loading} />
            {/* Loading Screen */}

            <div>

                <form className='flex flex-col mx-auto px-20 max-w-[100rem] md:px-10 h-auto' onSubmit={handleSubmit}>
                    {/* Profile Picture */}
                    <div className="relative mt-14 mx-auto">
                        <img
                            src={previewImage || defaultImage}
                            alt="Foto de perfil"
                            className="w-56 h-56 rounded-full border-4 border-white object-cover"
                        />

                        {/* Botón para subir imagen */}
                        <label htmlFor="profileImage" className="absolute bottom-0 transform translate-x-2 translate-y-2 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer">
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
                    {/* Profile Picture */}

                    <div className='flex justify-center gap-4'>
                        {/* Profile Info */}
                        <div className="flex flex-col w-1/3 mt-10 gap-2">
                            <FormInput id={"user_firstname"} type="text" name="firstName" title="Nombre" minLength={0} value={formData.firstName} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                            <FormInput id={"user_lastName"} type="text" name="lastName" title="Apellidos" minLength={0} value={formData.lastName} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                            <FormInput id={"user_email"} type="email" name="email" title="Email" minLength={0} value={formData.email} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                        </div>

                        <div className="flex flex-col mt-10 w-1/3 gap-2">
                            <FormSelect id="user_province" name="province" title="Provincia" value={formData.province} onChange={handleSelectChange} options={stateOptions} className="border h-12 bg-clr-white border-black rounded p-1" />
                            <FormSelect id="user_city" name="city" title="Ciudad" value={formData.city} onChange={handleSelectChange} options={availableCities} className="border h-12 bg-clr-white border-black rounded p-1" />
                        </div>
                        {/* Profile Info */}
                    </div>

                    <div className="flex flex-col w-1/2 mx-auto mt-5">
                        <FormTextArea id="user_bio" name="bio" title="Biografía" minLength={0} value={formData.bio} onChange={handleInputChange} className="border h-44 md:h-32 bg-clr-white border-black rounded p-1" />
                    </div>

                    {editError && <p className="text-red-500 flex justify-center mt-2">{editError}</p>}

                    <div className='mx-auto flex gap-5 mb-5'>
                        <Link to={-1}>
                            <MainButton id="back" type="button" text="Regresar" extraStyles="mt-8 p-2" />
                        </Link>
                        <MainButton id="save" type="submit" text="Guardar" extraStyles="mt-8 p-2" />
                    </div>
                </form>
            </div>

        </>
    )
}  