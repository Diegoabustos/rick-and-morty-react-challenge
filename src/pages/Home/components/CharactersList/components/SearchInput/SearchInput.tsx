import React from "react";
import { Input } from "@chakra-ui/react";
import { useSearchStore } from "../../../../../../store/searchStore";

const SearchInput: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Input
      placeholder="Search characters"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
