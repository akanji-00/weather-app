import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

import { useWeather } from "./hooks/useWeather";

export default function App() {
  const weather = useWeather();

  return (
    <div className="container">
      <Header {...weather} />
      <Hero {...weather} />
    </div>
  );
}
