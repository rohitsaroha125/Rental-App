import tw from "tailwind-styled-components";
import styled from "styled-components";
import PageContainer from "../../components/UI/PageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const InnerContainer = tw.div`
    mt-32
    w-4/5
    grid
    grid-cols-8
    gap-4
    pb-20
`;

const LeftContainer = tw.div`
    col-span-2
`;

const RightContainer = tw.div`
    col-span-6
`;

const User = () => {
  return (
    <PageContainer>
      <InnerContainer>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
          <ProfileCard />
        </RightContainer>
      </InnerContainer>
    </PageContainer>
  );
};

export default User;
