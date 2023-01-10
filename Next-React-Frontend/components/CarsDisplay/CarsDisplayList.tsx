import tw from "tailwind-styled-components";
import styled from "styled-components";
import CarsCarouselCard from "../CarsList/CarsCarouselCard";
import { CarType } from "../../models/Car";
import useHttp from "../../hooks/use-http";
import { HttpRequest } from "../../models/HttpRequest";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../Loader/Loader";

const Container = tw.div`
  flex
  flex-col
`;

const CarsContainer = tw.div`
    my-6
    flex
    grid
    grid-cols-3
    gap-8
`;

const PaginationContainer = styled.div`
  width: 60%;
  margin-left: 20%;

  ul {
    display: flex;
    justify-content: space-evenly;
  }

  .selected {
    text-align: center;
  }

  .page-number.active {
    background: #ef4444;
    padding: 5px 10px;
    color: #fff;
    font-weight: 600;
  }
`;

const CarsDisplayList: React.FC<{
  handleTotalCars: (data: number) => void;
  selectedBrands: string[];
  selectedFuels: string[];
  selectedTransmission: string[];
  selectedPriceRange: [number, number] | null;
  selectedMileageRange: [number, number] | null;
}> = (props) => {
  const [carsData, setCarsData] = useState<CarType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [recordsPerPage] = useState<number>(12);

  const options: HttpRequest = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const transformData = (data: any) => {
    if (data) {
      props.handleTotalCars(parseInt(data?.total));
      setTotalRecords(parseInt(data?.total));
      if (data?.data.length > 0) {
        setCarsData(data?.data);
      }
    }
  };

  const {
    loading,
    error,
    sendRequest: getCars,
  } = useHttp(options, transformData);

  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_DB_URL}cars?page=${currentPage}`;

    // handle brands
    if (props.selectedBrands.length > 0) {
      const myStr = optionsString(props.selectedBrands, "brand");
      url += `&` + myStr;
    }

    // handle fuels
    if (props.selectedFuels.length > 0) {
      const myStr = optionsString(props.selectedFuels, "gas");
      url += `&` + myStr;
    }

    // handle gear types
    if (props.selectedTransmission.length > 0) {
      const myStr = optionsString(props.selectedTransmission, "gearType");
      url += `&` + myStr;
    }

    // handle price range
    if (props.selectedPriceRange) {
      const myStr = rangeString(props.selectedPriceRange, "price");
      url += `&${myStr}`;
    }

    // handle mileage range
    if (props.selectedMileageRange) {
      const myStr = rangeString(props.selectedMileageRange, "mileage");
      url += `&${myStr}`;
    }

    window.scrollTo(0, 0);
    getCars(url);
  }, [
    currentPage,
    props.selectedBrands,
    props.selectedFuels,
    props.selectedTransmission,
    props.selectedPriceRange,
    props.selectedMileageRange,
  ]);

  const optionsString = (data: string[], optionType: string) => {
    let str = ``;
    data.forEach((option: string, i: number) => {
      if (i === data.length - 1) {
        str += `${optionType}=${option}`;
      } else {
        str += `${optionType}=${option}&`;
      }
    });
    return str;
  };

  const rangeString = (data: [number, number], rangeType: string) => {
    const str = `${rangeType}[gte]=${data[0]}&${rangeType}[lte]=${data[1]}`;
    return str;
  };

  const paginate = ({ selected }: any) => {
    setCurrentPage(selected + 1);
  };

  return (
    <Container>
      <CarsContainer>
        {loading && <Loader />}
        {carsData.map((car: CarType) => {
          return <CarsCarouselCard car={car} key={car.id} carList={true} />;
        })}
      </CarsContainer>
      <PaginationContainer>
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(totalRecords / recordsPerPage)}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName={"pagination"}
          pageLinkClassName={"page-number"}
          previousLinkClassName={"page-number"}
          nextLinkClassName={"page-number"}
          activeLinkClassName={"active"}
        />
      </PaginationContainer>
    </Container>
  );
};

export default CarsDisplayList;
