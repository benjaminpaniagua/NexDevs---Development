import '../../index.css'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Loading_Screen } from '../ui/Loading_Screen.jsx'
import { useFetchWorkUserData } from '../../hooks/useFetchWorkUserData.js';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FormInput, FormSelect, FormTextArea } from '../ui/FormInput.jsx';
import { MainButton, SecondaryButton, SecondaryButtonOutline } from '../ui/Buttons';
import { useEditWorkProfile } from '../../hooks/EditProfile/useEditWorkProfile.js';
import { Link } from 'react-router-dom';

export function WorkUserEdit() {
    const navigate = useNavigate();
    //const [isOwner, setIsOwner] = useState(false);
    const { userData, loading, error } = useFetchWorkUserData();
    const { userId } = useParams();
    const { editProfile, editError } = useEditWorkProfile();

    const [previewImage, setPreviewImage] = useState(null);
    const defaultImage = '/images/default_profile_picture.jpg';

    const [formData, setFormData] = useState({
        workId: userData.workId,
        name: userData.name,
        email: userData.email,
        number: userData.number,
        password: userData.password,
        province: userData.province,
        city: userData.city,
        workDescription: userData.workDescription,
        profilePictureUrl: userData.profilePictureUrl,
        profileType: 'W',
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

    const handleNumberChange = (e) => {
        const { name, value } = e.target;
        if (/^\d*$/.test(value)) {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const stateOptions = [
        'San José', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'
    ];
    const cityOptions = {
        'San José': ['San José', 'Escazú'],
        'Alajuela': ['Alajuela', 'San Carlos'],
        'Cartago': ['Cartago', 'Paraíso'],
        'Heredia': ['Heredia', 'Barva'],
        'Guanacaste': ['Liberia', 'Santa Cruz'],
        'Puntarenas': ['Puntarenas', 'Esparza'],
        'Limón': ['Limón', 'Guápiles']
    };
    const [selectedProvince, setSelectedProvince] = useState(formData.province);
    const [availableCities, setAvailableCities] = useState(cityOptions[selectedProvince] || []);

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'province') {
            setSelectedProvince(value);
            setAvailableCities(cityOptions[value] || []);
        }
    };

    if (error) {
        navigate('/error503');
    }

    useEffect(() => {
        if (!loading) {
            if (userData.workId == userId) {
                //console.log("Is owner");
                //console.log(userData);
                setFormData({
                    workId: userData.workId,
                    name: userData.name,
                    email: userData.email,
                    number: userData.number,
                    password: userData.password,
                    province: userData.province,
                    city: userData.city,
                    workDescription: userData.workDescription,
                    profilePictureUrl: userData.profilePictureUrl,
                    profileType: 'W',
                });
                setSelectedProvince(userData.province);
                setAvailableCities(cityOptions[userData.province] || []);
            } else if (userData.workId !== userId) {
                window.location.href = '/WorkUserEdit/' + userData.workId;
            }
        }
    }, [userData, loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted data", formData);

        const result = await editProfile(formData);
        if (result.success) {
            console.log('Perfil editado con éxito', result);
            window.location.href = '/workprofile/' + userData.workId;
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
                            <FormInput id="company_name" type="text" name="name" title="Nombre de la Empresa" minLength={0} value={formData.name} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                            <FormInput id="company_email" type="email" name="email" title="Email" minLength={0} value={formData.email} onChange={handleInputChange} className="border h-12 bg-clr-white border-black rounded p-1" />
                            <FormInput id="company_number" type="text" name="number" value={formData.number} title="Numero de celular" onChange={handleNumberChange} minLength={8} maxLength={8} className="border h-12 bg-clr-white border-black rounded p-1" />
                        </div>

                        <div className="flex flex-col mt-10 w-1/3 gap-2">
                            <FormSelect id="company_state" name="province" title="Provincia" value={formData.province} onChange={handleSelectChange} options={stateOptions} className="border h-12 bg-clr-white border-black rounded p-1" />
                            <FormSelect id="company_city" name="city" title="Ciudad" value={formData.city} onChange={handleSelectChange} options={availableCities} className="border h-12 bg-clr-white border-black rounded p-1" />
                        </div>
                        {/* Profile Info */}
                    </div>

                    <div className="flex flex-col w-1/2 mx-auto mt-5">
                        <FormTextArea id="company_description" name="workDescription" title="Descripción" minLength={0} maxLength={450} value={formData.workDescription} onChange={handleInputChange} className="border h-44 md:h-32 bg-clr-white border-black rounded p-1" />
                    </div>

                    {editError && <p className="text-red-500 flex justify-center mt-2">{editError}</p>}

                    <div className='mx-auto flex gap-5 mb-5'>
                        <Link to={'/workprofile/' + userData.workId}>
                            <MainButton id="back" type="button" text="Regresar" extraStyles="mt-8 p-2" />
                        </Link>
                        <MainButton id="save" type="submit" text="Guardar" extraStyles="mt-8 p-2" />
                    </div>
                </form>
            </div>

        </>
    )
}  