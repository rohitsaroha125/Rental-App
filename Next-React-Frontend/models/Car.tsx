export type CarType = {
  id: number;
  name: string;
  mileage: string;
  thumbnailSrc: string;
  price: number;
  monthlyPrice: number;
  gearType: string;
  gas: string;
};

export type CarsCarouselType = {
  audi: CarType[];
  honda: CarType[];
  suzuki: CarType[];
  toyota: CarType[];
  hyundai: CarType[];
};
