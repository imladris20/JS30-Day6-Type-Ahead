import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    const fetchData = async () => {
      try {
        const data = await axios.get(endPoint);
        setCities(data.data);
      } catch (error) {
        console.error("Error Occured: ", error);
      }
    };

    fetchData();
  }, []);

  console.log(cities);

  return (
    <form className="search-form max-w-[400px] my-[50px] mx-auto">
      <input
        type="text"
        className="search p-5 text-center outline-0 border-solid border-[#f7f7f7] border-[10px] w-[120%] -left-[10%] relative top-[10px] z-[2] rounded-[5px] text-[40px] shadow-input"
        placeholder="City or State"
      />
      <ul className="suggestions relative">
        <li className="bg-white border-b-[1px] border-solid border-[#d8d8d8] p-5 flex justify-between capitalize transition-colors duration-200 even:bg-gradient-to-b odd:bg-gradient-to-t from-white to-[#efefef]">
          Filter for a city
        </li>
        <li className="bg-white border-b-[1px] border-solid border-[#d8d8d8] p-5 flex justify-between capitalize transition-colors duration-200 even:bg-gradient-to-b odd:bg-gradient-to-t from-white to-[#efefef]">
          or a state
        </li>
      </ul>
    </form>
  );
}

export default App;
