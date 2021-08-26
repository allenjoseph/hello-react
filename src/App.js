import ReactDOM from "react-dom";
import Animal from "./Animal";

const App = () => {
  return (
    <div>
      <h1>Zoo</h1>
      <Animal name="Fox" family="Canidae"></Animal>
      <Animal name="Bear" family="Ursidae"></Animal>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
