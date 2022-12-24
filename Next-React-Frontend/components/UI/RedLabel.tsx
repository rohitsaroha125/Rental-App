import tw from "tailwind-styled-components";

const Label = tw.h6`
    ${({ center }: any) => (center ? "text-center" : "text-left")}
    text-red-500
    text-md
    font-medium
` as any;

const RedLabel: React.FC<{ children: React.ReactNode; center?: boolean }> = (
  props
) => {
  return <Label center={props.center}>{props.children}</Label>;
};

export default RedLabel;
