import React, { useState } from "react";

import { UserDetailsTabs } from "./UserDetailsTabs";
import { UserDetailsTabpanels } from "./UserDetailsTabpanels";
import "./UserDetailsOverview.scss";
import { UserProfile } from "_models";

interface UserDetailsOverviewProps {
  data: UserProfile;
}

function UserDetailsOverview({ data }: UserDetailsOverviewProps): JSX.Element {
  const [tabValue, setTabValue] = useState("generalDetails");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="UserDetailsOverview" data-testid="UserDetailsOverview">
      <UserDetailsTabs tabValue={tabValue} handleChange={handleChange} />
      <UserDetailsTabpanels tabValue={tabValue} data={data} />
    </div>
  );
}

export { UserDetailsOverview };
