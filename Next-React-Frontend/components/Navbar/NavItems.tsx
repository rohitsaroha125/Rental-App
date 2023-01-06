import React, { Fragment, memo } from "react";
import tw from "tailwind-styled-components";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import Link from "next/link";

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
  flex
  flex-col
  items-center
  justify-center
  `;

const NavItems: React.FC<{ auth: boolean }> = (props) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  if (props.auth) {
    return (
      <ul className="flex list-none">
        <NavItem>
          {router.pathname === "/login" ? (
            <div className="flex">
              New to YourCar?{" "}
              <Link href="/register" className="text-red-500 ml-2 font-bold">
                Register Here
              </Link>
            </div>
          ) : (
            <div className="flex">
              Already have an account?{" "}
              <Link href="/login" className="text-red-500 ml-2 font-bold">
                Login Here
              </Link>
            </div>
          )}
        </NavItem>
      </ul>
    );
  }

  return (
    <ul className="flex list-none">
      <NavItem>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link href="/cars">Cars</Link>
      </NavItem>
      <NavItem>Services</NavItem>
      <NavItem>Contact Us</NavItem>
      <NavItem>
        <Button theme="Filled" label="Login" handleClick={handleClick} />
      </NavItem>
    </ul>
  );
};

export default memo(NavItems);
