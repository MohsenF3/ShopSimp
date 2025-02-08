import React from "react";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero-bg-color flex min-h-[570px] items-center justify-center overflow-hidden rounded-3xl px-5 shadow-lg sm:min-h-[620px]">
        <div className="container pb-8 sm:pb-0">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
}
