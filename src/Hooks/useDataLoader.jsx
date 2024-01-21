import axios from "axios";
import { useEffect, useState } from "react";

const useDataLoader = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.error("Error while fetching Data: ", error);
      }
    };
    fetchData();
  }, [url]);
  return data;
};

export default useDataLoader;
