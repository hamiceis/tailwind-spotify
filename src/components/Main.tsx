import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { data } from "../service/data";

export function Main() {
  const info = data();

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="p-1 rounded-full bg-black/40">
          <ChevronLeft />
        </button>
        <button className="p-1 rounded-full bg-black/40">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {info.map((dataInfo) => (
          <>
            <a
              key={dataInfo.id}
              href="#"
              className="bg-white/5 group rounded flex gap-4 items-center overflow-hidden hover:bg-black/10 transition-colors"
            >
              <Image
                src={`/${dataInfo.image}`}
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>{dataInfo.artist}</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </>
        ))}
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Hamiceis Pereira
      </h2>

      <div className="grid grid-cols-6 gap-4 mt-4">
        {info.map(data => (
          <>
          <a key={data.id}
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            className="w-full"
            src={`/${data.image}`}
            width={104}
            height={104}
            alt="capa de album"
          />
          <strong className="font-semibold">{data.daily}</strong>
          <span className="text-sm text-zinc-400">
            Wallows Coin, Girl in red and more
          </span>
        </a>
          </>
        ))}
      </div>
    </main>
  );
}
