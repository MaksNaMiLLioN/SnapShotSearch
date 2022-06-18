import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [dataImg, setDataImg] = useState([]);

  const runSearch = (searchTerm) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setDataImg(response.data.photos.photo);
      })
      .catch((error) => {
        console.log('Something is wrong"');
      });
  };

  return (
    <SearchContext.Provider value={{ dataImg, runSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
