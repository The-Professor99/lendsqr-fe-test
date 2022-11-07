import React, { useState } from "react";
import { Paper, InputBase, Divider, IconButton } from "@mui/material";
import { Menu, Search, Directions } from "@mui/icons-material";

import "./SearchBar.scss";

interface SearchBarProps {}

function SearchBar({}: SearchBarProps): JSX.Element {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    if (searchValue) {
      // search execution will go here
      console.group();
      console.log("Search Results for: ", searchValue);
      console.log("No result found!");
      console.groupEnd();
    }
  };

  return (
    <div className="SearchBar" data-testid="SearchBar">
      <form>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for anything"
          inputProps={{ "aria-label": "search lendsqr" }}
          onChange={handleChange}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
        >
          <Search />
        </IconButton>
      </form>
    </div>
  );
}

export { SearchBar };
