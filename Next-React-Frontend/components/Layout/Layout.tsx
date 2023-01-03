import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { Fragment } from "react";
import { useRouter } from "next/router";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar
        auth={router.pathname === "/login" || router.pathname === "/register"}
      />
      {props.children}
      {router.pathname !== ("/login" || "/register") && <Footer />}
    </Fragment>
  );
};

export default Layout;
