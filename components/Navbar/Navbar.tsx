import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-center lg:px-12 py-3 absolute justify-between z-50">
      <Logo />
      <NavItems />
    </div>
  );
};

export default Navbar;
