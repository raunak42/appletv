"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const tvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tvRef.current) {
      gsap.set(tvRef.current, {
        scale: 1.1,
        // y:120,
        // transformOrigin:"top center"
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 0,
          },
        })
        // .to(tvRef.current,{
        //   y:70
        // })
        .to(tvRef.current, {
          scale: 0.65,
          duration: 1,
        })
        .to(tvRef.current, {
          y: -800,
          duration: 1,
        });
    }
  }, []);

  return (
    <div className="h-[300vh]">
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pr-[15px]">
        <div ref={tvRef} className="relative w-full h-full">
          <Image src="/tv2.jpg" alt="TV" layout="fill" />
          <div className=" absolute w-full h-full  top-0 left-0 flex items-center justify-center">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              className="w-[98.3%] h-[97%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
