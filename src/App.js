import ReactDOM from "react-dom";
import Animal from "./Animal";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Zoo</h1>
      <SearchParams />
      <Animal name="Fox" family="Canidae"></Animal>
      <Animal name="Bear" family="Ursidae"></Animal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
