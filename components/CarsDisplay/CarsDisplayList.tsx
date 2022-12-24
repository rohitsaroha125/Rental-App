import tw from "tailwind-styled-components";
import styled from "styled-components";
import CarsCarouselCard from "../CarsList/CarsCarouselCard";
import { CarType } from "../../models/Car";

const carsData: CarType[] = [
  {
    id: 1,
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  },
  {
    id: 2,
    name: "HONDA City 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  },
  {
    id: 3,
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  },
  {
    id: 4,
    name: "HONDA City 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  },
];

const Container = tw.div`
    my-6
    flex
    grid
    grid-cols-3
    gap-8
`;

const CarsDisplayList = () => {
  return (
    <Container>
      {carsData.map((car: CarType) => {
        return <CarsCarouselCard car={car} key={car.id} carList={true} />;
      })}
    </Container>
  );
};

export default CarsDisplayList;
