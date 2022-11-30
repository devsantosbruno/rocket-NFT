import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />

      <main>
        <section className="bg-nft bg-cover bg-no-repeat min-h-screen pt-[166px]">
          <div className="container px-4 mx-auto">
            <h1 className="text-violet-800 testeHeight">hello world</h1>;
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
