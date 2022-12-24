import tw from "tailwind-styled-components";
import styled from "styled-components";
import Image from "next/image";
import CarLogo from "../../public/assets/images/car-logo-dark.png";

const Container = tw.div`
  grid
  grid-cols-5
  gap-6
  bg-gray-800
  px-12
  py-10
`;

const InfoContainer = tw.div`
  w-full
  col-span-2
`;

const LogoContainer = tw.div`
  flex
  items-center
`;

const LogoText = tw.p`
  text-2xl
  font-bold
  text-white
  ml-2
`;

const InfoDescription = tw.p`
  mt-4
  text-white
  text-sm
  leading-6
`;

const OurLinksContainer = tw.div`
  pl-12
  pr-2 
  col-span-1
`;

const OurLinksStyle = styled.h4`
  position: relative;
`;

const OurLinksHeading = tw(OurLinksStyle)`
  font-bold
  text-xl
  text-white
  mb-4
`;

const OurLinksList = tw.ul`
  list-none
`;

const OurLinksLi = tw.li`
  text-white
  py-2
  text-sm
  font-medium
`;

const Footer = () => {
  return (
    <Container>
      <InfoContainer>
        <LogoContainer>
          <Image src={CarLogo} alt="Car logo" />
          <LogoText>YourCar</LogoText>
        </LogoContainer>
        <InfoDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </InfoDescription>
      </InfoContainer>
      <OurLinksContainer>
        <OurLinksHeading className="our-link-heading">
          Our Links
        </OurLinksHeading>
        <OurLinksList>
          <OurLinksLi>Home</OurLinksLi>
          <OurLinksLi>About Us</OurLinksLi>
          <OurLinksLi>Services</OurLinksLi>
          <OurLinksLi>Models</OurLinksLi>
        </OurLinksList>
      </OurLinksContainer>
      <OurLinksContainer>
        <OurLinksHeading className="our-link-heading">
          Other Links
        </OurLinksHeading>
        <OurLinksList>
          <OurLinksLi>Contact Us</OurLinksLi>
          <OurLinksLi>FAQ</OurLinksLi>
          <OurLinksLi>Support</OurLinksLi>
          <OurLinksLi>Privacy Policy</OurLinksLi>
          <OurLinksLi>Terms & Conditions</OurLinksLi>
        </OurLinksList>
      </OurLinksContainer>
      <OurLinksContainer>
        <OurLinksHeading className="our-link-heading">Reach Us</OurLinksHeading>
        <OurLinksList>
          <OurLinksLi>
            <b>Location:</b> Lorem ipsum dolor sit amet{" "}
          </OurLinksLi>
          <OurLinksLi>
            <b>Phone Number:</b> 8377432872{" "}
          </OurLinksLi>
          <OurLinksLi>
            <b>Email:</b> newmail@gmail.com{" "}
          </OurLinksLi>
        </OurLinksList>
      </OurLinksContainer>
    </Container>
  );
};

export default Footer;
