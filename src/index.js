import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import {configureStore} from "./store";
import App from "./App.js";
import {PersistGate} from "redux-persist/lib/integration/react";

const store = configureStore();
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading....</div>}>
      <App />
    </PersistGate>
  </Provider>
);
