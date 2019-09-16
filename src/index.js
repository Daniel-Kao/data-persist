import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Loading from "./Loading";
const Home = loadable(() => import("./containers/Home"), {
  fallback: Loading
});
const Login = loadable(() => import("./containers/Login"), {
  fallback: Loading
});

const Translate = loadable(() => import("./containers/Translate"), {
  fallback: Loading
});
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "./global.css";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/translate' component={Translate} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
