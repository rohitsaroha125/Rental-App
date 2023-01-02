import tw from "tailwind-styled-components";
import styled from "styled-components";

const SidebarList = tw.ul`
    bg-gray-100
`;

const SidebarLi = tw.li`
    p-3
    border-b
`;

const Sidebar = () => {
  return (
    <SidebarList>
      <SidebarLi>Profile Information</SidebarLi>
      <SidebarLi>Order History</SidebarLi>
      <SidebarLi>Logout</SidebarLi>
    </SidebarList>
  );
};

export default Sidebar;
