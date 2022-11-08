import React from "react";
import { Box } from "@mui/material";

import {
  PersonalInfo,
  SocialsInfo,
  EducationInfo,
  GuarantorInfo,
} from "components";
import { Education, Guarantor, Profile, Socials, UserProfile } from "_models";
import "./UserDetailsTabpanels.scss";

interface UserDetailsTabpanelsProps {
  tabValue: string;
  data: UserProfile;
}
interface TabPanelProps {
  children?: React.ReactNode;
  indexValue: string;
  value: string;
}

function UserDetailsTabpanels({
  tabValue,
  data,
}: UserDetailsTabpanelsProps): JSX.Element {
  const TabPanel = (props: TabPanelProps) => {
    const { children, value, indexValue, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== indexValue}
        id="tabpanel-user-details"
        aria-labelledby="tabpanel-user-details"
        {...other}
      >
        {value === indexValue && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  return (
    <div className="UserDetailsTabpanels" data-testid="UserDetailsTabpanels">
      <TabPanel value={tabValue} indexValue="generalDetails">
        <PersonalInfo
          profileDetails={data.profile ? data.profile : ({} as Profile)}
        />
        <EducationInfo
          educationDetails={data.education ? data.education : ({} as Education)}
        />
        <SocialsInfo
          socialsDetails={data.socials ? data.socials : ({} as Socials)}
        />
        <GuarantorInfo
          guarantorDetails={data.guarantor ? data.guarantor : ({} as Guarantor)}
        />
      </TabPanel>
      <TabPanel value={tabValue} indexValue="documents">
        <div>Nothing to show here!</div>
      </TabPanel>
      <TabPanel value={tabValue} indexValue="bankDetails">
        <div>Nothing to show here!</div>
      </TabPanel>
      <TabPanel value={tabValue} indexValue="loans">
        <div>Nothing to show here!</div>
      </TabPanel>
      <TabPanel value={tabValue} indexValue="savings">
        <div>Nothing to show here!</div>
      </TabPanel>
      <TabPanel value={tabValue} indexValue="appSystem">
        <div>Nothing to show here!</div>
      </TabPanel>
    </div>
  );
}

export { UserDetailsTabpanels };
