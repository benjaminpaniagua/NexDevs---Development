import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es network?",
      answer:
        "network es una plataforma diseñada para ayudar a pequeños empresarios, PYMES y freelancers a promocionar sus servicios y conectarse con clientes potenciales.",
    },
    {
      question: "¿Cómo puedo registrarme en network?",
      answer:
        "Para registrarte, simplemente dirígete a la página de registro, proporciona tus datos personales y crea un perfil. Una vez registrado, podrás empezar a promocionar tus servicios.",
    },
    {
      question: "¿Cómo se publican y aprueban los servicios?",
      answer:
        "Una vez que creas una publicación de servicio, nuestro equipo la revisa para asegurarse de que cumpla con las políticas de la plataforma. Después de ser aprobada, se mostrará en el feed público.",
    },
    {
      question: "¿Cómo destaco mis servicios en la plataforma?",
      answer:
        "Puedes destacar tus servicios a través de publicaciones patrocinadas, lo que te dará mayor visibilidad y te permitirá llegar a más clientes potenciales.",
    },
    {
      question: "¿Cuál es el método de pago para promocionar servicios?",
      answer:
        "Utilizamos Sinpe Móvil como método de pago principal. Todas las transacciones son seguras y los pagos se realizan de manera rápida y sencilla a través de la plataforma.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-10 h-auto mx-auto px-20 max-w-[100rem] xs:px-7 md:px-10">
      <h1 className="text-4xl font-bold text-clr-black sm:text-center">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left text-lg font-semibold text-clr-black focus:outline-none"
            >
              {faq.question}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  <p className="text-fs-med">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
