export function Artist(props: any) {
  return (
    <div className="bg-[#252525] group hover:bg-[#FF5B50] transition duration-200 flex items-center gap-10 px-8 py-6">
      <img src={`artist-${props.artist}.png`} alt="" />

      <div className="text-start">
        <h4 className="text-white text-xl font-normal">{props.name}</h4>
        <h4 className="text-[#FF5B50] group-hover:text-white transition duration-200 text-xl font-normal">
          {props.quantity} Fotografias
        </h4>
      </div>
    </div>
  );
}
