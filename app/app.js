import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import {default as reducer} from "./reducer.js";
import {default as AppView} from "./appview.js";

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById("container")
);