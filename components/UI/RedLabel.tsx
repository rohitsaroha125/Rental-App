import tw from "tailwind-styled-components";

const Label = tw.h6`
    text-red-500
    text-md
    font-medium
`;

const RedLabel: React.FC<{ children: React.ReactNode }> = (props) => {
  return <Label>{props.children}</Label>;
};

export default RedLabel;
