import React from "react";

const Search = ({ setCity, onClick, color }) => {

  return (
    <header style={color[0]}>
      <form>
        <input
          placeholder="Enter a country"
          id="input"
          onChange={(e) => setCity(e.target.value)}

        ></input>
        <button id="btn" onClick={(e) => onClick(e)}>
          FIND WEATHER
        </button>
      </form>
    </header >
  );
};
export default Search;
