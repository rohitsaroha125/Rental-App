import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { CarType, CarsCarouselType } from "../../models/Car";
import MultiCarousel from "../UI/MultiCarousel";
import CarsCarouselCard from "./CarsCarouselCard";
import useHttp from "../../hooks/use-http";
import { HttpRequest } from "../../models/HttpRequest";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

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
  const options: HttpRequest = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const transformData = (data: any) => {
    setCarsData((prevState: CarsCarouselType) => {
      return { ...prevState, [brand]: data?.data };
    });
  };

  const {
    loading,
    error,
    sendRequest: getCarsByBrand,
  } = useHttp(options, transformData);

  const [brand, setBrand] = useState<string>("audi");
  const [carsData, setCarsData] = useState<{ [key: string]: any }>({
    audi: [],
    suzuki: [],
    toyota: [],
    honda: [],
    hyundai: [],
  });

  useEffect(() => {
    if (carsData[brand].length === 0) {
      getCarsByBrand(
        `${process.env.NEXT_PUBLIC_DB_URL}cars?limit=6&brand=${brand}`
      );
    }
  }, [carsData, brand]);

  const handleCarsFetch = (e: React.MouseEvent, brandName: string) => {
    setBrand(brandName);
  };

  return (
    <CustomTabs>
      {loading && <Loader />}
      <Tabs focusTabOnClick={false}>
        <TabList>
          <Tab onClick={(e) => handleCarsFetch(e, "audi")}>Audi</Tab>
          <Tab onClick={(e) => handleCarsFetch(e, "suzuki")}>Suzuki</Tab>
          <Tab onClick={(e) => handleCarsFetch(e, "hyundai")}>Hyundai</Tab>
          <Tab onClick={(e) => handleCarsFetch(e, "toyota")}>Toyota</Tab>
          <Tab onClick={(e) => handleCarsFetch(e, "honda")}>Honda</Tab>
        </TabList>

        <TabPanel>
          <MultiCarousel>
            {carsData[brand].map((car: CarType) => {
              return <CarsCarouselCard key={car?.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData[brand].map((car: CarType) => {
              return <CarsCarouselCard key={car?.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData[brand].map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData[brand].map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
        <TabPanel>
          <MultiCarousel>
            {carsData[brand].map((car: CarType) => {
              return <CarsCarouselCard key={car.id} car={car} />;
            })}
          </MultiCarousel>
        </TabPanel>
      </Tabs>
    </CustomTabs>
  );
};

export default CarsTab;
