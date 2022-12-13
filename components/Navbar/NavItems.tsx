import tw from "tailwind-styled-components";

const NavItem = tw.li`
  text-xs
  md:text-base
  text-gray-500
  font-medium
  mr-1
  md:mr-5
  cursor-pointer
  transition
  duration-300
  ease-in-out
  hover:text-black
  `;

const NavItems = () => {
  return (
    <ul className="flex list-none">
      <NavItem>Home</NavItem>
      <NavItem>Cars</NavItem>
      <NavItem>Services</NavItem>
      <NavItem>Contact Us</NavItem>
    </ul>
  );
};

export default NavItems;
