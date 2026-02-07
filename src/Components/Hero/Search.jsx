import { useState } from "react";

import SearchIcon from "../../assets/images/icon-search.svg";

export default function Search({ searchWeather, loading, error }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    searchWeather(input);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="search-box">
        <span className="search-icon">
          <img src={SearchIcon} />
        </span>
        <input
          type="text"
          aria-label="Search city"
          className="hero__input"
          value={input}
          placeholder="Search for a place..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button className="hero__search--btn" type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p role="alert">{error}</p>}
    </form>
  );
}
