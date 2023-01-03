import tw from "tailwind-styled-components";
import styled from "styled-components";
import { InputType } from "../../models/Input";

const InputStyle = styled.input`
  padding: 10px 7.5px;
  border: 1px solid #807879;
  color: #645a5b;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 4px;
`;

const Input: React.FC<{
  input: InputType;
  handleChange: any;
  handleBlur?: any;
  handleValue?: any;
}> = (props) => {
  return (
    <InputStyle
      id={props.input.id}
      name={props.input.name}
      placeholder={props.input.placeholder}
      type={props.input.type}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      value={props.handleValue}
    />
  );
};

export default Input;
