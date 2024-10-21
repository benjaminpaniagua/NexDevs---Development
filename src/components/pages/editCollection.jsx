import '../../index.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ICONS } from "../ui/ICONS";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Loading_Screen } from '../ui/Loading_Screen.jsx'
import { useFetchWorkUserData } from '../../hooks/useFetchWorkUserData.js';
import { MainButton, SecondaryButton, SecondaryButtonOutline } from '../ui/Buttons.jsx';
import { useFetchCollection } from '../../hooks/EditCollections/useFetchCollection.js';
import { useAddCollection } from '../../hooks/EditCollections/useAddCollection.js';
import { useEditCollection } from '../../hooks/EditCollections/useEditCollection.js';
import { useDeleteCollection } from '../../hooks/EditCollections/useDeleteCollection.js';

export function EditCollection() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const { userData, loading, error } = useFetchWorkUserData();

    const { addCollection, collectionLoading, collectionError } = useAddCollection();
    const { editCollection } = useEditCollection();
    const { deleteCollection } = useDeleteCollection();

    const [previewImage1, setPreviewImage1] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);
    const [previewImage3, setPreviewImage3] = useState(null);
    const [previewImage4, setPreviewImage4] = useState(null);

    const defaultImage = "/images/placeholder.jpg";

    const [formData1, setFormData1] = useState({
        workId: userData.workId,
        collectionImageUrl: defaultImage,
    });

    const [formData2, setFormData2] = useState({
        workId: userData.workId,
        collectionImageUrl: defaultImage,
    });

    const [formData3, setFormData3] = useState({
        workId: userData.workId,
        collectionImageUrl: defaultImage,
    });

    const [formData4, setFormData4] = useState({
        workId: userData.workId,
        collectionImageUrl: defaultImage,
    });

    const { collections } = useFetchCollection(userId);

    //console.log("Colecciones", collections);

    useEffect(() => {
        if (collections.length > 0) {
            if (collections[0]) {
                setFormData1({
                    workId: collections[0].workId,
                    CollectionImageUrl: collections[0].collectionImageUrl,
                });
                setPreviewImage1(collections[0].collectionImageUrl);
            }
            if (collections[1]) {
                setFormData2({
                    workId: collections[1].workId,
                    CollectionImageUrl: collections[1].collectionImageUrl,
                });
                setPreviewImage2(collections[1].collectionImageUrl);
            }
            if (collections[2]) {
                setFormData3({
                    workId: collections[2].workId,
                    CollectionImageUrl: collections[2].collectionImageUrl,
                });
                setPreviewImage3(collections[2].collectionImageUrl);
            }
            if (collections[3]) {
                setFormData4({
                    workId: collections[3].workId,
                    CollectionImageUrl: collections[3].collectionImageUrl,
                });
                setPreviewImage4(collections[3].collectionImageUrl);
            }
        }
    }, [collections]);


    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (index === 1) {
                    setPreviewImage1(reader.result);
                    setFormData1((prevFormData) => ({
                        ...prevFormData,
                        CollectionImageUrl: file,
                    }));
                } else if (index === 2) {
                    setPreviewImage2(reader.result);
                    setFormData2((prevFormData) => ({
                        ...prevFormData,
                        CollectionImageUrl: file,
                    }));
                } else if (index === 3) {
                    setPreviewImage3(reader.result);
                    setFormData3((prevFormData) => ({
                        ...prevFormData,
                        CollectionImageUrl: file,
                    }));
                } else if (index === 4) {
                    setPreviewImage4(reader.result);
                    setFormData4((prevFormData) => ({
                        ...prevFormData,
                        CollectionImageUrl: file,
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove1 = () => {
        setFormData1({
            workId: userData.workId,
            CollectionImageUrl: null,
        });
        setPreviewImage1(null);
    };

    const handleImageRemove2 = () => {
        setFormData2({
            workId: userData.workId,
            CollectionImageUrl: null,
        });
        setPreviewImage2(null);
    };

    const handleImageRemove3 = () => {
        setFormData3({
            workId: userData.workId,
            CollectionImageUrl: null,
        });
        setPreviewImage3(null);
    };

    const handleImageRemove4 = () => {
        setFormData4({
            workId: userData.workId,
            CollectionImageUrl: null,
        });
        setPreviewImage4(null);
    };


    useEffect(() => {
        if (!loading) {
            if (userData.profileType == "U") {
                window.location.href = '/Community_Feed/';
            }
            else if (userData.workId == userId) {
                //console.log("Todo correcto");
            }
            else if (userData.workId !== userId) {
                window.location.href = '/EditCollection/' + userData.workId;
            }
        }
    }, [userData, loading]);

    if (error) {
        navigate('/error503');
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFormData = new FormData();
        if (previewImage1) {
            if (formData1.CollectionImageUrl instanceof File) {
                if (collections[0]) {
                    //newFormData.set('CollectionImageUrl', collections[0].collectionImageUrl);                    
                    //console.log("Ya hay una imagen antes, pero se quiere cambiar 1");
                    await editCollection(collections[0].collectionId, userData.workId, formData1.CollectionImageUrl);
                } else {
                    //newFormData.set('CollectionImageUrl', formData1.CollectionImageUrl);
                    //console.log("no habia antes, subiendo imagen 1, hay archivo");
                    await addCollection(formData1.CollectionImageUrl, userData.workId);
                }
            } else {
                if (collections[0]) {
                    //newFormData.set('CollectionImageUrl', collections[0].collectionImageUrl);
                    //console.log("Misma imagen 1, no se debe subir nada");
                }
            }
        } else {
            if (collections[0]) {
                //newFormData.set('CollectionImageUrl', collections[0].collectionImageUrl);
                //console.log("Habia imagen antes 1, pero la quitaron, hay que eliminar");
                await deleteCollection(collections[0].collectionId);
            }
        }


        if (previewImage2) {
            if (formData2.CollectionImageUrl instanceof File) {
                if (collections[1]) {
                    //newFormData.set('CollectionImageUrl', collections[1].collectionImageUrl);                    
                    //console.log("Ya hay una imagen antes, pero se quiere cambiar 2");
                    await editCollection(collections[1].collectionId, userData.workId, formData2.CollectionImageUrl);
                } else {
                    //newFormData.set('CollectionImageUrl', formData2.CollectionImageUrl);
                    //console.log("no habia antes, subiendo imagen 2, hay archivo");
                    await addCollection(formData2.CollectionImageUrl, userData.workId);
                }
            } else {
                if (collections[1]) {
                    //newFormData.set('CollectionImageUrl', collections[1].collectionImageUrl);
                    //console.log("Misma imagen 2, no se debe subir nada");
                }
            }
        } else {
            if (collections[1]) {
                //newFormData.set('CollectionImageUrl', collections[1].collectionImageUrl);
                //console.log("Habia imagen antes 2, pero la quitaron, hay que eliminar");
                await deleteCollection(collections[1].collectionId);
            }
        }


        if (previewImage3) {
            if (formData3.CollectionImageUrl instanceof File) {
                if (collections[2]) {
                    //newFormData.set('CollectionImageUrl', collections[2].collectionImageUrl);
                    await editCollection(collections[2].collectionId, userData.workId, formData3.CollectionImageUrl);
                    //console.log("Ya hay una imagen antes, pero se quiere cambiar 3");
                } else {
                    //newFormData.set('CollectionImageUrl', formData3.CollectionImageUrl);
                    //console.log("no habia antes, subiendo imagen 3, hay archivo");
                    await addCollection(formData3.CollectionImageUrl, userData.workId);
                }
            } else {
                if (collections[2]) {
                    //newFormData.set('CollectionImageUrl', collections[2].collectionImageUrl);
                    //console.log("Misma imagen 3, no se debe subir nada");
                }
            }
        } else {
            if (collections[2]) {
                //newFormData.set('CollectionImageUrl', collections[2].collectionImageUrl);
                //console.log("Habia imagen antes 3, pero la quitaron, hay que eliminar");
                await deleteCollection(collections[2].collectionId);
            }
        }


        if (previewImage4) {
            if (formData4.CollectionImageUrl instanceof File) {
                if (collections[3]) {
                    //newFormData.set('CollectionImageUrl', collections[3].collectionImageUrl);                    
                    //console.log("Ya hay una imagen antes, pero se quiere cambiar 4");
                    await editCollection(collections[3].collectionId, userData.workId, formData4.CollectionImageUrl);
                } else {
                    //newFormData.set('CollectionImageUrl', formData4.CollectionImageUrl);
                    //console.log("no habia antes, subiendo imagen 4, hay archivo");
                    await addCollection(formData4.CollectionImageUrl, userData.workId);
                }
            } else {
                if (collections[3]) {
                    //newFormData.set('CollectionImageUrl', collections[3].collectionImageUrl);
                    //console.log("Misma imagen 4, no se debe subir nada");
                }
            }
        } else {
            if (collections[3]) {
                //newFormData.set('CollectionImageUrl', collections[3].collectionImageUrl);
                //console.log("Habia imagen antes 4, pero la quitaron, hay que eliminar");
                await deleteCollection(collections[3].collectionId);
            }
        }


        if (!collectionLoading) {
            window.location.href = '/workprofile/' + userData.workId;
        }
    };

    return (
        <>
            {/* Loading Screen */}
            <Loading_Screen Loading={loading} />
            {/* Loading Screen */}

            <div>
                <form className='flex flex-col mt-40 mx-auto px-20 max-w-[100rem] md:px-10 h-auto' onSubmit={handleSubmit}>

                    <div className='grid grid-cols-2 sm:grid-cols-1 sm:gap-5 justify-items-center pt-2 gap-2'>
                        {/*Coleccion 1 */}
                        <div className='relative rounded-md overflow-hidden'>
                            <img
                                className="max-w-[400px] w-full h-full object-cover aspect-video"
                                src={
                                    previewImage1 == "ND" || previewImage1 == null
                                        ? defaultImage
                                        : previewImage1
                                }
                                alt="collection image 1" />
                            <div>
                                <label htmlFor="addcollection1" className="absolute bg-black rounded-full flex items-center justify-center w-10 h-10 bottom-2 left-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white' }} />
                                </label>
                                <input
                                    id="addcollection1"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, 1)}
                                    className="hidden"
                                />
                            </div>
                            <div>
                                <label onClick={handleImageRemove1} className="absolute bg-red-500 rounded-full flex items-center justify-center w-10 h-10 bottom-2 right-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white', transform: 'rotate(45deg)' }} />
                                </label>
                            </div>
                        </div>
                        {/*Coleccion 1 */}

                        {/*Coleccion 2 */}
                        <div className='relative rounded-md overflow-hidden'>
                            <img
                                className="max-w-[400px] w-full h-full object-cover aspect-video"
                                src={
                                    previewImage2 == "ND" || previewImage2 == null
                                        ? defaultImage
                                        : previewImage2
                                }
                                alt="collection image 2" />
                            <div>
                                <label htmlFor="addcollection2" className="absolute bg-black rounded-full flex items-center justify-center w-10 h-10 bottom-2 left-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white' }} />
                                </label>
                                <input
                                    id="addcollection2"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, 2)}
                                    className="hidden"
                                />
                            </div>
                            <div>
                                <label onClick={handleImageRemove2} className="absolute bg-red-500 rounded-full flex items-center justify-center w-10 h-10 bottom-2 right-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white', transform: 'rotate(45deg)' }} />
                                </label>
                            </div>
                        </div>
                        {/*Colecion 2 */}

                        {/*Coleccion 3 */}
                        <div className='relative rounded-md overflow-hidden'>
                            <img
                                className="max-w-[400px] w-full h-full object-cover aspect-video"
                                src={
                                    previewImage3 == "ND" || previewImage3 == null
                                        ? defaultImage
                                        : previewImage3
                                }
                                alt="collection image 3" />
                            <div>
                                <label htmlFor="addcollection3" className="absolute bg-black rounded-full flex items-center justify-center w-10 h-10 bottom-2 left-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white' }} />
                                </label>
                                <input
                                    id="addcollection3"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, 3)}
                                    className="hidden"
                                />
                            </div>
                            <div>
                                <label onClick={handleImageRemove3} className="absolute bg-red-500 rounded-full flex items-center justify-center w-10 h-10 bottom-2 right-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white', transform: 'rotate(45deg)' }} />
                                </label>
                            </div>
                        </div>
                        {/*Coleccion 3 */}

                        {/*Coleccion 4 */}
                        <div className='relative rounded-md overflow-hidden'>
                            <img
                                className="max-w-[400px] w-full h-full object-cover aspect-video"
                                src={
                                    previewImage4 == "ND" || previewImage4 == null
                                        ? defaultImage
                                        : previewImage4
                                }
                                alt="collection image 4" />
                            <div>
                                <label htmlFor="addcollection4" className="absolute bg-black rounded-full flex items-center justify-center w-10 h-10 bottom-2 left-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white' }} />
                                </label>
                                <input
                                    id="addcollection4"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, 4)}
                                    className="hidden"
                                />
                            </div>
                            <div>
                                <label onClick={handleImageRemove4} className="absolute bg-red-500 rounded-full flex items-center justify-center w-10 h-10 bottom-2 right-2 cursor-pointer">
                                    <AddIcon style={{ color: 'white', transform: 'rotate(45deg)' }} />
                                </label>
                            </div>
                        </div>
                        {/*Coleccion 4 */}
                    </div>

                    {collectionLoading && <p className="text-clr-green text-fs-med flex justify-center mt-2">Cargando...</p>}
                    {collectionError && <p className="text-clr-red text-fs-med flex justify-center mt-2">{collectionError}</p>}

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