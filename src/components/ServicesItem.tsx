import { FaCartArrowDown } from "react-icons/fa";

interface ServiceItemProps {
  name: string;
  icon: string;
  description: string;
}

export const ServicesItem = ({ name, icon, description }: ServiceItemProps) => {
  return (
    <li
      key={name}
      className="flex flex-col justify-center items-center  bg-white rounded-2xl w-[270px] h-[236px]"
    >
      <div className="flex justify-center items-center w-[100px] h-[100px] bg-blue-500/20 rounded-full">
        <FaCartArrowDown className=" w-10 h-auto text-blue-500" />
      </div>
      <div className="flex flex-col gap-4 text-black mt-4">
        <p className=" text-4xl font-semibold">{name}</p>
      </div>
    </li>
  );
};
