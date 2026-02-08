import "./hero.css";
import Search from "./Search";
import MainSection from "./MainSection";

export default function Hero({
  searchWeather,
  loading,
  error,
  current,
  daily,
}) {
  return (
    <main className="hero">
      <h1 className="hero__title">How's the sky looking today?</h1>

      <Search searchWeather={searchWeather} loading={loading} error={error} />
      <MainSection current={current} loading={loading} daily={daily} />
    </main>
  );
}
