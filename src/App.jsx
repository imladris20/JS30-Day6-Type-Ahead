import { useState } from "react";
import FilteredListItems from "./Components/ListItems/FilteredListItems";
import InitialListItems from "./Components/ListItems/InitialListItems";
import useDataLoader from "./Hooks/useDataLoader";

const endPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

function App() {
  const cities = useDataLoader(endPoint);
  const [displayCities, setDisplayCities] = useState([]);

  const handleInput = (e) => {
    const keyword = e.target.value;
    const regex = new RegExp(keyword, "gi");

    if (keyword.length) {
      const newDisplayCities = cities.filter((cityInfo) => {
        const { city, state } = cityInfo;
        return regex.test(city) || regex.test(state);
      });
      if (newDisplayCities.length) {
        setDisplayCities(newDisplayCities);
      } else {
        setDisplayCities([
          { city: `There is no city or state including "${keyword}"` },
        ]);
      }
    } else {
      setDisplayCities([]);
    }
  };

  return (
    cities && (
      <form className="search-form max-w-[400px] my-[50px] mx-auto">
        <input
          type="text"
          className="search p-5 text-center outline-0 border-solid border-[#f7f7f7] border-[10px] w-[120%] -left-[10%] relative top-[10px] z-[2] rounded-[5px] text-3xl shadow-input"
          placeholder="City or State"
          onChange={handleInput}
        />
        <ul className="suggestions relative">
          {displayCities.length !== 0 ? (
            <FilteredListItems list={displayCities} />
          ) : (
            <InitialListItems />
          )}
        </ul>
      </form>
    )
  );
}

export default App;
