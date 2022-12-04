import * as Dialog from "@radix-ui/react-dialog";
import { List, X } from "phosphor-react";

export function Header() {
  return (
    <header className="backdrop-blur-[2px] fixed top-0 left-0 right-0 bg-blur-xl">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between gap-8 py-7 lg:py-14">
          <a href="#Home" className="max-w-[200px] md:max-w-none">
            <img src="logo.svg" alt="" />
          </a>

          <nav className="hidden lg:flex flex-shrink-0 space-x-14">
            {[
              ["Comprar NFT", "#Home"],
              ["Sobre", "#About"],
              ["FAQ", "#Footer"],
            ].map(([title, url], index) => (
              <a
                key={index}
                href={url}
                className="text-lg text-white hover:text-[#FF5B50] transition duration-200"
              >
                {title}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center justify-center gap-3 font-bold bg-white text-black py-3 px-5">
            <img src="logo_MetaMask.svg" alt="" />
            Conectar carteira
          </div>

          <div className="lg:hidden flex-shrink-0">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button type="button">
                  <List size={30} color="white" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="bg-black/70 fixed inset-0" />

                <Dialog.Content className="flex flex-col items-center justify-center bg-white rounded-lg shadow-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[450px] min-h-[45vh] max-h-[85vh] p-6 outline-none">
                  <Dialog.Close
                    asChild
                    className="flex ml-auto fixed top-6 right-6"
                  >
                    <button type="button">
                      <X size={30} color="black" />
                    </button>
                  </Dialog.Close>

                  <nav className="flex flex-col text-center mt-20 pb-4 overflow-y-auto">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-3 font-bold bg-black text-white py-3 px-5 mb-6"
                    >
                      <img src="logo_MetaMask.svg" alt="" />
                      Conectar carteira
                    </a>
                    {[
                      ["Comprar NFT", ""],
                      ["Sobre", ""],
                      ["FAQ", ""],
                    ].map(([title, url], index) => (
                      <a
                        key={index}
                        href={url}
                        className="text-lg text-black hover:text-[#FF5B50] transition duration-200"
                      >
                        {title}
                      </a>
                    ))}
                  </nav>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  );
}
