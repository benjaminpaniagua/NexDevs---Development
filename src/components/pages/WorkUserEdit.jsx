import "../../index.css";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Loading_Screen } from "../ui/Loading_Screen.jsx";
import { useFetchWorkUserData } from "../../hooks/useFetchWorkUserData.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FormInput,
  FormSelect,
  FormTextArea,
  FormSelectSpecial,
} from "../ui/FormInput.jsx";
import { MainButton } from "../ui/Buttons";
import { useEditWorkProfile } from "../../hooks/EditProfile/useEditWorkProfile.js";
import { Link } from "react-router-dom";
import { useFetchProvincias } from "../../hooks/CostaRica/useFetchProvincias.js";
import ConfirmationAlert from "../ui/ConfirmationAlert.jsx";

import { useFetchCategories } from "../../hooks/useFetchCategories";
import { useEditCategories } from "../../hooks/EditProfile/useEditCategories.js";
import { useFetchUserCategories } from "../../hooks/EditProfile/useFetchUserCategories.js";
import { useDeleteCategory } from "../../hooks/EditProfile/useDeleteCategory.js";
import { useAddCategories } from "../../hooks/Access_Panel/useAddCategories";

import { useFetchSkills } from "../../hooks/useFetchSkills";
import { useEditSkills } from "../../hooks/EditProfile/useEditSkills.js";
import { useFetchUserSkills } from "../../hooks/EditProfile/useFetchUserSkills.js";

