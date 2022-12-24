import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    flex-col
    justify-center
    w-full
`;

const IconContainer = tw.div`
    w-full
    flex
    justify-center
`;

const IconSize = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 4px;
  background: #ef444433;
  border: 4px solid white;

  svg {
    height: 35px;
    width: auto;
    color: #ef4444;
  }
`;

const Icon = tw(IconSize)`
    text-center
    flex
    items-center
    justify-center
    shadow-md
    rounded-md
`;

const Title = tw.h2`
    mt-4
    text-xl
    font-bold
    text-center
`;

const Description = tw.p`
    text-md
    text-center
`;

const BookingStep: React.FC<{
  icon: any;
  title: string;
  description: string;
}> = (props) => {
  return (
    <Container>
      <IconContainer>
        <Icon>
          <FontAwesomeIcon icon={props.icon} />
        </Icon>
      </IconContainer>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
};

export default BookingStep;
