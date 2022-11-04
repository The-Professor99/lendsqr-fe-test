import React, { useEffect } from "react";
import "./Login.scss";

function Login() {
  useEffect(() => {
    document.title = "Lendsqr - Login Page";
  }, []);

  return (
    <div className="Login" data-testid="Login">
      Login Component
    </div>
  );
}

export { Login };
