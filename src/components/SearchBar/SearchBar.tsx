import React, { useState } from "react";
import { Paper, InputBase, Divider, IconButton } from "@mui/material";
import { Menu, Search, Directions } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { mainAppActions } from "_redux";
import "./SearchBar.scss";

interface SearchBarProps {}

function SearchBar({}: SearchBarProps): JSX.Element {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    // search function will go here
    if (searchValue) {
      dispatch(mainAppActions.setSearchTerm(searchValue));
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
          type="button"
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
