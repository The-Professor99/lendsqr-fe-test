import React, { useState } from "react";
import { Paper, Avatar, CircularProgress } from "@mui/material";

import { UserDetailsTabs } from "./UserDetailsTabs";
import { UserDetailsTabpanels } from "./UserDetailsTabpanels";
import { UserProfile } from "_models";
import { avatarIcon, starIconFilled, starIconOutlined } from "assets";
import "./UserDetailsOverview.scss";

interface UserDetailsOverviewProps {
  data: UserProfile;
  loading?: boolean;
  error?: boolean;
}

function UserDetailsOverview({
  data,
  loading,
  error,
}: UserDetailsOverviewProps): JSX.Element {
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
        {loading ? (
          <div className="loading-spinner-container">
            <CircularProgress />{" "}
          </div>
        ) : (
          <>
            {Object.keys(data).length ? (
              <>
                <div className="avatar-container">
                  <Avatar sx={{ width: 100, height: 100 }}>
                    <img src={avatarIcon} alt="avatar icon" />
                    <div className="overlay">
                      {data.profile?.avatar ? (
                        <img src={data.profile.avatar} alt="user avatar" />
                      ) : (
                        <img src={avatarIcon} alt="avatar icon" />
                      )}
                    </div>
                  </Avatar>
                </div>
                <div className="name-container">
                  <p className="profile-name">
                    {data.profile?.firstName + " " + data.profile?.lastName}
                  </p>
                  <p>{data.accountNumber} </p>
                </div>
                <div className="tier-container">
                  <p>User's Tier</p>
                  <div className="d-flex">
                    {Array(sampleTier)
                      .fill("")
                      .map((_, i) => (
                        <img
                          src={starIconFilled}
                          alt="filled star icon"
                          className="svgIcon"
                          key={i}
                        />
                      ))}
                    {Array(sampleTierTotal - sampleTier)
                      .fill("")
                      .map((_, i) => (
                        <img
                          src={starIconOutlined}
                          alt="star outline icon"
                          className="svgIcon"
                          key={i}
                        />
                      ))}
                  </div>
                </div>
                <div className="balance-container">
                  <p>₦{data.accountBalance}</p>
                  <p>{data.accountNumber}/Providus Bank</p>
                </div>{" "}
              </>
            ) : (
              <strong className="errorMessage">
                Failed to fetch data. Please Refresh the page
              </strong>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="UserDetailsOverview" data-testid="UserDetailsOverview">
      <Paper elevation={4} className="brief-overview-container">
        <BriefOverview />
        <UserDetailsTabs tabValue={tabValue} handleChange={handleChange} />
      </Paper>
      <div className="user-details-panels-container">
        <Paper elevation={4}>
          <UserDetailsTabpanels
            tabValue={tabValue}
            data={data}
            loading={loading}
            error={error}
          />
        </Paper>
      </div>
    </div>
  );
}

export { UserDetailsOverview };
