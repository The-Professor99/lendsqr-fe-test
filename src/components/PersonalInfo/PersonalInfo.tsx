import React from "react";

import { Profile } from "_models";
import "./PersonalInfo.scss";

interface PersonalInfoProps {
  profileDetails: Profile;
  email: string;
}

function PersonalInfo({
  profileDetails,
  email,
}: PersonalInfoProps): JSX.Element {
  return (
    <section className="PersonalInfo" data-testid="PersonalInfo">
      <h3>Personal Information</h3>
      <div className="grid-container">
        <div>
          <b>FULL NAME</b>
          <p>{profileDetails.firstName + " " + profileDetails.lastName}</p>
        </div>
        <div>
          <b>PHONE NUMBER</b>
          <p>{profileDetails.phoneNumber}</p>
        </div>
        <div>
          <b>EMAIL ADDRESS</b>
          <p>{email}</p>
        </div>
        <div>
          <b>BVN</b>
          <p>{profileDetails.bvn}</p>
        </div>
        <div>
          <b>GENDER</b>
          <p>{profileDetails.gender}</p>
        </div>
        <div>
          <b>MARITAL STATUS</b>
          <p>Single</p>
        </div>
        <div>
          <b>CHILDREN</b>
          <p>None</p>
        </div>
        <div>
          <b>TYPE OF RESIDENCE</b>
          <p>Parent's Apartment</p>
        </div>
      </div>
    </section>
  );
}

export { PersonalInfo };
