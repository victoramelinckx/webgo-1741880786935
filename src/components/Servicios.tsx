"use client";

import { useState, useEffect } from "react";
import { ServicesItem } from "./ServicesItem";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import { Button } from "./Button";

interface Service {
  name: string;
  icon: string;
  description: string;
}

interface ServicesProps {
  heading: string;
  description: string;
  services: Service[];
}

export const Servicios: React.FC<ServicesProps> = ({
  heading,
  description,
  services = [],
}) => {
  const [showMoreDental, setShowMoreDental] = useState(false);
  const [initialItemsToShow, setInitialItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setInitialItemsToShow(6);
      } else {
        setInitialItemsToShow(6);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Element name="servicios" className="w-full">
      <section className="bg-black w-full flex flex-col justify-center items-center py-8 md:py-20">
        <div className="flex flex-col gap-6 items-center p-8 rounded-lg w-full max-w-7xl">
          <div className="flex flex-col items-center lg:mb-6 text-white">
            <h3 className="max-md:text-[36px] max-md:font-semibold max-md:mt-1 leading-tight max-w-xl text-center">
              {"We are more than just a moving company"}
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 max-lg:gap-y-6 gap-y-14 mt-6">
            {services
              .slice(0, showMoreDental ? services.length : initialItemsToShow)
              .map((service) => (
                <ServicesItem
                  key={service.name}
                  name={service.name}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
          </ul>
        </div>
      </section>
    </Element>
  );
};
