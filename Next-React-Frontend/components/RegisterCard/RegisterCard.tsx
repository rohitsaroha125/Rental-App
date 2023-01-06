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

const RegisterCard = () => {
  const options: HttpRequest = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const transformData = (data: any) => {
    console.log("data from server is ", data);
    toastr.success("Registration Successful", "Success");
  };

  const {
    loading,
    error,
    sendRequest: signupUser,
  } = useHttp(options, transformData);

  const formik = useFormik({
    initialValues: {
      name: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
      passwordConfirm: Yup.string()
        .required("Confirm Password is Required")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
    }),
    onSubmit: (values) => {
      const fullName = values.firstName + " " + values.lastName;
      values.name = fullName;
      signupUser(`${process.env.NEXT_PUBLIC_DB_URL}users/signup`, values);
    },
  });

  return (
    <Container>
      {loading && <Loader />}
      <Heading>Create Account</Heading>
      <form onSubmit={formik.handleSubmit}>
        <Input
          input={{
            id: "firstName",
            name: "firstName",
            placeholder: "First Name*",
            type: "text",
          }}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleValue={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <ErrorLabel>{formik.errors.firstName}</ErrorLabel>
        ) : null}
        <Input
          input={{
            id: "lastName",
            name: "lastName",
            placeholder: "Last Name*",
            type: "text",
          }}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleValue={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <ErrorLabel>{formik.errors.lastName}</ErrorLabel>
        ) : null}
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
        {formik.touched.password && formik.errors.password ? (
          <ErrorLabel>{formik.errors.password}</ErrorLabel>
        ) : null}
        <Input
          input={{
            id: "passwordConfirm",
            name: "passwordConfirm",
            placeholder: "Confirm Password*",
            type: "password",
          }}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          handleValue={formik.values.passwordConfirm}
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
          <ErrorLabel>{formik.errors.passwordConfirm}</ErrorLabel>
        ) : null}
        <Button theme="Filled" label="Create Account" wtFull={true} />
        <Separator>OR</Separator>
        <Button label="Login" wtFull={true} />
      </form>
    </Container>
  );
};

export default RegisterCard;
