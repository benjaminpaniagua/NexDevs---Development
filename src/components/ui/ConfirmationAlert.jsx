import React from "react";
import { MainButton, SecondaryButtonOutline } from "../ui/Buttons";

const ConfirmationModal = ({
  isOpen,
  onCancel,
  onConfirm,
  title = "¿Estás seguro?",
  message = "Esta acción no se puede deshacer.",
  cancelText = "Cancelar",
  confirmText = "Eliminar",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-between w-full space-x-4">
          <SecondaryButtonOutline
            onClick={onCancel}
            extraStyles="px-4 py-2 w-full"
            text={cancelText}
          />
          <MainButton
            extraStyles="w-full"
            text={confirmText}
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
