import React, { useEffect } from "react";
import "./NotFound.scss";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="NotFound" data-testid="NotFound">
      NotFound Component
    </div>
  );
}

export { NotFound };
