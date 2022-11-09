import React from "react";
import { Paper, IconButton } from "@mui/material";

import { filterIcon } from "assets";
import "./DatatableHeader.scss";

interface DatatableHeaderProps {
  headerTitles: string[];
}
interface HeaderDataProps {
  headerTitle?: string;
}

function DatatableHeader({ headerTitles }: DatatableHeaderProps): JSX.Element {
  const handleClick = () => {
    console.log("Filtering...");
  };
  const HeaderData = ({ headerTitle }: HeaderDataProps): JSX.Element => {
    return (
      <>
        <span>{headerTitle}</span>
        {headerTitle && (
          <div className="filter-icon-container" onClick={handleClick}>
            <IconButton>
              <img src={filterIcon} alt="filter icon" className="svgIcon" />
            </IconButton>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {headerTitles.map((title, index) => {
        return (
          <div
            role="columnheader"
            className="DatatableHeader"
            data-testid="DatatableHeader"
            key={index}
          >
            <HeaderData headerTitle={title} />
          </div>
        );
      })}
    </>
  );
}

export { DatatableHeader };
