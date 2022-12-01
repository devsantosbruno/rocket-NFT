import {
  ArrowUp,
  EnvelopeSimple,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <div className="bg-[#252525]">
      <div className="container px-4 mx-auto pt-20 pb-14">
        <div className="flex items-center justify-between">
          <a href="#" className="max-w-[200px] md:max-w-none">
            <img src="logo.svg" alt="" />
          </a>

          <button
            type="button"
            onClick={backToTop}
            className="bg-[#FF5B50] p-3 md:p-6"
          >
            <ArrowUp size={22} color="black" weight="bold" />
          </button>
        </div>
      </div>

      <div className="border-t-[1px] border-b-[1px] border-[#5A5757]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-3">
            <div className="lg:border-r-[1px] lg:border-[#5A5757] pt-16 pb-12 text-center lg:text-start">
              <h3 className="text-white text-2xl sm:text-3xl font-normal">
                Fique por dentro de <br />
                <span className="text-[#FF5B50]">todas as novidades</span>
              </h3>

              <div className="flex justify-center lg:justify-start mt-6">
                <input
                  type="text"
                  placeholder="nft@rocketseat.com.br"
                  className="bg-[#0D0D0D] text-white placeholder:text-[#5A5757] px-3 sm:px-4 py-4 border-none outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black font-bold px-3 sm:px-6 py-4"
                >
                  Enviar
                </button>
              </div>
            </div>

            <div className="col-span-2 flex justify-between md:justify-around pt-16 lg:pb-12">
              <div>
                <h4 className="text-white font-bold text-md sm:text-xl mb-2">
                  Empresa
                </h4>
                <nav className="flex flex-col space-y-4">
                  {[
                    ["Sobre", "/home"],
                    ["Serviços", "/home"],
                    ["Time", "/home"],
                    ["Carreira", "/home"],
                  ].map(([title, url], index) => (
                    <div>
                      <a
                        key={index}
                        href={url}
                        className="text-md sm:text-lg text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
                      >
                        {title}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              <div>
                <h4 className="text-white font-bold text-md sm:text-xl mb-2">
                  Mapa
                </h4>
                <nav className="flex flex-col space-y-4">
                  {[
                    ["Galeria", "/home"],
                    ["Populares", "/home"],
                    ["Vendas", "/home"],
                    ["Contato", "/home"],
                  ].map(([title, url], index) => (
                    <div>
                      <a
                        key={index}
                        href={url}
                        className="text-md sm:text-lg text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
                      >
                        {title}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              <div>
                <h4 className="text-white font-bold text-md sm:text-xl mb-2">
                  Links
                </h4>
                <nav className="flex flex-col space-y-4">
                  {[
                    ["FAQs", "/home"],
                    ["Termos", "/home"],
                    ["Política", "/home"],
                    ["Ajuda", "/home"],
                  ].map(([title, url], index) => (
                    <div>
                      <a
                        key={index}
                        href={url}
                        className="text-md sm:text-lg text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
                      >
                        {title}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between">
          <a
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="text-xl text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
          >
            www.rocketseat.com.br
          </a>

          <div className="flex items-center space-x-6 md:space-x-12">
            <a href="#" target="_blank">
              <InstagramLogo
                size={24}
                className="text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
              />
            </a>
            <a href="#" target="_blank">
              <YoutubeLogo
                size={24}
                className="text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
              />
            </a>
            <a href="#" target="_blank">
              <TwitterLogo
                size={24}
                className="text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
              />
            </a>
            <a href="#" target="_blank">
              <EnvelopeSimple
                size={24}
                className="text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
