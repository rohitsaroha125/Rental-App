import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    mb-1
`;

const InputLabel = tw.label`
    ml-2
`;

const CheckboxInput: React.FC<{
  label: string;
  checkboxId: string;
  handleCheckboxValue: (data: string) => void;
  handleRemoveCheckboxValue: (data: string) => void;
}> = (props) => {
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      props.handleCheckboxValue(e.target.value);
    } else {
      props.handleRemoveCheckboxValue(e.target.value);
    }
  };

  return (
    <Container>
      <input
        type="checkbox"
        id={props.checkboxId}
        value={props.label}
        onChange={handleValue}
      />
      <InputLabel htmlFor={props.checkboxId}>{props.label}</InputLabel>
    </Container>
  );
};

export default CheckboxInput;
