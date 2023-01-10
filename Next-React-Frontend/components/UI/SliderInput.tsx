import { TwoThumbInputRange } from "react-two-thumb-input-range";
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SliderStyles = {
  track: {
    width: "100%",
    backgroundColor: "#eaeaea",
    height: 5,
  },
  active: {
    backgroundColor: "blue",
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
  },
  disabled: {
    opacity: 0.5,
  },
};

const ContainerStyle = styled.div`
  > div {
    width: 100%;
  }
`;

const Container = tw(ContainerStyle)`
    mt-8
`;

const inputStyle: React.CSSProperties = {
  width: "100%",
};

const Labels = tw.div`
    flex
    justify-between
    mb-2
`;

const LabelString = tw.p`
    text-sm
    font-medium
`;

const SliderInput: React.FC<{
  leftValue: number;
  rightValue: number;
  handleRange: (data: [number, number]) => void;
}> = (props) => {
  const [value, setValue] = useState<[number, number]>([
    props.leftValue,
    props.rightValue,
  ]);

  const onValueChange = (values: [number, number]) => {
    setValue(values);
    props.handleRange(values);
  };

  return (
    <Container>
      <TwoThumbInputRange
        onChange={onValueChange}
        values={value}
        min={props.leftValue}
        max={props.rightValue}
        inputStyle={inputStyle}
      />
    </Container>
  );
};

export default SliderInput;
