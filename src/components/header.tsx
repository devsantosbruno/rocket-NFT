export function Header() {
  return (
    <div>
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
              <a href={url} className="text-white text-lg">
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
    </div>
  );
}
