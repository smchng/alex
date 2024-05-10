import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Alex() {
  return (
    <div>
      <div className="absolute inset-0 flex justify-center items-center">
        <video
          className="md:h-screen md:w-auto h-auto w-screen"
          autoPlay
          //   controls
          loop
        >
          <source src="/vids/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
