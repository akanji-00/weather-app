import "./hero.css";
import MainSection from "./MainSection";
import Search from "../../assets/images/icon-search.svg";

export default function Hero() {
  return (
    <main className="hero">
      <h1 className="hero__title">How's the sky looking today?</h1>

      <div className="search-container">
        <div className="search-box">
          <img src={Search} />
          <input
            className="hero__input"
            type="search"
            name="search"
            id="search"
            placeholder="Search for a place..."
          />
        </div>
        <button className="hero__search--btn" type="submit">
          Search
        </button>
      </div>

      <MainSection />
    </main>
  );
}
