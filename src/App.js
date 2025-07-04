import "./App.css";
import "./components/card.js";
import { Card } from "./components/card.js";

function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center py-[120px]">
      <Card
        title="Top 5 Living Room Inspirations"
        description="Curated vibrant colors for your living, make it pop & calm in the same time."
        category="Interior"
        image="spacejoy-YqFz7UMm8qE-unsplash.jpg"
        link="https://example.com"
      />
    </div>
  );
}
export default App;
