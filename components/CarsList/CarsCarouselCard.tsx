import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarType } from "../../models/Car";
import Image from "next/image";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import {
  faTachometerAlt,
  faEllipsisH,
  faFillDrip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UI/Button";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Container = tw.div`
    mt-10
    mb-10
`;

const CarouselItemShadow = styled.div`
  box-shadow: 0px 3px 10px 0px rgba(220, 220, 220, 1);
`;

const CarouselItem = tw(CarouselItemShadow)`  
    ${({ carList }: any) => (carList ? "mb-2" : "mx-4 mb-8")}
    bg-white
    rounded-md
    px-3
    pt-3
    pb-6
` as any;

const CarouselImageStyle = styled.div`
  img {
    object-fit: contain;
    border-radius: 4px;
    height: 160px;
    background: #fff;
  }
`;

const CarouselImage = tw(CarouselImageStyle)`
    bg-gray-200
    rounded-md
`;

const CarouselTitle = tw.h2`
    text-lg
    font-bold
    mt-2
`;

const PriceContainer = tw.div`
  flex
  mt-3
`;

const PriceTag = tw.div`
  flex
  items-end
`;

const PriceBig = tw.h6`
  text-xl
  font-medium
  leading-4
`;

const PriceLabel = tw.p`
  text-sm
  leading-4
  text-gray-600
`;

const PriceRed = tw(PriceBig)`
text-red-500
`;

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background: #959595;
  margin-top: 25px;
`;

const CarDetailContainer = tw.div`
  flex
  justify-between
  mt-4
`;

const DetailIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 15px;
    margin-right: 5px;
    color: #959595;
  }
`;

const DetailContentStyle = styled.p`
  color: #959595;
  font-size: 14px;
`;

const BtnContainer = tw.div`
  mt-5
`;

const CarsCarouselCard: React.FC<{ car: CarType; carList?: boolean }> = (
  props
) => {
  return (
    <CarouselItem carList={props.carList} key={props.car.id}>
      <CarouselImage>
        <Image
          src={props.car.thumbnailSrc}
          alt="Car for Rent"
          width={500}
          height={500}
        />
      </CarouselImage>
      <CarouselTitle>{props.car.name}</CarouselTitle>
      <PriceContainer>
        <PriceTag>
          <PriceRed>${props.car.dailyPrice}</PriceRed>
          <PriceLabel>/day&nbsp; | &nbsp;</PriceLabel>
        </PriceTag>
        <PriceTag>
          <PriceBig>${props.car.monthlyPrice}</PriceBig>
          <PriceLabel>/month</PriceLabel>
        </PriceTag>
      </PriceContainer>
      <Separator />
      <CarDetailContainer>
        <DetailIcon>
          <FontAwesomeIcon icon={faTachometerAlt} />
          <DetailContentStyle>{props.car.mileage}</DetailContentStyle>
        </DetailIcon>
        <DetailIcon>
          <FontAwesomeIcon icon={faEllipsisH} />
          <DetailContentStyle>{props.car.gearType}</DetailContentStyle>
        </DetailIcon>
        <DetailIcon>
          <FontAwesomeIcon icon={faFillDrip} />
          <DetailContentStyle>{props.car.gas}</DetailContentStyle>
        </DetailIcon>
      </CarDetailContainer>
      <BtnContainer>
        <Button label="Rent Now" theme="Filled" wtFull={true}></Button>
      </BtnContainer>
    </CarouselItem>
  );
};

export default CarsCarouselCard;
