import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./NotFound.scss";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="NotFound" data-testid="NotFound">
      <b>Oops!</b>
      <p>404: Page Not Found</p>

      <Link to={{ pathname: "/" }}>
        <Button>Visit Homepage</Button>
      </Link>
    </div>
  );
}

export { NotFound };
