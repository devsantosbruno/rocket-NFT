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
          <a href="#">
            <img src="logo.svg" alt="" />
          </a>

          <button
            type="button"
            onClick={backToTop}
            className="bg-[#FF5B50] p-6"
          >
            <ArrowUp size={22} color="black" weight="bold" />
          </button>
        </div>
      </div>

      <div className="border-t-[1px] border-b-[1px] border-[#5A5757]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-3">
            <div className="border-r-[1px] border-[#5A5757] pt-16 pb-12">
              <h3 className="text-white text-3xl font-normal">
                Fique por dentro de <br />
                <span className="text-[#FF5B50]">todas as novidades</span>
              </h3>

              <div className="flex mt-6">
                <input
                  type="text"
                  placeholder="nft@rocketseat.com.br"
                  className="bg-[#0D0D0D] text-white placeholder:text-[#5A5757] px-4 py-4 border-none outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black font-bold px-6 py-4"
                >
                  Enviar
                </button>
              </div>
            </div>

            <div className="col-span-2 flex justify-around pt-16 pb-12">
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Empresa</h4>
                <nav className="flex flex-col space-y-4">
                  {[
                    ["Sobre", "/home"],
                    ["Serviços", "/home"],
                    ["Time", "/home"],
                    ["Carreira", "/home"],
                  ].map(([title, url]) => (
                    <div>
                      <a
                        href={url}
                        className="text-white text-lg text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
                      >
                        {title}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-2">Mapa</h4>
                <nav className="flex flex-col space-y-4">
                  {[
                    ["Galeria", "/home"],
                    ["Populares", "/home"],
                    ["Vendas", "/home"],
                    ["Contato", "/home"],
                  ].map(([title, url]) => (
                    <div>
                      <a
                        href={url}
                        className="text-white text-lg text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
                      >
                        {title}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              <div>
                <h4 className="text-white font-bold text-xl mb-2">Links</h4>
                <nav className="flex flex-col space-y-4">
                  {[
                    ["FAQs", "/home"],
                    ["Termos", "/home"],
                    ["Política", "/home"],
                    ["Ajuda", "/home"],
                  ].map(([title, url]) => (
                    <div>
                      <a
                        href={url}
                        className="text-white text-lg text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
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
        <div className="flex items-center justify-between">
          <a
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="text-xl text-[#5A5757] hover:text-[#FF5B50] transition duration-200"
          >
            www.rocketseat.com.br
          </a>

          <div className="flex items-center space-x-12">
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
