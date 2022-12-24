import tw from "tailwind-styled-components";
import styled from "styled-components";
import Image from "next/image";
import BlobImg from "../../public/assets/images/blob.svg";
import CarImg from "../../public/assets/images/mclaren-orange-big.png";
import Button from "../UI/Button";

const TopContainerSize = styled.div`
  min-height: 80vh;
`;

const TopConatiner = tw(TopContainerSize)`
  w-full
  h-full
  flex
  justify-between
  px-12
  `;

const LeftContainer = tw.div`
    w-1/2
    flex
    flex-col
    justify-center
  `;

const RightContainer = tw.div`
    w-1/2
    flex
    flex-col
    relative
    mt-20
    justify-center
    items-center
  `;

const Slogan = tw.h1`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    sm:font-bold
    text-black
    mb-4
  `;

const Description = tw.p`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    oevrflow-hidden
    max-h-12
    text-gray-800
  `;

const BlobContainer = styled.div`
  width: 60vw;
  height: 10em;
  position: absolute;
  right: -9em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 20em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
`;

const ButtonContainer = tw.div`
  flex
  mt-4
  gap-2
`;

const TopSection = () => {
  return (
    <TopConatiner>
      <LeftContainer>
        <Slogan>Rent The Best Quality Cars With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
        <ButtonContainer>
          <Button label="Book Your Ride" />
          <Button theme="Filled" label="Sell Your Car" />
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <Image alt="blob" src={BlobImg} />
        </BlobContainer>
        <StandaloneCar>
          <Image alt="Car Image" src={CarImg} />
        </StandaloneCar>
      </RightContainer>
    </TopConatiner>
  );
};

export default TopSection;
