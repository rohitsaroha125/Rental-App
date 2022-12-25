import CarLogoImg from "../../public/assets/images/car-logo.png";
import Image from "next/image";
import { memo } from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="h-full">
        <Image src={CarLogoImg} alt="Car logo" />
      </div>
      <h4 className="text-xl md:text-2xl font-bold text-black m-1">YourCar.</h4>
    </div>
  );
};

export default memo(Logo);
