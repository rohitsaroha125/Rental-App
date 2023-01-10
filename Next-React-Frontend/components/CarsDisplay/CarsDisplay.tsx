import tw from "tailwind-styled-components";
import styled from "styled-components";
import Cars from "../../pages/cars";
import FiltersList from "../FiltersList/FiltersList";
import CarsDisplayList from "./CarsDisplayList";
import { useEffect, useState } from "react";
import useFilterCheckbox from "../../hooks/use-filter-checkbox";

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
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [mileageRange, setMileageRange] = useState<[number, number] | null>(
    null
  );
  const {
    selectedOptions: selectedBrands,
    handleAddOption: handleBrands,
    handleRemoveOption: handleRemoveBrands,
  } = useFilterCheckbox();

  const {
    selectedOptions: selectedFuels,
    handleAddOption: handleFuels,
    handleRemoveOption: handleRemoveFuels,
  } = useFilterCheckbox();

  const {
    selectedOptions: selectedTransmission,
    handleAddOption: handleTransmission,
    handleRemoveOption: handleRemoveTransmission,
  } = useFilterCheckbox();

  const handleTotalCars = (data: number) => {
    setTotalCars(data);
  };

  const handlePriceRange = (data: [number, number]) => {
    setPriceRange(data);
  };

  const handleMileageRange = (data: [number, number]) => {
    setMileageRange(data);
  };

  return (
    <Container>
      <FilterContainer>
        <FilterHeading>Apply Filters</FilterHeading>
        <FiltersList
          handleBrands={handleBrands}
          handleRemoveBrands={handleRemoveBrands}
          handleFuels={handleFuels}
          handleRemoveFuels={handleRemoveFuels}
          handleTransmission={handleTransmission}
          handleRemoveTransmission={handleRemoveTransmission}
          handlePriceRange={handlePriceRange}
          handleMileageRange={handleMileageRange}
        />
      </FilterContainer>
      <CarsContainer>
        <CarsContainerHeading>
          {totalCars} Cars available for rent in Delhi-NCR
        </CarsContainerHeading>
        <CarsDisplayList
          selectedBrands={selectedBrands}
          selectedFuels={selectedFuels}
          selectedTransmission={selectedTransmission}
          selectedPriceRange={priceRange}
          selectedMileageRange={mileageRange}
          handleTotalCars={handleTotalCars}
        />
      </CarsContainer>
    </Container>
  );
};

export default CarsDisplay;
