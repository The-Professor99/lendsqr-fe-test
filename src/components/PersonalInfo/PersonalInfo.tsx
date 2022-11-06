import React from "react";

import { Profile } from "_models";
import "./PersonalInfo.scss";

interface PersonalInfoProps {
  profileDetails: Profile;
}

function PersonalInfo({ profileDetails }: PersonalInfoProps): JSX.Element {
  return (
    <div className="PersonalInfo" data-testid="PersonalInfo">
      Personal Information
      <div>
        <h2>Full Name</h2>
        <p>{profileDetails.firstName + " " + profileDetails.lastName}</p>
      </div>
    </div>
  );
}

export { PersonalInfo };
