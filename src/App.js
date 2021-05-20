import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:listName" component={(props) => <View {...props} />} />
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
