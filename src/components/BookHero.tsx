"use client";

import { Element } from "react-scroll";
import { Button } from "./Button";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

// Notificaciones en español
const notifySuccess = () =>
  toast.success(
    "¡Sus datos han sido enviados exitosamente!\nNos pondremos en contacto pronto.😁"
  );
const notifyError = () =>
  toast.error(
    "Lo sentimos 😕, hubo un error al enviar sus datos. Por favor, intente más tarde."
  );

// Interfaz para los props del componente
interface BookHeroProps {
  heading?: string;
}

export const BookHero: React.FC<BookHeroProps> = ({
  heading = "Contáctenos",
}) => {
  const [enviando, setEnviando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      mensaje: mensajeRef.current?.value,
    };

    try {
      const res = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        notifyError();
      } else {
        formRef.current?.reset();
        notifySuccess();
      }
    } catch (error) {
      notifyError();
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="w-full lg:w-[390px] 2xl:w-[458px] h-fit flex flex-col shadow-[0_54px_134px_#00000026] border-solid border-blue-500 border-t-[5px] rounded-xl gap-6 p-5 lg:py-8 lg:px-6 bg-white">
      <h3 className="text-center uppercase font-semibold text-2xl lg:text-4xl tracking-tight">
        {heading}
      </h3>
      <form
        ref={formRef}
        onSubmit={handleForm}
        className="flex flex-col gap-3 text-xs mx-4"
      >
        <input
          id="name"
          ref={nameRef}
          placeholder="Nombre y apellido"
          className="py-2 sm:py-3 rounded-lg  border-black/10 shadow-sm w-full text-black"
        />

        <input
          id="phone"
          ref={phoneRef}
          placeholder="+7868901911"
          className="py-2 sm:py-3 rounded-lg  border-black/10 shadow-sm w-full text-black"
          type="tel"
          required
        />

        <input
          id="email"
          ref={emailRef}
          placeholder="contacto@example.com"
          className="py-2 sm:py-3 rounded-lg  border-black/10 shadow-sm w-full text-black"
          type="email"
        />

        <textarea
          id="mensaje"
          ref={mensajeRef}
          placeholder="Cuéntenos sobre su consulta"
          className="py-2 sm:py-3 rounded-lg border-black/10 shadow-sm w-full text-black"
          rows={4}
        />

        <Button
          title={enviando ? "Enviando..." : "Enviar mensaje"}
          className="w-full text-base bg-blue-500 text-white shadow-sm"
        />
      </form>
    </div>
  );
};
