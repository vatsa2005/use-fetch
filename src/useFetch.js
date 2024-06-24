import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData((prev) => {
          return data;
        });
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [url]);
  return [data];
}

export default useFetch;
