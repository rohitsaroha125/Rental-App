import tw from "tailwind-styled-components";

const TitleLabel = tw.h1`
  ${({ center }: any) => (center ? "text-center" : "text-left")}
    text-4xl
    font-bold
` as any;

const SectionTitle: React.FC<{
  children: React.ReactNode;
  center?: boolean;
}> = (props) => {
  return <TitleLabel center={props.center}>{props.children}</TitleLabel>;
};

export default SectionTitle;
