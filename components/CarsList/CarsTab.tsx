import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { CarType } from "../../models/Car";
import MultiCarousel from "../UI/MultiCarousel";
import CarsCarouselCard from "./CarsCarouselCard";

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

const CustomTabs = styled.div`
  margin-top: 30px;

  .react-tabs__tab-list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: 0px;
  }

  .react-tabs__tab {
    box-shadow: 0px 3px 10px 0px rgba(220, 220, 220, 1);
    border: 0px;
    min-width: 80px;
    text-align: center;
    border-radius: 4px;
    padding: 7px 12px;
    font-weight: 600;
  }

  .react-tabs__tab--selected {
    background: #ef4444;
    color: white;
  }
`;

const CarsTab = () => {
  return (
    <CustomTabs>
      <Tabs focusTabOnClick={false}>
        <TabList>
          <Tab>Audi</Tab>
          <Tab>Nissan</Tab>
          <Tab>Mazda</Tab>
          <Tab>Toyota</Tab>
          <Tab>Honda</Tab>
        </TabList>

        <TabPanel>
          <MultiCarousel>
            {carsData.map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData.map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData.map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData.map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData.map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
      </Tabs>
    </CustomTabs>
  );
};

export default CarsTab;
