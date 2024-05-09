import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/global.css";

import Home from "@/pages/index";
import Alex from "@/pages/alex";
import Vid from "@/pages/vid";

import Head from "next/head";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Alex";

    const handleRouteChange = (url: string) => {
      document.title = "Alex's Special Day | " + url;
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const currentPage = router.pathname;
  return (
    <>
      <main className={"bg-navy"}>
        <section className=" px-[1vw]">
          {currentPage === "/" && <Home />}
          {currentPage === "/alex" && <Alex />}
          {currentPage === "/vid" && <Vid />}
        </section>
      </main>
    </>
  );
}
