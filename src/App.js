import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Comics from "./Comics";

export default () =>
  <Provider store={store}>
    <Comics />
  </Provider>;
