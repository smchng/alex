import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Kaia() {
  const AudioPlayer = () => {
    useEffect(() => {
      const audio = new Audio("/vids/clap.mp3");
      audio.play();
    }, []);

    return null;
  };
  return (
    <div>
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          className="md:h-screen md:w-auto h-auto w-screen"
          src="/imgs/p2.png"
          width={1920}
          height={1080}
          alt="hbd"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-end pl-[40rem] pb-[5vh]">
        <Link
          href="/alex"
          className="hover:bg-yellow bg-red cursor-pointer border rounded-xl border-[1.5px] px-5 pb-1 transition-colors "
        >
          <p className="text-xs">
            <strong>next</strong>
          </p>
        </Link>{" "}
      </div>
    </div>
  );
}
