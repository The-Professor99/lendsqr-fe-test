import React from "react";
import { Divider } from "@mui/material";

import { UserProfile } from "_models";
import { OptionsPopover } from "components";
import "./DatatableRows.scss";

interface DatatableRowsProps {
  data: UserProfile[];
}
interface DatatableRowProps {
  children: JSX.Element;
}

function DatatableRows({ data }: DatatableRowsProps): JSX.Element {
  const statusArray = ["Inactive", "Pending", "Backlisted"];
  const randomChoice = (arr: string[]) => {
    return arr[Math.floor(arr.length * Math.random())];
  }; // placeholder for 'status' which
  // should come with user data but isn't

  const DatatableRow = ({ children }: DatatableRowProps) => {
    return (
      <div className="DatatableRow" data-testid="DatatableRow" role="cell">
        {children}
      </div>
    );
  };
  return (
    <>
      {data.map((user) => {
        return (
          <div key={user.id}>
            <div
              className="DatatableRows"
              data-testid="DatatableRows"
              role="row"
            >
              <DatatableRow>
                <span title={user.orgName}>{user.orgName}</span>
              </DatatableRow>
              <DatatableRow>
                <span title={user.userName}>{user.userName}</span>
              </DatatableRow>
              <DatatableRow>
                <span title={user.email}>{user.email}</span>
              </DatatableRow>
              <DatatableRow>
                <span title={user.phoneNumber}>{user.phoneNumber}</span>
              </DatatableRow>
              <DatatableRow>
                <span
                  title={
                    new Date(user.createdAt).toLocaleString("en-GB", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) +
                    " " +
                    new Date(user.createdAt).toLocaleTimeString("en-GB", {
                      hour12: true,
                      timeStyle: "short",
                    })
                  }
                >
                  {new Date(user.createdAt).toLocaleString("en-GB", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) +
                    " " +
                    new Date(user.createdAt).toLocaleTimeString("en-GB", {
                      hour12: true,
                      timeStyle: "short",
                    })}
                </span>
              </DatatableRow>
              <DatatableRow>
                <span>{randomChoice(statusArray)}</span>
              </DatatableRow>
              <DatatableRow>
                <OptionsPopover userId={user.id} />
              </DatatableRow>
            </div>
            <Divider />
          </div>
        );
      })}
    </>
  );
}

export { DatatableRows };
