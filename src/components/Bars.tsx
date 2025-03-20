import { CgMenuRight } from "react-icons/cg";

const Bars = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className="flex flex-col py-3 px-4 rounded-[10px]    gap-[5px] ">
      <CgMenuRight
        className={` w-6 h-full ${scrolled ? "text-white" : "text-black"}`}
      />
    </div>
  );
};

export default Bars;
