import { useEffect, useState } from "react";
import { ICONS } from "../ICONS";
import { SecondaryButton } from "../Buttons";

export function Modal_Post({ post, onClose }) {
  const [comment, setComment] = useState("");

  // manejo del scroll en el body
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);


  const handleClickOutside = (event) => {
    if (event.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-screen"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded-lg p-4 w-[60rem] m-5 mt-[6rem] max-h-[85vh] overflow-y-auto sticky ">
        {/* Contenedor fijo dentro del modal */}
        <div className="flex justify-between items-center w-full py-4 bg-white sticky top-[-16px] z-10">
          <div className="flex items-center">
            <div className="h-9 w-9 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">{post.user[0]}</span>
            </div>
            <h3 className="text-lg font-semibold ml-4">{post.user}</h3>
          </div>

          {/* Botón para cerrar el modal */}
          <button onClick={onClose} className="text-black">
            {ICONS.close}
          </button>
        </div>

        {/* Imagen del post */}
        <img
          src={post.imageUrl} 
          alt="Imagen de la publicación"
          className="w-fit h-min rounded-[5px] object-cover mb-4"
        />

        {/* Iconos de interacción */}
        <div className="flex items-center gap-4 mb-4">
          <button className="flex items-center gap-1">
            {ICONS.heart}
            <span>3</span>
          </button>
          <button className="flex items-center gap-1">
            {ICONS.comment}
            <span>0</span>
          </button>
        </div>

        {/* Título y descripción */}
        <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
        <p className="mt-2 text-sm text-gray-500 mb-4">{post.description}</p>

        {/* Sección de comentarios */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Comentarios</h5>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Escribe un comentario"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <SecondaryButton text="Enviar" extraStyles="px-4 py-2" type="" />
          </div>

          {/* Ejemplo de comentario */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 bg-black rounded-full flex items-center justify-center">
              
            </div>
            <div>
              <h6 className="text-sm font-semibold">Ana</h6>
              <p className="text-sm text-gray-500">¡Qué bonita foto! 😍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
