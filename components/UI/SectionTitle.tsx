import tw from "tailwind-styled-components";

const TitleLabel = tw.h1`
    text-4xl
    font-bold
`;

const SectionTitle: React.FC<{ children: React.ReactNode }> = (props) => {
  return <TitleLabel>{props.children}</TitleLabel>;
};

export default SectionTitle;
