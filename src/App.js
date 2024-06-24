import "./App.css";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

function App() {
  const [data] = useFetch("https://dummyjson.com/products");
  data?.products?.map((val) => {
    console.log(val);
  });
  return (
    <div className="App">
      {data?.products?.map((val) => {
        return <p>{val.title}</p>;
      })}
    </div>
  );
}

export default App;
