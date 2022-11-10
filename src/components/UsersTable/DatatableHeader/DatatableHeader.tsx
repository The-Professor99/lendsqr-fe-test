import React from "react";
import { Paper, IconButton } from "@mui/material";

import { filterIcon } from "assets";
import "./DatatableHeader.scss";

interface DatatableHeaderProps {
  headerTitles: string[];
  handleShowFilter: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface HeaderDataProps {
  headerTitle?: string;
  handleShowFilter: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const HeaderData = ({
  headerTitle,
  handleShowFilter,
}: HeaderDataProps): JSX.Element => {
  return (
    <>
      <span>{headerTitle}</span>
      {headerTitle && (
        <div className="filter-icon-container">
          <IconButton onClick={handleShowFilter}>
            <img src={filterIcon} alt="filter icon" className="svgIcon" />
          </IconButton>
        </div>
      )}
    </>
  );
};

function DatatableHeader({
  headerTitles,
  handleShowFilter,
}: DatatableHeaderProps): JSX.Element {
  return (
    <>
      {headerTitles.map((title, index) => {
        return (
          <div role="columnheader" className="DatatableHeader" key={index}>
            <HeaderData
              headerTitle={title}
              handleShowFilter={handleShowFilter}
            />
          </div>
        );
      })}
    </>
  );
}

export { DatatableHeader };
