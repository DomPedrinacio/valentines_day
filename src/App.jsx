import Hero from "./sections/Hero";
import LoveLetter from "./sections/LoveLetter";
import Venom from "./sections/Venom";
import Story from "./sections/Story";

import Gallery from "./sections/Gallery";
import Universes from "./sections/Universes";
import Counter from "./sections/Counter";
import Reasons from "./sections/Reasons";
import Surprise from "./sections/Surprise";
import FinalMessage from "./sections/FinalMessage";

function App() {
  return (
    <main className="app">
      <Hero />

      <LoveLetter />

      <Gallery />

      <Venom />

      <Story />

      <Universes />

      <Counter />

      <Reasons />

      <Surprise />

      <FinalMessage />
    </main>
  );
}

export default App;