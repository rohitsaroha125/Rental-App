import tw from "tailwind-styled-components";
import styled from "styled-components";
import RegisterCard from "../components/RegisterCard/RegisterCard";

const ContainerBg = styled.div`
  background: #f7f8fa;
`;

const Container = tw(ContainerBg)`
    w-full
    h-full
    pt-32
    pb-20
    flex
    items-center
    justify-center
`;

const Register = () => {
  return (
    <Container>
      <RegisterCard />
    </Container>
  );
};

export default Register;
