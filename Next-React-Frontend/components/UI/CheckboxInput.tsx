import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    mb-1
`;

const InputLabel = tw.label`
    ml-2
`;

const CheckboxInput: React.FC<{ label: string; checkboxId: string }> = (
  props
) => {
  return (
    <Container>
      <input type="checkbox" id={props.checkboxId} />
      <InputLabel htmlFor={props.checkboxId}>{props.label}</InputLabel>
    </Container>
  );
};

export default CheckboxInput;
