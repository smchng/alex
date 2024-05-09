import "@/styles/global.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  function playVideo() {
    setShowMore(true);
  }

  function playAudio() {
    const newAudio = new Audio("/vids/clap.mp3");
    newAudio.play();
    setAudio(newAudio);
  }

  function stopAudio() {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  return (
    <main>
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          className="md:h-screen md:w-auto h-auto w-screen"
          src="/imgs/bg.png"
          width={1920}
          height={1080}
          alt="hbd"
        />
      </div>
      <div
        className={`${
          isFlipped ? "hidden" : ""
        } absolute flex justify-center items-end w-screen h-screen `}
      >
        <div className="w-screen h-screen bg-black"></div>
      </div>

      <div>
        {showMore ? (
          <div className="absolute inset-0 flex justify-center items-end pl-[40rem] pb-[5vh]">
            <Link
              href="/alex"
              onClick={stopAudio}
              className="hover:bg-yellow bg-red cursor-pointer border rounded-xl border-[1.5px] px-5 pb-1 transition-colors "
            >
              <p className="text-xs">
                <strong>next</strong>
              </p>
            </Link>{" "}
          </div>
        ) : (
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              onClick={() => {
                playAudio();
                playVideo();
              }}
              className="hover:bg-yellow bg-red cursor-pointer border rounded-xl border-[1.5px] px-5 pb-1 transition-colors"
            >
              <p className="text-xs">
                <strong>click me</strong>
              </p>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
