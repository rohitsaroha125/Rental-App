import tw from "tailwind-styled-components";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import useHttp from "../../hooks/use-http";
import { HttpRequest } from "../../models/HttpRequest";
import Loader from "../Loader/Loader";
import toastr from "toastr";

const ContainerStyle = styled.div`
  width: 35%;
`;

const Container = tw(ContainerStyle)`
    bg-white
    p-12
    w-2/5
`;

const Heading = tw.h4`
    text-3xl
    font-bold
    mb-6
`;

const Separator = styled.p`
  width: 100%;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    height: 1px;
    background: #807879;
    width: 45%;
    top: 12px;
    left: 0px;
  }

  &:after {
    position: absolute;
    content: "";
    height: 1px;
    background: #807879;
    width: 45%;
    top: 12px;
    right: 0px;
  }
`;

const HelpLabel = styled.p`
  color: #645a5b;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const ForgotLabel = tw.p`
  text-blue-500
  font-medium
  text-sm
  text-center
  mt-2
`;

const ErrorStyle = styled.p`
  margin-top: -7.5px;
`;

const ErrorLabel = tw(ErrorStyle)`
  text-sm
  text-red-500
  font-medium
  mb-3
`;

const LoginCard = () => {
  const options: HttpRequest = {
    url: `${process.env.NEXT_PUBLIC_DB_URL}users/login`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const transformData = (data: any) => {
    console.log("data from server is ", data);
    toastr.success("Login Successful", "Success");
  };

  const {
    loading,
    error,
    sendRequest: loginUser,
  } = useHttp(options, transformData);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  return (
    <Container>
      {loading && <Loader />}
      <Heading>Login</Heading>
      <form onSubmit={formik.handleSubmit}>
        <Input
          input={{
            id: "email",
            name: "email",
            placeholder: "Email Address*",
            type: "email",
          }}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleValue={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorLabel>{formik.errors.email}</ErrorLabel>
        ) : null}
        <Input
          input={{
            id: "password",
            name: "password",
            placeholder: "Password*",
            type: "password",
          }}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleValue={formik.values.password}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorLabel>{formik.errors.password}</ErrorLabel>
        ) : null}
        <Button theme="Filled" label="Login" wtFull={true} />
        <Separator>OR</Separator>
        <Button label="Create Account" wtFull={true} />
        <HelpLabel>Need Help?</HelpLabel>
        <Link href="/forgot-password">
          <ForgotLabel>Forgot Password?</ForgotLabel>
        </Link>
      </form>
    </Container>
  );
};

export default LoginCard;
