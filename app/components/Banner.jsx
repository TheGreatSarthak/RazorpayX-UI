import { FaExternalLinkAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col fixed z-30 w-full justify-center">
      <div className="w-full bg-[#D4AC0F] h-[6px]"></div>
      <div className="bg-[#D4AC0F] rounded-b-md text-xs text-[#100c2c] pt-1 pb-2 px-8 m-auto flex items-center tracking-wide font-light max-sm:text-[8px]">
        GO BACK TO ONBOARDING
        <div className="pl-3">
          <FaExternalLinkAlt size={10} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
