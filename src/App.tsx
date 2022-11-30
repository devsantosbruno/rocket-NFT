import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />

      <main>
        <section className="bg-nft bg-cover bg-no-repeat pt-[166px]">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-4 gap-10">
              <div className="flex flex-col justify-between gap-4">
                <p className="text-white text-[1.125rem]">
                  Mercado digital para colecionáveis em criptos e tokens não
                  fungível (NFT). Compre, venda e descubra ativos digitais
                  exclusivos para você.
                </p>

                <div className="flex items-end gap-2">
                  <img src="group-avatars.png" alt="" />

                  <div className="flex flex-col text-white">
                    <strong>+10</strong>
                    <p>Artistas selecionados</p>
                  </div>
                </div>
              </div>

              <h1 className="text-white font-bold text-5xl leading-[3.8125rem] col-span-2">
                Descubra a verdadeira arte digital e colecione diversas{" "}
                <span className="text-[#FF5B50]">NFTs</span>
              </h1>

              <figure>
                <img src="badge.svg" alt="" className="ml-auto" />
              </figure>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
