import * as React from "react";
import * as ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";

import App from "./App";
import { makeStore } from "./Store/Store";

// import registerServiceWorker from './registerServiceWorker';
const store = makeStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
