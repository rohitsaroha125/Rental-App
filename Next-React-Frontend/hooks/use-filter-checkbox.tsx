import { useState } from "react";

const useFilterCheckbox = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleAddOption = (data: string) => {
    setSelectedOptions((prevState: string[]) => {
      return [...prevState, data.toLowerCase()];
    });
  };

  const handleRemoveOption = (data: string) => {
    setSelectedOptions((prevState: string[]) => {
      const filteredBrands = prevState.filter((brand: string) => {
        return brand !== data.toLowerCase();
      });
      prevState = filteredBrands;
      return prevState;
    });
  };

  return { selectedOptions, handleAddOption, handleRemoveOption };
};

export default useFilterCheckbox;
