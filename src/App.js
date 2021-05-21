import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/:listName" component={(props) => <View {...props} />} />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default hot(App);
