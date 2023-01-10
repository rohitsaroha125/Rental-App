import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import CheckboxInput from "../UI/CheckboxInput";
import SliderInput from "../UI/SliderInput";
import useHttp from "../../hooks/use-http";
import { HttpRequest } from "../../models/HttpRequest";

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
const TransmissionList = ["Auto", "Manual"];

const FiltersList: React.FC<{
  handleBrands: (data: string) => void;
  handleRemoveBrands: (data: string) => void;
  handleFuels: (data: string) => void;
  handleRemoveFuels: (data: string) => void;
  handleTransmission: (data: string) => void;
  handleRemoveTransmission: (data: string) => void;
  handlePriceRange: (data: [number, number]) => void;
  handleMileageRange: (data: [number, number]) => void;
}> = (props) => {
  const options: HttpRequest = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const transformData = (data: any) => {
    setPriceValues({
      left: data?.data[0].minPrice,
      right: data?.data[0].maxPrice,
    });
    const mileageLeft = parseInt(data?.data[0].minMileage.substr(0, 2));
    const mileageRight = parseInt(data?.data[0].maxMileage.substr(0, 2));
    setMileageValues({
      left: mileageLeft,
      right: mileageRight,
    });
  };

  const { sendRequest: getSliderValues } = useHttp(options, transformData);
  const [priceValues, setPriceValues] = useState<{
    left: number;
    right: number;
  } | null>(null);
  const [mileageValues, setMileageValues] = useState<{
    left: number;
    right: number;
  } | null>(null);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_DB_URL}cars/getStats`;
    getSliderValues(url);
  }, []);

  const handleBrandValue = (data: string) => {
    props.handleBrands(data);
  };

  const handleFuelValue = (data: string) => {
    props.handleFuels(data);
  };

  const handleTransmissionValue = (data: string) => {
    props.handleTransmission(data);
  };

  const handleRemoveBrandValue = (data: string) => {
    props.handleRemoveBrands(data);
  };

  const handleRemoveFuelValue = (data: string) => {
    props.handleRemoveFuels(data);
  };

  const handleRemoveTransmissionValue = (data: string) => {
    props.handleRemoveTransmission(data);
  };

  const handlePriceRange = (data: [number, number]) => {
    props.handlePriceRange(data);
  };

  const handleMileageRange = (data: [number, number]) => {
    props.handleMileageRange(data);
  };

  return (
    <Container>
      {priceValues && (
        <FilterContainer>
          <FilterHeading>Price Range (in $)</FilterHeading>
          <SliderInput
            leftValue={priceValues.left}
            rightValue={priceValues.right}
            handleRange={handlePriceRange}
          />
        </FilterContainer>
      )}
      {mileageValues && (
        <FilterContainer>
          <FilterHeading>Mileage (in k)</FilterHeading>
          <SliderInput
            leftValue={mileageValues.left}
            rightValue={mileageValues.right}
            handleRange={handleMileageRange}
          />
        </FilterContainer>
      )}
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
