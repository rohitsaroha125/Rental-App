import CarLogoImg from "../../public/assets/images/car-logo.png";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="h-full">
          <Image src={CarLogoImg} alt="Car logo" />
        </div>
        <h4 className="text-xl md:text-2xl font-bold text-black m-1">
          YourCar.
        </h4>
      </div>
    </Link>
  );
};

export default memo(Logo);
