import React from "react";
import { TextField } from "@material-ui/core";

export const SearchInput = ({ register, errors }) => {
  const isError = errors.location !== undefined;
  return (
    <TextField
      label="Location"
      name="location"
      id="location"
      fullWidth
      variant="outlined"
      inputRef={register({
        required: true,
      })}
      error={isError}
    />
  );
};
