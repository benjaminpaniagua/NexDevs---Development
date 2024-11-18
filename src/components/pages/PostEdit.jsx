import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEditPost } from "../../hooks/useEditPost";
import AddIcon from "@mui/icons-material/Add";
import { FormTextArea } from "../ui/FormInput";
import {
  MainButton,
  SecondaryButtonOutline,
  SecondaryButton,
} from "../ui/Buttons";
import axios from "axios";
import Alert from "../ui/Alert";
import ConfirmationAlert from "../ui/ConfirmationAlert";

export function EditPost() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { editPost, loading, error } = useEditPost();
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const [postData, setPostData] = useState({
    content: "",
    imageUrl: "",
    workId: 0,
    paymentReceipt: "",
    createAt: new Date().toISOString(),
    likesCount: 0,
    commentsCount: 0,
    approved: 1,
  });
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = !isModalOpen ? "hidden" : "auto";
  };
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `https://nexdevsapi.somee.com/Posts/Consultar?postId=${postId}`
        );
        setPostData({
          content: response.data.contentPost,
          imageUrl: response.data.postImageUrl,
          workId: response.data.workId,
          paymentReceipt: response.data.paymentReceipt,
          createAt: response.data.createAt,
          likesCount: response.data.likesCount,
          commentsCount: response.data.commentsCount,
          approved: response.data.approved,
        });
        setSelectedFile(response.data.postImageUrl);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchPostData();
  }, [postId]);

  const handlePostInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmitPost = async (e) => {
    setIsConfirmationModalOpen(false);
    e.preventDefault();
    const formData = new FormData();
    formData.append("PostId", postId);
    formData.append("WorkId", postData.workId);
    formData.append("ContentPost", postData.content);
    formData.append("PaymentReceipt", postData.paymentReceipt);
    formData.append("CreateAt", postData.createAt);
    formData.append("LikesCount", postData.likesCount);
    formData.append("CommentsCount", postData.commentsCount);
    formData.append("Approved", postData.approved);
    if (imageFile) {
      formData.append("PostImageUrl", imageFile);
    }

    try {
      await editPost(postId, formData);
      setAlert({
        show: true,
        type: "success",
        message: "Publicación editada exitosamente.",
      });
      setTimeout(() => {
        navigate(-1);
      }, 2500);
    } catch (error) {
      setAlert({
        show: true,
        type: "error",
        message: "Ocurrió un error al editar la publicación.",
      });
      console.error(error);
    }
  };

  if (fetchLoading) return <p>Cargando datos del post...</p>;
  if (fetchError) return <p style={{ color: "red" }}>{fetchError}</p>;

  const EditPublicationInstructions = () => (
    <ol className="font-montserrat list-decimal list-inside space-y-7 md:space-y-3 md:text-fs-med">
      <li>
        <strong>Revisión de Cambios</strong> <br /> Todos los cambios serán
        revisados nuevamente. Si los cambios realizados son demasiado
        significativos, la publicación podría ser rechazada.
      </li>
      <li>
        <strong>No se Requiere Pago</strong> <br /> No es necesario realizar un
        nuevo pago para editar la publicación.
      </li>
      <li>
        <strong>Revisar Descripción</strong> <br /> Asegúrate de que la
        descripción sea clara y no altere el contexto original de la
        publicación.
      </li>
      <li>
        <strong>Cambio de Imagen</strong> <br /> Puedes cambiar la imagen de la
        publicación, pero asegúrate de que la nueva imagen mantenga el mismo
        contexto y mensaje que la original.
      </li>
      <li>
        <strong>Enviar para Revisión</strong> <br /> Una vez que hayas hecho los
        cambios necesarios, envía la publicación para su revisión.
      </li>
      <li>
        <strong>Tiempo de Revisión</strong> <br /> La revisión puede tardar
        entre uno a dos días. Recibirás una notificación sobre el estado de tu
        publicación editada.
      </li>
    </ol>
  );

  return (
    <div className="flex flex-col gap-6 py-14 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-8">
      <form onSubmit={handleSubmitPost}>
        <h1 className="text-4xl font-bold mb-8">Editar Publicación</h1>
        <div className="flex gap-12 md:flex-col-reverse md:gap-7">
          <section className="w-1/2 md:w-full">
            <div className="relative mx-auto">
              <label>Foto</label>
              <img
                className="w-full h-[30rem] object-cover mt-2 rounded-lg flex items-center justify-center relative"
                src={selectedFile || "/images/placeholder.jpg"}
                alt="post-image"
              />
              {/* Botón para subir imagen */}
              <label
                htmlFor="postImage"
                className="absolute bottom-0 transform translate-x-2 translate-y-2 w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
              >
                <AddIcon style={{ color: "white" }} />
              </label>
              <input
                id="postImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label>Descripción:</label>
              <FormTextArea
                name="content"
                className="h-20 border bg-clr-white border-black rounded p-1"
                value={postData.content || ""}
                onChange={handlePostInputChange}
                required
              />
            </div>
            <div className="flex justify-end space-x-4 mt-12">
              <SecondaryButtonOutline
                extraStyles={"px-8 py-2"}
                text="Volver"
                onClick={() => navigate(-1)}
              />
              <MainButton
                disabled={loading}
                extraStyles={"w-full"}
                text={loading ? "Guardando..." : "Guardar Cambios"}
                onClick={() => setIsConfirmationModalOpen(true)}
              />
              <ConfirmationAlert
                isOpen={isConfirmationModalOpen}
                onCancel={() => setIsConfirmationModalOpen(false)}
                onConfirm={handleSubmitPost}
                title="¿Estás seguro de guardar los cambios?"
                message="Una vez guardados, los cambios serán enviados a revisión."
                confirmText="Guardar"
              />
            </div>
          </section>
          <section className="w-1/2 md:w-full">
            {/* Instrucciones visibles solo en pantallas grandes */}
            <div className="md:hidden block space-y-3 border-solid border-[2px] border-black py-3 px-4 mt-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Instrucciones para Editar Publicación
              </h2>
              <EditPublicationInstructions />
            </div>

            {/* Botón visible solo en pantallas pequeñas */}
            <div className="hidden md:flex justify-center mt-8">
              <SecondaryButton
                extraStyles={"px-4 py-1"}
                text="Ver Instrucciones"
                onClick={toggleModal}
              />
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex px-5 items-start justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg max-w-lg mt-3 overflow-y-auto max-h-[95vh]">
                  <h2 className="text-xl md:text-fs-large font-bold mb-4">
                    Instrucciones para Editar Publicación
                  </h2>
                  <EditPublicationInstructions />
                  <div className="flex justify-end mt-4">
                    <SecondaryButton
                      text="Cerrar"
                      extraStyles={"px-4 py-1"}
                      onClick={toggleModal}
                    />
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </form>
      <Alert alert={alert} setAlert={setAlert} />
    </div>
  );
}
