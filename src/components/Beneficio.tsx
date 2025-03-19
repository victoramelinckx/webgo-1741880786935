// components/How.tsx
"use client";

import Image from "next/image";
import { Element } from "react-scroll";
import { SiStarbucks } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCalculator } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { GiAlliedStar } from "react-icons/gi";

interface BeneficioProps {
  Titulo: string;
  beneficioTitulo1: string;
  beneficio1: string;
  beneficioTitulo2: string;
  beneficio2: string;
}

export const Beneficio = ({
  Titulo,
  beneficioTitulo1,
  beneficio1,
  beneficioTitulo2,
  beneficio2,
}: BeneficioProps) => {
  return (
    <Element
      name="funcionamiento"
      className="w-full flex flex-col justify-center bg-black py-28"
    >
      <div className="flex max-w-6xl w-full mb-20 mx-auto">
        {" "}
        <h3 className=" text-center font-semibold text-[56px] text-white leading-[120%] tracking-tighter">
          We passed <span className=" text-[#FFC670]">Google</span> and{" "}
          <span className=" text-[#FFC670]">Yelp</span> mover screening and
          qualification processes. Our customers are{" "}
          <span className="text-[#FFC670]">Google Guarantee</span> protected.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[40px] mx-auto max-w-6xl">
        {/* Item1 */}
        <div className="flex items-start space-x-4 max-w-lg">
          <div className="text-[#356dff] text-3xl">
            <GiAlliedStar className="w-10 h-auto text-[#356dff]" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Reviewed & Trusted
            </h3>
            <p className="mt-2 text-gray-400 font-medium">
              Whether you decide to proceed with a single job or use our
              discount.
            </p>
          </div>
        </div>
        {/* Item2 */}
        <div className="flex items-start space-x-4">
          <div className="text-[#356dff] text-3xl">
            <FaCalculator className="w-10 h-auto text-[#356dff]" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Safety Guaranteed
            </h3>
            <p className="mt-2 text-gray-400 font-medium">
              Whether you decide to proceed with a single job or use our
              discount.
            </p>
          </div>
        </div>
        {/* Item3 */}
        <div className="flex items-start space-x-4">
          <div className="text-[#356dff] text-3xl">
            <AiFillSafetyCertificate className="w-10 h-auto text-[#356dff]" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">Free Estimate</h3>
            <p className="mt-2 text-gray-400 font-medium">
              Whether you decide to proceed with a single job or use our
              discount.
            </p>
          </div>
        </div>
        {/* Item4 */}
        <div className="flex items-start space-x-4">
          <div className="text-[#356dff] text-3xl">
            <FaWallet className="w-10 h-auto text-[#356dff]" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              Money-back Guarantee
            </h3>
            <p className="mt-2 text-gray-400 font-medium">
              Whether you decide to proceed with a single job or use our
              discount.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};