export function WorkUserEdit() {
  const navigate = useNavigate();
  //const [isOwner, setIsOwner] = useState(false);
  const { userData, loading, error } = useFetchWorkUserData();
  const { userId } = useParams();
  const { editProfile, editLoading, editError } = useEditWorkProfile();

  const { editCategory } = useEditCategories();
  const { editSkills } = useEditSkills();

  const { addCategories } = useAddCategories();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deleteCategory } = useDeleteCategory();

  //const { deleteSkill } = useDeleteSkill();

  const [previewImage, setPreviewImage] = useState(null);
  const defaultImage = "/images/default_profile_picture.jpg";

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
    profileType: "W",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData((prevFormData) => ({
          ...prevFormData,
          profilePictureUrl: file,
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
        [name]: value,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { provincias } = useFetchProvincias();
  const [selectedProvince, setSelectedProvince] = useState(formData.province);
  const [availableCities, setAvailableCities] = useState([]);

  //Lista de opciones de los selects
  const provinceIdMap = {
    "San José": "1",
    Alajuela: "2",
    Cartago: "3",
    Heredia: "4",
    Guanacaste: "5",
    Puntarenas: "6",
    Limón: "7",
  };

  const stateOptions = Object.keys(provinceIdMap);

  useEffect(() => {
    const fetchCities = async (provinceId) => {
      try {
        const response = await fetch(
          `https://ubicaciones.paginasweb.cr/provincia/${provinceId}/cantones.json`
        );
        const data = await response.json();
        const citiesArray = data ? Object.values(data) : [];
        setAvailableCities(citiesArray);
        //console.log(citiesArray);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    if (selectedProvince) {
      const provinceId = provinceIdMap[selectedProvince];
      fetchCities(provinceId);
    }
  }, [selectedProvince]);

  const [categoryForm, setCategoryForm] = useState({
    id1: "",
    id2: "",
    id3: "",
    category1: "",
    category2: "",
    category3: "",
  });

  const [skillForm, setSkillForm] = useState({
    id1: "",
    id2: "",
    id3: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    setCategoryForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSkillChange = (event) => {
    const { name, value } = event.target;
    setSkillForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const { categories } = useFetchCategories();
  const { userCategories } = useFetchUserCategories({ workId: userId });

  useEffect(() => {
    if (userCategories.length > 0) {
      setCategoryForm({
        category1: userCategories[0]?.categoryId || "",
        id1: userCategories[0]?.id || "",
        category2: userCategories[1]?.categoryId || "",
        id2: userCategories[1]?.id || "",
        category3: userCategories[2]?.categoryId || "",
        id3: userCategories[2]?.id || "",
      });
    }
  }, [userCategories]);

  const { skills } = useFetchSkills();
  const { userSkills } = useFetchUserSkills({ workId: userId });

  useEffect(() => {
    if (userSkills.length > 0) {
      setSkillForm({
        skill1: userSkills[0]?.skillId || "",
        id1: userSkills[0]?.workSkillId || "",
        skill2: userSkills[1]?.skillId || "",
        id2: userSkills[1]?.workSkillId || "",
        skill3: userSkills[2]?.skillId || "",
        id3: userSkills[2]?.workSkillId || "",
      });
    }
  }, [userSkills]);

  const categoryList = categories.map((category) => ({
    id: category.categoryId,
    name: category.categoryName,
  }));

  const skillList = skills.map((skill) => ({
    id: skill.id,
    name: skill.skillName,
  }));

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "province") {
      setSelectedProvince(value);
    }
  };

  if (error) {
    navigate("/error503");
  }

  useEffect(() => {
    if (!loading) {
      if (userData.profileType == "U") {
        window.location.href = "/UserEdit/" + userData.userId;
      } else if (userData.workId == userId) {
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
          profileType: "W",
        });
        if (
          userData.profilePictureUrl !== "ND" &&
          userData.profilePictureUrl !== "default_image_url"
        ) {
          setPreviewImage(userData.profilePictureUrl);
        }
        setSelectedProvince(userData.province);
        const fetchCities = async (provinceId) => {
          try {
            const response = await fetch(
              `https://ubicaciones.paginasweb.cr/provincia/${provinceId}/cantones.json`
            );
            const data = await response.json();
            const citiesArray = data ? Object.values(data) : [];
            setAvailableCities(citiesArray);
            //console.log(citiesArray);
          } catch (error) {
            console.error("Error fetching cities:", error);
          }
        };
        if (selectedProvince) {
          const provinceId = provinceIdMap[selectedProvince];
          fetchCities(provinceId);
        }
      } else if (userData.workId !== userId) {
        window.location.href = "/WorkUserEdit/" + userData.workId;
      }
    }
  }, [userData, loading]);

  const [categoryisEqual, setCategoryIsEqual] = useState(false);
  const [skillisEqual, setSkillIsEqual] = useState(false);

  const handleSubmit = async (e) => {
    setIsModalOpen(false);
    e.preventDefault();

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

    const newFormData = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key !== "profilePictureUrl") {
        newFormData.append(key, formData[key]);
      }
    });

    if (formData.profilePictureUrl instanceof File) {
      newFormData.append("profilePictureUrl", formData.profilePictureUrl);
    } else {
      newFormData.append("profilePictureUrl", userData.profilePictureUrl);
    }

    /*for (let pair of newFormData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
}*/
    const result = await editProfile(newFormData);

    if (result.success) {
      if (categoryForm.category1) {
        await editCategory({
          ID: categoryForm.id1,
          WorkId: userData.workId,
          CategoryId: categoryForm.category1,
        });
      }

      if (categoryForm.category2) {
        if (!categoryForm.id2) {
          await addCategories({
            WorkId: userData.workId,
            CategoryId: categoryForm.category2,
          });
        } else if (categoryForm.category2 === "57") {
          await deleteCategory(categoryForm.id2);
        } else {
          await editCategory({
            ID: categoryForm.id2,
            WorkId: userData.workId,
            CategoryId: categoryForm.category2,
          });
        }
      }
      if (categoryForm.category3) {
        if (!categoryForm.id3) {
          await addCategories({
            WorkId: userData.workId,
            CategoryId: categoryForm.category3,
          });
        } else if (categoryForm.category3 === "57") {
          await deleteCategory(categoryForm.id3);
        } else {
          await editCategory({
            ID: categoryForm.id3,
            WorkId: userData.workId,
            CategoryId: categoryForm.category3,
          });
        }
      }

      if (skillForm.skill1) {
        await editSkills({
          WorkSkillId: skillForm.id1,
          WorkId: userData.workId,
          SkillId: skillForm.skill1,
        });
      }

      if (skillForm.skill2) {
        await editSkills({
          WorkSkillId: skillForm.id2,
          WorkId: userData.workId,
          SkillId: skillForm.skill2,
        });
      }

      if (skillForm.skill3) {
        await editSkills({
          WorkSkillId: skillForm.id3,
          WorkId: userData.workId,
          SkillId: skillForm.skill3,
        });
      }

      //console.log('Perfil editado con éxito', result);
      window.location.href = "/workprofile/" + userData.workId;
    } else if (editError) {
      //console.error('Error al editar el perfil', editError);
    }
  };

  /* className='bg-[url("/logo/Logo_BG.svg")] bg-repeat bg-[length:150px_150px]'*/

  return (
    <>
      {/* Loading Screen */}
      <Loading_Screen Loading={loading} />
      {/* Loading Screen */}

      <div>
        <form
          className="flex flex-col mx-auto px-20 max-w-[100rem] md:px-10 h-auto"
          onSubmit={handleSubmit}
        >
          {/* Profile Picture */}
          <div className="relative mt-14 mx-auto">
            <img
              src={previewImage || defaultImage}
              alt="Foto de perfil"
              className="w-56 h-56 rounded-full border-4 border-white object-cover"
            />

            {/* Botón para subir imagen */}
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 transform translate-x-2 translate-y-2 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
            >
              <AddIcon style={{ color: "white" }} />
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

          <div className="flex md:flex-col justify-center gap-4">
            {/* Profile Info */}
            <div className="flex flex-col w-1/3 md:w-full mt-10 gap-2">
              <FormInput
                id="company_name"
                type="text"
                name="name"
                title="Nombre de la Empresa"
                minLength={0}
                value={formData.name}
                onChange={handleInputChange}
                className="border h-12 bg-clr-white border-black rounded p-1"
              />
              <FormInput
                id="company_email"
                type="email"
                name="email"
                title="Email"
                minLength={0}
                value={formData.email}
                onChange={handleInputChange}
                className="border h-12 bg-clr-white border-black rounded p-1"
              />
              <FormInput
                id="company_number"
                type="text"
                name="number"
                value={formData.number}
                title="Numero de celular"
                onChange={handleNumberChange}
                minLength={8}
                maxLength={8}
                className="border h-12 bg-clr-white border-black rounded p-1"
              />
            </div>

            <div className="flex flex-col mt-10 md:mt-0 w-1/3 md:w-full gap-2">
              <FormSelect
                id="company_state"
                name="province"
                title="Provincia"
                value={formData.province}
                onChange={handleSelectChange}
                options={stateOptions}
                className="border h-12 bg-clr-white border-black rounded p-1"
              />
              <FormSelect
                id="company_city"
                name="city"
                title="Ciudad"
                value={formData.city}
                onChange={handleSelectChange}
                options={availableCities}
                className="border h-12 bg-clr-white border-black rounded p-1"
              />
            </div>
            {/* Profile Info */}
            <div className="flex mt-10 w-1/3 md:mt-0 md:w-full gap-2">
              <div className="flex flex-col w-1/2 gap-2">
                <FormSelectSpecial
                  id="company_category1"
                  name="category1"
                  title="Categorías"
                  type="Categoría"
                  required={true}
                  value={categoryForm.category1}
                  onChange={handleCategoryChange}
                  options={categoryList}
                  className="border h-12 bg-clr-white border-black rounded p-1"
                />
                <FormSelectSpecial
                  id="company_category2"
                  name="category2"
                  title=""
                  type="Categoría"
                  required={false}
                  value={categoryForm.category2}
                  onChange={handleCategoryChange}
                  options={categoryList}
                  className="border h-12 bg-clr-white border-black rounded p-1"
                />
                <FormSelectSpecial
                  id="company_category3"
                  name="category3"
                  title=""
                  type="Categoría"
                  required={false}
                  value={categoryForm.category3}
                  onChange={handleCategoryChange}
                  options={categoryList}
                  className="border h-12 bg-clr-white border-black rounded p-1"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <FormSelectSpecial
                  id="company_category3"
                  name="skill1"
                  title="Habilidades"
                  type="Habilidad"
                  required={true}
                  value={skillForm.skill1}
                  onChange={handleSkillChange}
                  options={skillList}
                  className="border h-12 bg-clr-white border-black rounded p-1"
                />
                <FormSelectSpecial
                  id="company_category3"
                  name="skill2"
                  title=""
                  type="Habilidad"
                  required={true}
                  value={skillForm.skill2}
                  onChange={handleSkillChange}
                  options={skillList}
                  className="border h-12 bg-clr-white border-black rounded p-1"
                />
                <FormSelectSpecial
                  id="company_category3"
                  name="skill3"
                  title=""
                  type="Habilidad"
                  required={true}
                  value={skillForm.skill3}
                  onChange={handleSkillChange}
                  options={skillList}
                  className="border h-12 bg-clr-white border-black rounded p-1"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 md:w-full mx-auto mt-5">
            <FormTextArea
              id="company_description"
              name="workDescription"
              title="Descripción"
              minLength={0}
              maxLength={450}
              value={formData.workDescription}
              onChange={handleInputChange}
              className="border h-44 md:h-32 bg-clr-white border-black rounded p-1"
            />
          </div>

          {editError && (
            <p className="text-red-500 text-fs-med flex justify-center mt-2">
              {editError}
            </p>
          )}
          {skillisEqual && (
            <p className="text-red-500 text-fs-med flex justify-center mt-2">
              Las habilidades no pueden ser iguales
            </p>
          )}
          {categoryisEqual && (
            <p className="text-red-500 text-fs-med flex justify-center mt-2">
              Las categorías no pueden ser iguales
            </p>
          )}

          <div className="mx-auto flex gap-5 mb-5">
            <Link to={"/workprofile/" + userData.workId}>
              <MainButton
                id="back"
                type="button"
                text="Regresar"
                extraStyles="mt-8 p-2"
              />
            </Link>
            <MainButton
              id="save"
              // type="submit"
              onClick={() => setIsModalOpen(true)}
              text="Guardar"
              extraStyles="mt-8 p-2"
            />
          </div>
          <ConfirmationAlert
            isOpen={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onConfirm={handleSubmit}
            title="¿Estás seguro?"
            message="Esta acción no se puede deshacer."
            cancelText="Cancelar"
            confirmText="Guardar"
          />
        </form>
      </div>
    </>
  );
}
