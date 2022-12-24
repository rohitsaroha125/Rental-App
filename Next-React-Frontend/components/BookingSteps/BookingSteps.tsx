import tw from "tailwind-styled-components";
import styled from "styled-components";
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import BookingStep from "./BookingStep";
import RedLabel from "../UI/RedLabel";
import SectionTitle from "../UI/SectionTitle";
import { Fragment } from "react";

type StepType = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

const SectionContainer = tw.div`
  mt-36
  w-full
  flex
  flex-col
  items-center
`;

const Container = tw.div`
    w-4/5
    grid
    grid-cols-3
    gap-8
    flex
    items-center
    mt-12
    mb-10
`;

const stepsData: StepType[] = [
  {
    id: 1,
    icon: faMapMarkedAlt,
    title: "Choose Location",
    description: "Find the nearest yourcar point and book your car",
  },
  {
    id: 2,
    icon: faCalendarAlt,
    title: "Pick Up Date",
    description: "Pick up a best date to rent car for you",
  },
  {
    id: 3,
    icon: faCarSide,
    title: "Book Your Car",
    description: "Book your nice with ease in one single click",
  },
];

const BookingSteps = () => {
  return (
    <SectionContainer>
      <RedLabel center={true}>How It Works</RedLabel>
      <SectionTitle center={true}>Our Working Steps</SectionTitle>
      <Container>
        {stepsData.map((step: StepType) => {
          return (
            <BookingStep
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          );
        })}
      </Container>
    </SectionContainer>
  );
};

export default BookingSteps;
