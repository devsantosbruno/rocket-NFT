export function Artist(props: any) {
  return (
    <div className="bg-[#252525] group hover:bg-[#FF5B50] transition duration-200 flex flex-row sm:flex-row items-center justify-center gap-3 md:gap-10 px-4 xl:px-8 py-3 xl:py-6">
      <img src={`artist-${props.artist}.png`} alt="" className="" />

      <div className="text-start sm:text-start">
        <h4 className="text-white text-lg md:text-xl font-normal">
          {props.name}
        </h4>
        <h4 className="text-[#FF5B50] group-hover:text-white transition duration-200 text-lg md:text-xl font-normal">
          {props.quantity} Fotografias
        </h4>
      </div>
    </div>
  );
}
