import tw from "tailwind-styled-components";
import { TestimonialType } from "../../models/Testimonial";

const Container = tw.div`
  bg-white
  mx-2
  mb-10
  p-3
  rounded-lg
`;

const TestimonialUser = tw.h2`
  text-black
  font-bold
  text-lg
  text-center
  mt-3
`;

const TestimonialUserType = tw.p`
  text-red-500
  capitalize
  text-sm
  font-bold
  text-center
`;

const TestimonialCard: React.FC<{ testimonial: TestimonialType }> = (props) => {
  return (
    <Container>
      <p>{props.testimonial.testimonial}</p>
      <TestimonialUser>{props.testimonial.user}</TestimonialUser>
      <TestimonialUserType>{props.testimonial.userType}</TestimonialUserType>
    </Container>
  );
};

export default TestimonialCard;
