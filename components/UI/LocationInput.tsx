import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";

const LocationContainer = tw.div`
  w-full
  flex
  relative
  cursor-pointer
  justify-between
  items-center
`;

const LocationInnerContainer = tw.div`
  flex
  items-center
  w-full
`;

const LocationIcon = styled.span`
  color: red;
  height: 25px;
  width: 25px;

  svg {
    height: 25px;
  }
`;

const ArrowIcon = styled.span`
  color: #dcdcdc;
  margin-right: 20px;

  svg {
    height: 15px;
  }
`;

const LocationPlaceHolder = tw.p`
  text-gray-400
  text-sm
  ml-3
  mt-1
`;

const options = [
  { value: "delhi", label: "Delhi" },
  { value: "gurugram", label: "Gurugram" },
  { value: "haryana", label: "Haryana" },
];

const customStyles = {
  indicatorSeparator: () => ({
    // none of react-select's styles are passed to <Control />
    isDisabled: true,
  }),
  placeholder: () => ({
    fontSize: "0.875rem",
    color: "rgb(156,163,175)",
  }),
  input: () => ({
    height: "0px",
  }),
  control: () => ({
    border: "0px",
    display: "flex",
    alignItems: "center",
  }),
  singleValue: () => ({}),
  valueContainer: () => ({}),
};

const LocationInput: React.FC<{ placeholder: string; line: boolean }> = (
  props
) => {
  return (
    <LocationContainer
      style={props.line ? { borderRight: "1px solid #dcdcdc" } : {}}
    >
      <LocationInnerContainer>
        <LocationIcon>
          <FontAwesomeIcon icon={faLocationPin} />
        </LocationIcon>
        <Select
          className="w-full"
          options={options}
          placeholder={props.placeholder}
          styles={customStyles}
        />
        {/* <LocationPlaceHolder>{props.placeholder}</LocationPlaceHolder> */}
      </LocationInnerContainer>
    </LocationContainer>
  );
};

export default LocationInput;
