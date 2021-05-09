import React from "react";
import Comic from "./comic";
import Comics from "./comics";
import { Provider } from "react-redux";
import store from "../global/store";
import Navbar from "./navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="d-flex flex-row justify-content-center">
          <Comic />
          <Comics/>
        </div>
      </div>
    </Provider>
  );
};

export default App;
