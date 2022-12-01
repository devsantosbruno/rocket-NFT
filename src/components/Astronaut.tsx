import { ArrowUpRight } from "phosphor-react";

export function Astronaut(props: any) {
  return (
    <div className="max-w-[450px] mx-auto">
      <div className="flex items-center justify-between text-white text-3xl">
        <h3>Astronauta {props.astronaut}</h3>
        <ArrowUpRight size={24} />
      </div>

      <div className="flex items-center justify-between text-xl mt-2 sm:mt-10 mb-3 sm:mb-6">
        <h3 className="text-[#5A5757]">{props.name}</h3>
        <span className="text-[#FF5B50] flex-shrink-0">{props.rkt} RKT</span>
      </div>

      <img
        src={`astronaut-${props.astronaut}.png`}
        alt=""
        className="w-full max-h-48 object-cover object-center"
      />
    </div>
  );
}
