import tw from "tailwind-styled-components";
import styled from "styled-components";
import CalendarInput from "../UI/CalendarInput";
import LocationInput from "../UI/LocationInput";
import Button from "../UI/Button";

const BookCardContainer = tw.div`
    w-full
    flex
    justify-center
    mb-5
`;

const BookCardInnerConatiner = tw.div`
    flex
    items-center
    w-3/5
    px-5
    py-5
    bg-white
    rounded-md
    shadow-lg
    grid 
    grid-cols-4
    gap-6
`;

const BookButtonConatiner = tw.div`
  w-full
  flex 
  items-center
  justify-center
`;

const BookCard = () => {
  return (
    <BookCardContainer>
      <BookCardInnerConatiner>
        <LocationInput placeholder="Select Location" line={true} />
        <CalendarInput placeholder="Pick up date" line={true} />
        <CalendarInput placeholder="Return date" line={false} />
        <BookButtonConatiner>
          <Button label="Book Your Ride" theme="Filled" wtFull={true} />
        </BookButtonConatiner>
      </BookCardInnerConatiner>
    </BookCardContainer>
  );
};

export default BookCard;
