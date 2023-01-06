import { useState } from "react";
import { HttpRequest } from "../models/HttpRequest";
import axios from "axios";
import toastr from "toastr";

const useHttp = (
  reqOptions: HttpRequest,
  transformData: (data: any) => void
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendRequest = async (url: string, body?: any) => {
    setLoading(true);
    setError(false);
    if (body) {
      reqOptions.data = body;
    }
    reqOptions.url = url;
    try {
      const { data } = await axios(reqOptions);
      transformData(data);
    } catch (err: any) {
      setError(true);
      toastr.error(err.message, "Error");
    }
    setLoading(false);
  };

  return { loading, error, sendRequest };
};

export default useHttp;
