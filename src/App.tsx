import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styles/global.css";

export function App() {
  return (
    <div className="bg-nft">
      <Header />
      <div className="container px-4 mx-auto">
        <h1 className="text-violet-800">hello world</h1>;
      </div>
      <Footer />
    </div>
  );
}
