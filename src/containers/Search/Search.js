import React from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput.js";
import { useForm } from "react-hook-form";
import { Container, Button } from "@material-ui/core";
import { yelpSearch } from "../../utils/api.js";

export const Search = ({ setData }) => {
  const { register, errors, handleSubmit } = useForm();
  const handleSearch = handleSubmit(async (data) => {
    const { location } = data;
    const res = await yelpSearch(location);
    setData(res);
  });
  return (
    <Container>
      <form onSubmit={handleSearch}>
        <SearchInput register={register} errors={errors} />
        <Button  color="primary" variant="contained">
          Search
        </Button>
      </form>
    </Container>
  );
};
