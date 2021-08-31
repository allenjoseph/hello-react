import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const SearchResults = ({ animals }) => {
  const [themeColor] = useContext(ThemeContext);

  return (
    <div>
      {!animals.length ? (
        <h2>No animals found!</h2>
      ) : (
        animals.map((o) => (
          <div key={o.name}>
            <Link to={`details/${o.name}`} style={{color: themeColor}}>
              <h2>{o.name}</h2>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
