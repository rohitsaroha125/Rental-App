import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store";
import "toastr/build/toastr.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
