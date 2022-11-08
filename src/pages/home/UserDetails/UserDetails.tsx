import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PersonAdd } from "@mui/icons-material";
import { Button } from "@mui/material";

import { UserDetailsOverview } from "components";
import { useRemoteService } from "_helpers";
import { UserProfile } from "_models";
import "./UserDetails.scss";

function UserDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const userId = params.userId;
  const dataUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`;

  useEffect(() => {
    document.title = "Lendsqr - Profile";
  }, []);

  const { data, loading, error } = useRemoteService(dataUrl, {} as UserProfile);

  console.log(data);
  return (
    <section className="UserDetails" data-testid="UserDetails">
      <Button onClick={() => navigate({ pathname: "/" })}>
        <PersonAdd /> Back to Users
      </Button>
      <div>
        <h2>User Details</h2>
        <div>
          <Button>BLACKLIST USER</Button>
          <Button>ACTIVATE USER</Button>
        </div>
      </div>
      <UserDetailsOverview
        data={
          !Array.isArray(data) &&
          data instanceof Object &&
          data.constructor === Object
            ? data
            : ({} as UserProfile)
        }
      />
    </section>
  );
}

export { UserDetails };
