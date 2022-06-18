import "./container.css";
import React, { useEffect, useContext } from "react";
import { SearchContext } from "../../context/Context";
import Gallery from "../Gallery/Gallery";

const Container = ({ searchTerm }) => {
  const { dataImg, runSearch } = useContext(SearchContext);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  console.log("context", dataImg);

  return (
    <div>
      <Gallery dataImg={dataImg} />
    </div>
  );
};

export default Container;
