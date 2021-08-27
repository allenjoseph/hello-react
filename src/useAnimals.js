import { useEffect, useState } from "react";

export default function useAnimals(family) {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    if (!family) {
      setAnimals([]);
    } else {
      requestAnimals();
    }

    async function requestAnimals() {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/http://www.animaliarestapi.com/family/${family}`
      );
      setAnimals(await res.json());
    }
  }, [family]);

  return [animals];
}
