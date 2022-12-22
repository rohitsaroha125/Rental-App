import styled from "styled-components";
import tw from "tailwind-styled-components";
import CheckboxInput from "../UI/CheckboxInput";

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
  return (
    <Container>
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
