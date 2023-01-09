import tw from "tailwind-styled-components";
import styled from "styled-components";
import Cars from "../../pages/cars";
import FiltersList from "../FiltersList/FiltersList";
import CarsDisplayList from "./CarsDisplayList";
import { useEffect, useState } from "react";

const Container = tw.div`
  px-6
  py-12
  grid
  grid-cols-8
  gap-4
`;

const FilterContainer = tw.div`
  flex
  flex-col
  col-span-2
  py-0
  px-4
  rounded-md
`;

const FilterHeading = tw.h6`
  text-lg
  font-medium
  mb-6
`;

const CarsContainer = tw.div`
  flex
  flex-col
  col-span-6
  bg-gray-100
  py-8
  px-8
`;

const CarsContainerHeading = tw.h6`
  text-2xl
  font-medium
`;

const CarsDisplay = () => {
  const [totalCars, setTotalCars] = useState<number>(0);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleTotalCars = (data: number) => {
    setTotalCars(data);
  };

  const handleBrands = (data: string) => {
    setSelectedBrands((prevState: string[]) => {
      return [...prevState, data.toLowerCase()];
    });
  };

  const handleRemoveBrands = (data: string) => {
    setSelectedBrands((prevState: string[]) => {
      const filteredBrands = prevState.filter((brand: string) => {
        return brand !== data.toLowerCase();
      });
      prevState = filteredBrands;
      return prevState;
    });
  };

  return (
    <Container>
      <FilterContainer>
        <FilterHeading>Apply Filters</FilterHeading>
        <FiltersList
          handleBrands={handleBrands}
          handleRemoveBrands={handleRemoveBrands}
        />
      </FilterContainer>
      <CarsContainer>
        <CarsContainerHeading>
          {totalCars} Cars available for rent in Delhi-NCR
        </CarsContainerHeading>
        <CarsDisplayList
          selectedBrands={selectedBrands}
          handleTotalCars={handleTotalCars}
        />
      </CarsContainer>
    </Container>
  );
};

export default CarsDisplay;
