import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);
  const [displayCities, setDisplayCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endPoint =
          "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
        const data = await axios.get(endPoint);
        setCities(data.data);
      } catch (error) {
        console.error("Error Occured: ", error);
      }
    };

    fetchData();
  }, []);

  const handleInput = (e) => {
    const keyword = e.target.value;

    if (keyword.length) {
      const newDisplayCities = cities.filter((cityInfo) => {
        const { city, state } = cityInfo;
        return city.includes(keyword) || state.includes(keyword);
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
    <form className="search-form max-w-[400px] my-[50px] mx-auto">
      <input
        type="text"
        className="search p-5 text-center outline-0 border-solid border-[#f7f7f7] border-[10px] w-[120%] -left-[10%] relative top-[10px] z-[2] rounded-[5px] text-[40px] shadow-input"
        placeholder="City or State"
        onChange={(e) => handleInput(e)}
      />
      <ul className="suggestions relative">
        {displayCities.length !== 0 ? (
          displayCities.map((cityInfo, index) => {
            return (
              <li
                key={index}
                className="bg-white border-b-[1px] border-solid border-[#d8d8d8] p-5 flex items-center capitalize transition-colors duration-200 even:bg-gradient-to-b odd:bg-gradient-to-t from-white to-[#efefef] shadow-suggestions"
              >
                <p className="text-base">{cityInfo?.city}</p>
                <p className="text-base">, {cityInfo?.state}</p>
                <p className="text-gray-400 text-xs ml-auto">
                  {cityInfo?.population}
                </p>
              </li>
            );
          })
        ) : (
          <>
            <li className="bg-white border-b-[1px] border-solid border-[#d8d8d8] p-5 flex justify-between items-center capitalize transition-colors duration-200 even:bg-gradient-to-b odd:bg-gradient-to-t from-white to-[#efefef] shadow-suggestions">
              Filter for a city
            </li>
            <li className="bg-white border-b-[1px] border-solid border-[#d8d8d8] p-5 flex justify-between items-center capitalize transition-colors duration-200 even:bg-gradient-to-b odd:bg-gradient-to-t from-white to-[#efefef] shadow-suggestions">
              or a state
            </li>
          </>
        )}
      </ul>
    </form>
  );
}

export default App;
