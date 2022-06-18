import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Item from "./components/Item";
import Search from "./components/Search/Search";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
  useNavigate,
  HashRouter,
} from "react-router-dom";
import NotFound from "./components/notFound/NotFound";

function App() {
  const [itemSearch, setItemSearch] = useState("");
  let history = useNavigate();

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    let url = `search/${searchInput}`;
    setItemSearch(searchInput);
    history(url);
    console.log("fin", itemSearch);
  };

  /** 
   <Route path="/" element={<Header searchTerm={this.handleSubmit} />} />
        <Route path="/mountain" element={<Item searchTerm="mountain" />} />
        <Route path="/animals" element={<Item searchTerm="animals" />} />
        <Route path="/food" element={<Item searchTerm="food" />} />
        <Route path="/car" element={<Item searchTerm="car" />} />
        <Route path={url} element={<Item searchTerm={searchInput} />} />
  */
  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <Routes>
        <Route path="/" exact element={<Item searchTerm="mountain" />}></Route>
        <Route
          path="/mountain"
          exact
          element={<Item searchTerm="mountain" />}
        ></Route>
        <Route
          path="/animals"
          exact
          element={<Item searchTerm="animals" />}
        ></Route>
        <Route path="/food" exact element={<Item searchTerm="food" />}></Route>
        <Route path="/car" exact element={<Item searchTerm="car" />}></Route>
        <Route
          path={`search/:${itemSearch}`}
          exact
          element={<Item searchTerm={itemSearch} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

/*
      <Route exact path="/">
        <Header />
      </Route>
      <Route path="/mountain">
        <Item searchTerm="mountain" />
      </Route>
*/
