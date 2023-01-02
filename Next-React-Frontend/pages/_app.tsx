import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store";
import "toastr/build/toastr.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Navbar
        auth={router.pathname === "/login" || router.pathname === "/register"}
      />
      <Component {...pageProps} />
      {router.pathname !== ("/login" || "/register") && <Footer />}
    </Provider>
  );
}
