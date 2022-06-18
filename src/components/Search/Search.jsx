import { useState } from "react";

const Search = ({ handleSubmit }) => {
  const [searchWord, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e, searchWord)}>
      <input
        type="text"
        placeholder="Search..."
        value={searchWord}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
