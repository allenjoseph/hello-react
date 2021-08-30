import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import ResultDetails from "./ResultDetails";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Zoo</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <ResultDetails />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
