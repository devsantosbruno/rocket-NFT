export function Header() {
  return (
    <header className="backdrop-blur-[2px] fixed top-0 left-0 right-0 bg-blur-xl">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between gap-8 py-14">
          <a href="#">
            <img src="logo.svg" alt="" />
          </a>

          <nav className="flex flex-shrink-0 space-x-14">
            {[
              ["Comprar NFT", "/home"],
              ["Sobre", "/home"],
              ["FAQ", "/home"],
            ].map(([title, url]) => (
              <a
                href={url}
                className="text-lg text-white hover:text-[#FF5B50] transition duration-200"
              >
                {title}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className="flex items-center gap-3 font-bold bg-white text-black py-3 px-5"
          >
            <img src="logo_MetaMask.svg" alt="" />
            Conectar carteira
          </a>
        </div>
      </div>
    </header>
  );
}
