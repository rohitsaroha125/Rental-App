import tw from "tailwind-styled-components";
import styled from "styled-components";
import Image from "next/image";
import JeepImg from "../../public/assets/images/jeep.png";
import RedLabel from "../UI/RedLabel";
import SectionTitle from "../UI/SectionTitle";

const Container = tw.div`
    bg-gray-100
    py-14
    grid
    grid-cols-2
    gap-4
    w-full
    mt-20
`;

const LeftContainer = tw.div`
    h-full
    w-full
`;

const ImageContainer = styled.div`
  margin-left: -45px;
`;

const RightContainer = tw.div`
    h-full
    w-full
    flex
    flex-col
    justify-center
    pr-40
`;

const ParaText = tw.p`
    text-md
`;

const TopPara = tw(ParaText)`
    mt-6
    mb-4
`;

const AboutUs = () => {
  return (
    <Container>
      <LeftContainer>
        <ImageContainer>
          <Image src={JeepImg} alt="Jeep Image" />
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <RedLabel>About Us</RedLabel>
        <SectionTitle>
          Feel The Best Experience With Our Rental Deals
        </SectionTitle>
        <TopPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TopPara>
        <ParaText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ParaText>
      </RightContainer>
    </Container>
  );
};

export default AboutUs;
