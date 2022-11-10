import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { MemoryRouter as Router } from "react-router-dom";
import { store } from "_redux";

const renderWithProvider = (component: JSX.Element) => {
  return {
    ...render(
      <Provider store={store}>
        <Router>{component}</Router>
      </Provider>
    ),
  };
};

export { renderWithProvider };
