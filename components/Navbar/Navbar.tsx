import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  const [detectTop, setDetectTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);

    return () => window.removeEventListener("scroll", detectScroll);
  }, []);

  const detectScroll = () => {
    if (window.scrollY === 0) {
      setDetectTop(true);
    } else {
      setDetectTop(false);
    }
  };

  return (
    <div
      id="navBar"
      className={`w-full flex flex-row items-center lg:px-12 py-3 justify-between z-50 fixed ${
        detectTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <Logo />
      <NavItems />
    </div>
  );
};

export default Navbar;
