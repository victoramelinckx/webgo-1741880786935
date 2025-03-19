"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Servicios } from "@/components/Servicios";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
import { Beneficio } from "@/components/Beneficio";
import { Carrusel } from "@/components/Carrusel";
import { Beneficio2 } from "@/components/Beneficio2";
import { About } from "@/components/About";
import Testimonios from "@/components/Testimonios";
import { Companias } from "@/components/Companias";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero
        headline="Moving professional you can trust."
        subheadline="Sitios web optimizados con IA, diseñados para impulsar tus ventas online, sea que estés comenzando o quieras mejorar tu rendimiento."
        cta1="Comienza Ahora"
      />

      <Beneficio
        Titulo="Crea con IA"
        beneficioTitulo1="Rediseña para vender"
        beneficio1="Optimiza tu ecommerce para aumentar conversiones."
        beneficioTitulo2="Deja atrás el diseño no funcional"
        beneficio2="Nosotros creamos sitios que venden, no solo se ven bien."
      />

      <Carrusel />

      <Beneficio2
        Titulo="Crea con IA"
        beneficioTitulo1="Rediseña para vender"
        beneficio1="Optimiza tu ecommerce para aumentar conversiones."
        beneficioTitulo2="Deja atrás el diseño no funcional"
        beneficio2="Nosotros creamos sitios que venden, no solo se ven bien."
      />

      <About
        titulo="We provide guaranteed moving service in Arizona."
        texto="With our experienced staff and advanced quality in craftsmanship, we believe that we can provide you the picture-perfect kitchen, bathroom, and home that you've been longing for, along with a great professional partnership and friendship.

We trust that we can allow you the picture-perfect kitchen, bathroom, and home that you've been longing for, along with a great professional partnership and friendship."
      />

      <Servicios
        heading="Impulsa Tus Ventas Online"
        description="Construimos y rediseñamos sitios web que convierten visitantes en clientes. Gratis para los que están comenzando."
        services={[
          {
            name: "Sitios Web",
            icon: "globe",
            description: "Sitios web con IA, optimizados y profesionales.",
          },
          {
            name: "Rediseño ",
            icon: "refresh",
            description: "Hacemos que tu sitio web funcione y venda más.",
          },

          {
            name: "Rediseña ",
            icon: "refresh",
            description: "Hacemos que tu sitio web funcione y venda más.",
          },
          {
            name: "Sitios Wep",
            icon: "globe",
            description: "Sitios web con IA, optimizados y profesionales.",
          },
          {
            name: "Redisewow",
            icon: "refresh",
            description: "Hacemos que tu sitio web funcione y venda más.",
          },
        ]}
      />

      <Testimonios />

      <Companias
        titulo="Over 25,000 moves completed! Some of our customers are"
        texto="o"
      />

      <Faq
        faqs={[
          {
            pregunta:
              "¿Qué es exactamente lo que hace WebGo en la creación de sitios web?",
            respuesta:
              "WebGo se especializa en la creación de sitios web profesionales, 100% optimizados y con inteligencia artificial. Nuestros sitios web no solo son visualmente atractivos, sino que también están diseñados para convertir visitantes en clientes. Si tienes una empresa que vende online, podemos ayudarte a mejorar tus conversiones.",
          },
          {
            pregunta:
              "¿Cómo puede WebGo ayudarme si ya tengo un sitio web pero no está dando los resultados esperados?",
            respuesta:
              "WebGo ofrece servicios de rediseño de sitios web para empresas que ya tienen un sitio web pero que no está optimizado para la conversión. Nuestro equipo de expertos rediseñará tu sitio web enfocándose en la funcionalidad y en cómo vende, no solo en cómo se ve.",
          },
          {
            pregunta:
              "Tengo una idea de negocio pero no sé nada sobre la creación de sitios web, ¿puede WebGo ayudarme?",
            respuesta:
              "Definitivamente sí, WebGo ofrece un sitio web gratuito para aquellos que están comenzando. No necesitas saber nada sobre la creación de sitios web. Nuestro equipo se encargará de todo, desde la planificación hasta el lanzamiento y más allá.",
          },
          {
            pregunta:
              "¿Cómo puede un sitio web de WebGo mejorar mi tasa de conversión?",
            respuesta:
              "WebGo crea sitios web con un enfoque en la conversión. Utilizamos diseños atractivos, contenido persuasivo y técnicas de optimización para asegurarnos de que tus visitantes se conviertan en clientes. Nuestros sitios web están diseñados para guiar a los visitantes a través del proceso de compra de manera efectiva.",
          },
          {
            pregunta:
              "¿Los sitios web creados por WebGo están optimizados para SEO?",
            respuesta:
              "Sí, todos los sitios web creados por WebGo están optimizados para SEO. Esto significa que tu sitio web estará diseñado para ser encontrado por los motores de búsqueda, lo que aumentará su visibilidad y atraerá a más visitantes.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
