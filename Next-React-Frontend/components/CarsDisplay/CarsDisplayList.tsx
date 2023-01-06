import tw from "tailwind-styled-components";
import styled from "styled-components";
import CarsCarouselCard from "../CarsList/CarsCarouselCard";
import { CarType } from "../../models/Car";
import useHttp from "../../hooks/use-http";
import { HttpRequest } from "../../models/HttpRequest";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const Container = tw.div`
    my-6
    flex
    grid
    grid-cols-3
    gap-8
`;

const CarsDisplayList = () => {
  const [carsData, setCarsData] = useState<CarType[]>([]);

  const options: HttpRequest = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const transformData = (data: any) => {
    if (data?.data.length > 0) {
      setCarsData(data?.data);
    }
  };

  const {
    loading,
    error,
    sendRequest: getCars,
  } = useHttp(options, transformData);

  useEffect(() => {
    getCars(`${process.env.NEXT_PUBLIC_DB_URL}cars`);
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {carsData.map((car: CarType) => {
        return <CarsCarouselCard car={car} key={car.id} carList={true} />;
      })}
    </Container>
  );
};

export default CarsDisplayList;
