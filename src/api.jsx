import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [allData, setAllData] = useState(null);
  const fetchfunction = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setAllData(data))
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    const fetchAllData = async (url) => {
      const allData = await fetchfunction(url);
      setAllData(allData);
    };
    fetchAllData(url);
  }, [url]);
  return allData;
};
export { FetchData };
