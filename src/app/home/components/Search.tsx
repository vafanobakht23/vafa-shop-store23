import { InputAdornment, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { FC } from "react";

type Props = {
  setSearch: (value: string) => void;
};

const SearchBox: FC<Props> = ({ setSearch }) => {
  return (
    <div className="flex justify-center mt-8 mb-4">
      <div className="relative w-full max-w-md">
        <Input
          placeholder="Search"
          className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 transition-all"
          onChange={(e) => setSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
};

export default SearchBox;
