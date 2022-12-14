import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

import { UserDetailsOverview } from "components";
import { useRemoteService } from "_helpers";
import { UserProfile } from "_models";
import { backIcon } from "assets";
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

  return (
    <section className="UserDetails" data-testid="UserDetails">
      <Link to="/">
        <Button className="prevButton">
          <img src={backIcon} alt="go back icon" /> <span>Back to Users</span>
        </Button>
      </Link>
      <div className="action-buttons-container">
        <h2>User Details</h2>
        <div>
          <Button variant="outlined">BLACKLIST USER</Button>
          <Button variant="outlined">ACTIVATE USER</Button>
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
        loading={loading}
        error={error}
      />
    </section>
  );
}

export { UserDetails };
