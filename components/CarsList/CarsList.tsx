import tw from "tailwind-styled-components";
import styled from "styled-components";
import CarsTab from "./CarsTab";
import RedLabel from "../UI/RedLabel";
import SectionTitle from "../UI/SectionTitle";

const Container = tw.div`
    w-full
    flex
    items-center
    justify-center
    mt-10
`;

const InnerContainer = tw.div`
    w-3/5
    py-10
`;

const CarsDisplay = tw.div`
    mt-10
`;

const CarsList = () => {
  return (
    <Container>
      <InnerContainer>
        <RedLabel center={true}>Top Rated Dealer</RedLabel>
        <SectionTitle center={true}>Explore Our Top Deal</SectionTitle>
        <CarsTab />
      </InnerContainer>
    </Container>
  );
};

export default CarsList;
