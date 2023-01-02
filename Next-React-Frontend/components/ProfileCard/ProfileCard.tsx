import tw from "tailwind-styled-components";
import styled from "styled-components";
import Image from "next/image";
import UserImg from "../../public/assets/images/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UI/Button";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Container = tw.div`
    border
    py-6
    px-4
`;

const ProfileHeading = tw.div`
    flex
    justify-between
    items-center
    border-b
    pb-4
`;

const Heading = tw.div`
    font-bold
    text-2xl
`;

const EditLink = tw.p`
    text-red-500
    underline
    cursor-pointer
`;

const ProfileData = tw.div`
    pt-8
    pb-4
    flex
`;

const ProfileImg = styled.div`
  height: 120px;
  width: 120px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileInfo = tw.div`
  pl-8
  flex
  grid
  grid-cols-2
  w-4/5
`;

const DetailCol = tw.div`
  flex
  flex-col
  mb-6
`;

const DetailLabel = tw.p`
  text-sm
  text-gray-700
`;

const DetailInfo = tw.p`
  text-lg
  text-black
`;

const ProfileCard = () => {
  return (
    <Container>
      <ProfileHeading>
        <Heading>Profile Information</Heading>
        <EditLink>
          <FontAwesomeIcon icon={faPencilAlt} />
          &nbsp;Edit
        </EditLink>
      </ProfileHeading>
      <ProfileData>
        <ProfileImg>
          <Image src={UserImg} alt="User Image" />
        </ProfileImg>
        <ProfileInfo>
          <DetailCol>
            <DetailLabel>FIRST NAME</DetailLabel>
            <DetailInfo>Rohit</DetailInfo>
          </DetailCol>
          <DetailCol>
            <DetailLabel>LAST NAME</DetailLabel>
            <DetailInfo>Saroha</DetailInfo>
          </DetailCol>
          <DetailCol>
            <DetailLabel>EMAIL</DetailLabel>
            <DetailInfo>rohitsaroha125@gmail.com</DetailInfo>
          </DetailCol>
          <DetailCol>
            <DetailLabel>PASSWORD</DetailLabel>
            <DetailInfo>******</DetailInfo>
          </DetailCol>
        </ProfileInfo>
      </ProfileData>
    </Container>
  );
};

export default ProfileCard;
