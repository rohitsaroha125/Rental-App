import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Fragment } from "react";
import { useRouter } from "next/router";
import "toastr/build/toastr.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar
        auth={router.pathname === "/login" || router.pathname === "/register"}
      />
      <Component {...pageProps} />
      {router.pathname !== ("/login" || "/register") && <Footer />}
    </Fragment>
  );
}
