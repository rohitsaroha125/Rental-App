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

const BrandsList = ["Audi", "Honda", "Nissan", "Toyota", "Mazda"];
const FuelList = ["Diesel", "Petrol", "CNG"];
const TransmissionList = ["Automatic", "Manual"];

const FiltersList = () => {
  const [priceRange, setPriceRange] = useState({ x: 10 });
  const [mileageRange, setMileageRange] = useState({ x: 10 });

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
              <CheckboxInput label={brand} checkboxId={`brand_${i}`} key={i} />
            );
          })}
        </CheckboxOptions>
      </FilterContainer>
      <FilterContainer>
        <FilterHeading>Fuel Type</FilterHeading>
        <CheckboxOptions>
          {FuelList.map((fuel: string, i) => {
            return (
              <CheckboxInput label={fuel} checkboxId={`fuel_${i}`} key={i} />
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
