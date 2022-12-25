import tw from "tailwind-styled-components";
import styled from "styled-components";
import LoginCard from "../components/LoginCard/LoginCard";

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

const Login = () => {
  return (
    <Container>
      <LoginCard />
    </Container>
  );
};

export default Login;
