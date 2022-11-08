import React, { useState } from "react";
import { Paper, Avatar } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

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

  const getRandomInteger = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const sampleTierTotal = 3; // currently have only 3 tiers
  const sampleTier = getRandomInteger(1, sampleTierTotal); // tier can either be 1, 2 or 3. Main tier will come with user details

  const BriefOverview = () => {
    return (
      <div className="BriefOverview d-flex">
        <div className="avatar-container">
          <Avatar sx={{ width: 32, height: 32 }}>
            <PersonAdd className="dummyAvatar" />
            <div className="overlay">
              {data.profile?.avatar ? (
                <img src={data.profile.avatar} alt="user avatar" />
              ) : (
                <PersonAdd />
              )}
            </div>
          </Avatar>
        </div>
        <div className="name-container">
          <p>{data.profile?.firstName + " " + data.profile?.lastName}</p>
          <p>{data.accountNumber} </p>
        </div>
        <div className="tier-container">
          <p>User's Tier</p>
          <div className="d-flex">
            {Array(sampleTier)
              .fill("")
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
            {Array(sampleTierTotal - sampleTier)
              .fill("")
              .map((_, i) => (
                <p key={i}>$</p>
              ))}
          </div>
        </div>
        <div className="balance-container">
          <p>₦{data.accountBalance}</p>
          <p>{data.accountNumber}/Providus Bank</p>
        </div>
      </div>
    );
  };

  return (
    <div className="UserDetailsOverview" data-testid="UserDetailsOverview">
      <div>
        <Paper elevation={4}>
          <BriefOverview />
          <UserDetailsTabs tabValue={tabValue} handleChange={handleChange} />
        </Paper>
      </div>
      <div className="user-details-panels-container">
        <Paper elevation={4}>
          <UserDetailsTabpanels tabValue={tabValue} data={data} />
        </Paper>
      </div>
    </div>
  );
}

export { UserDetailsOverview };
