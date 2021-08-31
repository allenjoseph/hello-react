import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import ResultDetails from "./ResultDetails";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

const App = () => {
  const themeState = useState("black");
  const [theme, setTheme] = themeState;

  return (
    <ThemeContext.Provider value={themeState}>
      <div>
        <Router>
          <header>
            <Link to="/" style={{color: theme}}>
              <h1>Zoo</h1>
            </Link>
            <label htmlFor="theme" style={{float: "right"}}>
              Theme
              <select
                value={theme}
                onChange={e => setTheme(e.target.value)}
                onBlur={e => setTheme(e.target.value)}>
                  <option value="black">Black</option>
                  <option value="chartreuse">Chartreuse</option>
                  <option value="mediumorchid">Medium Orchid</option>
                  <option value="peru">Peru</option>
                </select>
            </label>
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
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
