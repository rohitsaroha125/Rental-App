import tw from "tailwind-styled-components";
import styled from "styled-components";
import Image from "next/image";
import Button from "../UI/Button";
import LandRover from "../../public/assets/images/landrover.png";

const Container = tw.div`
    bg-red-500
    py-16
    w-full
    flex
    justify-center
`;

const InnerContainer = tw.div`
    w-3/5
    grid
    grid-cols-2
`;

const LeftContainer = tw.div`

`;

const RightContainer = tw.div`
    relative
`;

const ImageContainer = styled.div`
  position: absolute;
  right: -300px;
  top: -150px;

  img {
    height: 400px;
    width: auto;
    object-fit: contain;
  }
`;

const SubHeading = tw.p`
    text-white
`;

const Heading = tw.h2`
    text-3xl
    text-white
    font-bold
`;

const SubscribeInput = tw.div`
  mt-10
  bg-white
  p-1
  rounded
  flex
  justify-between
`;

const Input = tw.input`
  px-3
  w-3/5
`;

const Subscribe = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <SubHeading>Newsletter</SubHeading>
          <Heading>Subscribe To Our Newsletter For New Updates</Heading>
          <SubscribeInput>
            <Input placeholder="Enter Email" />
            <Button theme="Filled" label="Subscribe" />
          </SubscribeInput>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <Image src={LandRover} alt="Land Rover Image" />
          </ImageContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Subscribe;
