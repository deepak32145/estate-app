import { useState } from "react";
import "./SearchBar.css";

const types = ["rent", "buy"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  return <div>SearchBar</div>;
};

export default SearchBar;
