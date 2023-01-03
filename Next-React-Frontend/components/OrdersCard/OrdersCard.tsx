import tw from "tailwind-styled-components";
import styled from "styled-components";
import Table from "../UI/Table";
import Input from "../UI/Input";

const Container = tw.div`
    border
    py-6
    px-4
`;

const OrdersHeading = tw.div`
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

const OrdersData = tw.div`
    pt-2
    pb-4
    flex
`;

const OrdersFilter = tw.div`
  grid
  grid-cols-9
  gap-8
  pt-6
`;

const DateFilter = tw.div`
  col-span-6
  flex
`;

const SearchFilter = tw.div`
  col-span-3
`;

const columns = [
  { label: "Order Number", key: "orderNo", sorting: true },
  { label: "Order Date", key: "orderDate", sorting: true },
  { label: "Status", key: "status" },
  { label: "Hours Used", key: "hours", sorting: true },
  { label: "Total Cost", key: "total", sorting: true },
];

const OrdersCard = () => {
  const handleSearchValue = () => {};

  return (
    <Container>
      <OrdersHeading>
        <Heading>Order History</Heading>
      </OrdersHeading>
      <OrdersFilter>
        <DateFilter>
          <Input
            input={{
              type: "date",
              id: "startDate",
              name: "startDate",
              placeholder: "Start Date",
            }}
            handleChange={handleSearchValue}
          />
          <Input
            input={{
              type: "date",
              id: "endDate",
              name: "endDate",
              placeholder: "End Date",
            }}
            handleChange={handleSearchValue}
          />
        </DateFilter>
        <SearchFilter>
          <Input
            input={{
              type: "text",
              id: "search",
              name: "search",
              placeholder: "Search Order",
            }}
            handleChange={handleSearchValue}
          />
        </SearchFilter>
      </OrdersFilter>
      <OrdersData>
        <Table columns={columns} />
      </OrdersData>
    </Container>
  );
};

export default OrdersCard;
