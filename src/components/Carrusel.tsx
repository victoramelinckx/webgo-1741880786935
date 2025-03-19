"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { Element } from "react-scroll";

// Interface para los datos del carrusel
type CarouselDataType = {
  Image: string;
  tratamiento: string;
};

export const Carrusel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Datos estáticos con imágenes y nombres de tratamientos
  const data: CarouselDataType[] = [
    { Image: "/vacio.jpg", tratamiento: "Instalación de grifo" },
    { Image: "/vacio.jpg", tratamiento: "Instalación de inodoro" },
    { Image: "/vacio.jpg", tratamiento: "Limpieza de desagüe" },
    { Image: "/vacio.jpg", tratamiento: "Reemplazo de bola principal" },
    { Image: "/vacio.jpg", tratamiento: "Instalación de bomba de agua" },
    { Image: "/vacio.jpg", tratamiento: "Montaje de tubería subterránea" },
    { Image: "/vacio.jpg", tratamiento: "Reemplazo de bola principal" },
    { Image: "/vacio.jpg", tratamiento: "Instalación de bomba de agua" },
    { Image: "/vacio.jpg", tratamiento: "Montaje de tubería subterránea" },
  ];

  return (
    <Element
      name="antes/despues"
      className="w-full overflow-hidden bg-white pb-2"
    >
      <section className="flex flex-col pt-4 pb-10 justify-center items-center">
        <div className="w-full mx-auto px-4">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "start",
              slidesToScroll: 1,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 min-w-[550px] max-w-[550px] h-auto"
                >
                  <div className="relative w-full h-[480px]">
                    <img
                      src={item.Image}
                      alt={`Antes ${item.tratamiento}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </Element>
  );
};
