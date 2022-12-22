import tw from "tailwind-styled-components";
import RedLabel from "../UI/RedLabel";
import SectionTitle from "../UI/SectionTitle";
import { TestimonialType } from "../../models/Testimonial";
import MultiCarousel from "../UI/MultiCarousel";
import TestimonialCard from "./TestimonialCard";

const TestimonialData: TestimonialType[] = [
  {
    id: 1,
    user: "Kevin Thomas",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    rating: 5,
    userType: "customer",
  },
  {
    id: 2,
    user: "Kevin Thomas",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    rating: 5,
    userType: "customer",
  },
  {
    id: 3,
    user: "Kevin Thomas",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    rating: 5,
    userType: "customer",
  },
  {
    id: 4,
    user: "Kevin Thomas",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    rating: 5,
    userType: "customer",
  },
  {
    id: 5,
    user: "Kevin Thomas",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    rating: 5,
    userType: "customer",
  },
];

const Container = tw.div`
    bg-gray-100
    w-full
    py-14
    flex
    flex-col
    justify-center
    items-center
`;

const TestimonialContent = tw.div`
  w-3/5
`;

const Testimonials = () => {
  return (
    <Container>
      <RedLabel center={true}>Testimonial</RedLabel>
      <SectionTitle center={true}>What Our Client Says</SectionTitle>
      <TestimonialContent>
        <MultiCarousel>
          {TestimonialData.map((testimonial: TestimonialType) => {
            return (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            );
          })}
        </MultiCarousel>
      </TestimonialContent>
    </Container>
  );
};

export default Testimonials;
