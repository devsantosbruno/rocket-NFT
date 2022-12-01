import { ArrowUpRight } from "phosphor-react";
import { Artist } from "./components/Artist";
import { Astronaut } from "./components/Astronaut";
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

            <div className="grid grid-cols-4 gap-x-4 gap-y-14 mt-24">
              {[
                ["gallery-1.png"],
                ["gallery-2.png"],
                ["gallery-3.png"],
                ["gallery-4.png"],
                ["gallery-5.png"],
                ["gallery-6.png"],
                ["gallery-7.png"],
                ["gallery-8.png"],
              ].map(([title]) => (
                <img src={title} alt="" className="border-[1px] w-full" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0E0E0E] border-b-[1px] border-[#5A5757]">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-5">
              <div className="flex flex-col justify-evenly border-r-[1px] border-[#5A5757]">
                <div className="flex flex-col text-center">
                  <strong className="text-white text-5xl">10K+</strong>
                  <span className="text-[#5A5757] font-semibold text-xl">
                    Artes
                  </span>
                </div>

                <div className="flex flex-col text-center">
                  <strong className="text-white text-5xl">200+</strong>
                  <span className="text-[#5A5757] font-semibold text-xl">
                    Vendas
                  </span>
                </div>

                <div className="flex flex-col text-center">
                  <strong className="text-white text-5xl">20</strong>
                  <span className="text-[#5A5757] font-semibold text-xl">
                    Artistas
                  </span>
                </div>
              </div>

              <div className="col-span-4">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex gap-x-32 py-16 px-16">
                    <div className="text-white text-[1.125rem]">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Congue malesuada amet pretium lacus. Id
                        <a href="#" className="text-[#FF5B50]">
                          {" "}
                          potenti diam
                        </a>{" "}
                        et cras odio viverra. Amet, velit ut hac sit. Enim
                        ultricies mauris mattis nunc semper.
                      </p>

                      <div className="mt-16">
                        <a
                          href="#"
                          className="underline text-white hover:text-[#FF5B50] transition duration-200"
                        >
                          Lorem ipsum
                        </a>
                      </div>
                    </div>

                    <div className="text-white text-[1.125rem]">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Congue malesuada amet pretium lacus. Id
                        <a href="#" className="text-[#FF5B50]">
                          {" "}
                          potenti diam
                        </a>{" "}
                        et cras odio viverra. Amet, velit ut hac sit. Enim
                        ultricies mauris mattis nunc semper.
                      </p>

                      <div className="mt-16">
                        <a
                          href="#"
                          className="underline text-white hover:text-[#FF5B50] transition duration-200"
                        >
                          Lorem ipsum
                        </a>
                      </div>
                    </div>
                  </div>

                  <img
                    src="banner2.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0E0E0E] py-36">
          <div className="container px-4 mx-auto">
            <h2 className="text-white text-5xl font-bold">
              <span className="text-[#FF5B50]">Populares</span> da semana
            </h2>

            <div className="grid grid-cols-5 mt-40">
              <div className="flex flex-col gap-20">
                <Astronaut astronaut={1} name="Mayk Brito" rkt={1.5} />

                <Astronaut astronaut={3} name="João Inácio (Biro)" rkt={3.75} />
              </div>

              <div className="h-full col-span-3">
                <div className="h-full w-[1px] bg-[#5A5757] mx-auto"></div>
              </div>

              <div className="flex flex-col gap-20">
                <Astronaut astronaut={2} name="Jakeliny Gracielly" rkt={2.0} />

                <Astronaut astronaut={4} name="Tamires Santos" rkt={4.3} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0E0E0E] pb-36">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-white text-5xl font-bold">
              <span className="text-[#FF5B50]">Melhores</span> artistas
            </h2>

            <div className="grid grid-cols-3 gap-28 mt-20 mb-16">
              {[
                ["Mayk Brito", "80"],
                ["Jakeliny G.", "99"],
                ["João I. (Biro)", "50"],
                ["Tamires Santos", "43"],
                ["Ana Silva", "28"],
                ["Ana Silva", "20"],
              ].map(([name, quantity], index) => (
                <Artist artist={index} name={name} quantity={quantity} />
              ))}
            </div>

            <a href="#" className="text-white inline-flex gap-4">
              Ver todos os artistas <ArrowUpRight size={24} color="#FF5B50" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
