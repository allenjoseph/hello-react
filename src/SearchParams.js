import { useState } from "react";

const FAMILIES = ["Felidae", "Canidae", "Ursidae", "Mustelidae"];

const SearchParams = () => {
  const [location, setLocation] = useState("Amazonas");
  const [family, setFamily] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
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
    </div>
  );
};

export default SearchParams;
