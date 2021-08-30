import { useState } from "react";
import SearchResults from "./SearchResults";
import useAnimals from "./useAnimals";

const FAMILIES = ["Felidae", "Canidae", "Ursidae", "Mustelidae"];

const SearchParams = () => {
  const [family, setFamily] = useState("");
  const [animals] = useAnimals(family);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="family">
          family
          <select
            id="family"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            onBlur={(e) => setFamily(e.target.value)}
          >
            <option />
            {FAMILIES.map((o) => (
              <option value={o} key={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <SearchResults animals={animals} />
    </div>
  );
};

export default SearchParams;
