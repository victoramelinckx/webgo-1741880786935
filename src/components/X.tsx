import { CgClose } from "react-icons/cg";

const X = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className="flex flex-col py-3 px-4 rounded-[10px]    gap-[5px] relative ">
      <CgClose
        className={` w-6 h-full ${scrolled ? "text-white" : "text-black"}`}
      />
    </div>
  );
};

export default X;
