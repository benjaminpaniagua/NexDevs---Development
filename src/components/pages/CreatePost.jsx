import AddIcon from "@mui/icons-material/Add";
import { FormTextArea } from "../ui/FormInput";
import {
  MainButton,
  SecondaryButton,
  SecondaryButtonOutline,
} from "../ui/Buttons";
import Alert from "../ui/Alert";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchWorkUserData } from "../../hooks/useFetchWorkUserData.js";
import { useCreatePost } from "../../hooks/useCreatePost.js";

export default function CreatePost() {
  const { userData } = useFetchWorkUserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.profileType === "U") {
      window.location.href = `/Community_Feed/`;
    }
  }, [userData]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentPost, setContentPost] = useState("");
  const { createPost } = useCreatePost();
  const [postImageUrl, setPostImageUrl] = useState("");
  const [paymentReceipt, setPaymentReceipt] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = !isModalOpen ? "hidden" : "auto";
  };

  const PaymentInstructions = () => (
    <ol className="list-decimal list-inside space-y-7 md:space-y-3 md:text-fs-med">
      <li>
        <strong>Monto a Pagar</strong> <br /> El costo de la publicación es de
        500 colones.
      </li>
      <li>
        <strong>Método de Pago</strong> <br /> Realiza el pago mediante Sinpe
        Móvil al número 00000000.
      </li>
      <li>
        <strong>Ingresar número de Comprobante</strong> <br /> Una vez realizado
        el pago, es obligatorio ingresar el número de comprobante como parte del
        proceso de solicitud de publicación.
      </li>
      <li>
        <strong>Revisión de Publicación</strong> <br /> Después de ingresar el
        número de comprobante, uno de nuestros administradores revisará tanto el
        pago como la publicación para asegurarse de que todo esté en orden.
      </li>
      <li>
        <strong>Tiempo de Aprobación</strong> <br /> La aprobación de la
        publicación puede tardar entre uno a dos días. Una vez aprobada, tu
        publicación aparecerá en el feed. Si la publicación no es aprobada, se
        realizará la devolución del dinero.
      </li>
    </ol>
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostImageUrl(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contentPost) {
      const errorAlert = {
        show: true,
        type: "error",
        message: "Por favor, ingresa el contenido de tu publicación.",
      };
      setAlert(errorAlert);
      return;
    }

    if (!selectedFile) {
      const errorAlert = {
        show: true,
        type: "error",
        message: "Por favor, selecciona una imagen para tu publicación.",
      };
      setAlert(errorAlert);
      return;
    }

    if (!paymentReceipt) {
      setAlert({
        show: true,
        type: "error",
        message: "Por favor, ingresa el número de comprobante.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("contentPost", contentPost);
    formData.append("workId", userData.workId);
    formData.append("createAt", new Date().toISOString());
    formData.append("postImageUrl", postImageUrl);
    formData.append("paymentReceipt", paymentReceipt);

    const response = await createPost(formData);
    if (response) {
      const successAlert = {
        show: true,
        type: "success",
        message: "Tu publicación ha sido agregada exitosamente.",
      };
      setAlert(successAlert);
      setTimeout(() => {
        navigate(-1);
      }, 2500);
    }
  };

  return (
    <div className="flex flex-col gap-6 py-14 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-8">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold mb-8">Publicar</h1>
        <div className="flex gap-12 md:flex-col-reverse md:gap-7">
          <section className="w-1/2 md:w-full">
            <div>
              <div className="relative mx-auto">
                <label>Foto</label>
                <img
                  className="w-full mt-2 h-fit rounded-lg flex items-center justify-center relative"
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
            </div>

            <div className="flex flex-col mt-6">
              <label>Descripción</label>
              <FormTextArea
                minLength={0}
                className="h-20 border bg-clr-white border-black rounded p-1"
                value={contentPost}
                onChange={(e) => setContentPost(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-6">
              <label>Número de Comprobante</label>
              <input
                type="text"
                className="h-12 border bg-clr-white border-black rounded p-1"
                value={paymentReceipt}
                onChange={(e) => {
                  const newValue = e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 8);
                  setPaymentReceipt(newValue);
                }}
                maxLength={8}
                minLength={8}
              />
            </div>
            <div className="flex justify-end space-x-4 mt-12">
              <SecondaryButtonOutline
                extraStyles={"px-8 py-2"}
                text="Volver"
                onClick={() => navigate(-1)}
              />
              <MainButton
                extraStyles={"w-full"}
                text="Publicar"
                type="submit"
              />
            </div>
          </section>
          <section className="w-1/2 md:w-full">
            {/* Instrucciones visibles solo en pantallas grandes */}
            <div className="md:hidden block space-y-3 border-solid border-[2px] border-black py-3 px-4 mt-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Instrucciones para el Pago y Publicación
              </h2>
              <PaymentInstructions />
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
                    Instrucciones para el Pago y Publicación
                  </h2>
                  <PaymentInstructions />
                  <div className="flex justify-end mt-6">
                    <MainButton
                      extraStyles={"px-6"}
                      text="Cerrar"
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
