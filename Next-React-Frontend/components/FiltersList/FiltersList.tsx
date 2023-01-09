import { useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import CheckboxInput from "../UI/CheckboxInput";
import SliderInput from "../UI/SliderInput";

const Container = tw.div`
  flex
  flex-col
`;

const FilterContainer = tw.div`
  flex
  flex-col
  mb-6
`;

const FilterHeading = tw.p`
  text-md
  font-medium
  mb-3
`;

const CheckboxOptions = tw.div`
  flex
  flex-col
`;

const BrandsList = ["Audi", "Honda", "Suzuki", "Toyota", "Hyundai"];
const FuelList = ["Diesel", "Petrol"];
const TransmissionList = ["Automatic", "Manual"];

const FiltersList: React.FC<{
  handleBrands: (data: string) => void;
  handleRemoveBrands: (data: string) => void;
}> = (props) => {
  const [priceRange, setPriceRange] = useState({ x: 10 });
  const [mileageRange, setMileageRange] = useState({ x: 10 });

  const handleBrandValue = (data: string) => {
    props.handleBrands(data);
  };

  const handleFuelValue = (data: string) => {
    props.handleBrands(data);
  };

  const handleTransmissionValue = (data: string) => {
    props.handleBrands(data);
  };

  const handleRemoveBrandValue = (data: string) => {
    props.handleRemoveBrands(data);
  };

  const handleRemoveFuelValue = (data: string) => {};

  const handleRemoveTransmissionValue = (data: string) => {};

  return (
    <Container>
      <FilterContainer>
        <FilterHeading>Price Range (in $)</FilterHeading>
        <SliderInput leftValue={10} rightValue={100} />
      </FilterContainer>
      <FilterContainer>
        <FilterHeading>Mileage (in k)</FilterHeading>
        <SliderInput leftValue={10} rightValue={100} />
      </FilterContainer>
      <FilterContainer>
        <FilterHeading>Brands</FilterHeading>
        <CheckboxOptions>
          {BrandsList.map((brand: string, i) => {
            return (
              <CheckboxInput
                handleCheckboxValue={handleBrandValue}
                handleRemoveCheckboxValue={handleRemoveBrandValue}
                label={brand}
                checkboxId={`brand_${i}`}
                key={i}
              />
            );
          })}
        </CheckboxOptions>
      </FilterContainer>
      <FilterContainer>
        <FilterHeading>Fuel Type</FilterHeading>
        <CheckboxOptions>
          {FuelList.map((fuel: string, i) => {
            return (
              <CheckboxInput
                handleCheckboxValue={handleFuelValue}
                handleRemoveCheckboxValue={handleRemoveFuelValue}
                label={fuel}
                checkboxId={`fuel_${i}`}
                key={i}
              />
            );
          })}
        </CheckboxOptions>
      </FilterContainer>
      <FilterContainer>
        <FilterHeading>Transmission Type</FilterHeading>
        <CheckboxOptions>
          {TransmissionList.map((transmission: string, i) => {
            return (
              <CheckboxInput
                handleCheckboxValue={handleTransmissionValue}
                handleRemoveCheckboxValue={handleRemoveTransmissionValue}
                label={transmission}
                checkboxId={`transmission_${i}`}
                key={i}
              />
            );
          })}
        </CheckboxOptions>
      </FilterContainer>
    </Container>
  );
};

export default FiltersList;
