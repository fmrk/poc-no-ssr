import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import Comics from "./Comics";
import { receiveApiData, requestApiData } from "./actions";

const root = document.getElementById("root");
const dataSeed = document.getElementById("data-seed");
if(dataSeed) {
    store.dispatch(receiveApiData(JSON.parse(dataSeed.innerHTML).data));
}

ReactDOM.render(
    <Provider store={store}>
        <Comics />
    </Provider>, root
);

registerServiceWorker();
