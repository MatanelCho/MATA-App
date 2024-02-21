import React from "react";
import { useSearchParams } from "react-router-dom";


const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");


  return (
    <div>
      <h2>Search Results</h2>
      <p>Searching for: {query}</p>
    </div>
  );
};

export default SearchResultsPage;
