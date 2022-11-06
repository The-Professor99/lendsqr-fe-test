import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  PersonalInfo,
  SocialsInfo,
  EducationInfo,
  GuarantorInfo,
} from "components";
import { useRemoteService } from "_helpers";
import { Education, Guarantor, Profile, Socials, UserProfile } from "_models";
import "./UserDetails.scss";

function UserDetails() {
  const params = useParams();
  const userId = params.userId;
  const dataUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`;

  useEffect(() => {
    document.title = "Lendsqr - Profile";
  }, []);

  const { data, loading, error } = useRemoteService(dataUrl, {} as UserProfile);

  console.log(data);

  return (
    <div className="UserDetails" data-testid="UserDetails">
      UserDetails Component
      <PersonalInfo
        profileDetails={
          !Array.isArray(data) &&
          data instanceof Object &&
          data.constructor === Object &&
          data.profile
            ? data.profile
            : ({} as Profile)
        }
      />
      <EducationInfo
        educationDetails={
          !Array.isArray(data) &&
          data instanceof Object &&
          data.constructor === Object &&
          data.education
            ? data.education
            : ({} as Education)
        }
      />
      <SocialsInfo
        socialsDetails={
          !Array.isArray(data) &&
          data instanceof Object &&
          data.constructor === Object &&
          data.socials
            ? data.socials
            : ({} as Socials)
        }
      />
      <GuarantorInfo
        guarantorDetails={
          !Array.isArray(data) &&
          data instanceof Object &&
          data.constructor === Object &&
          data.guarantor
            ? data.guarantor
            : ({} as Guarantor)
        }
      />
    </div>
  );
}

export { UserDetails };
