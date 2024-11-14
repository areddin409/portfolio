import { FaLocationArrow } from "react-icons/fa6"

import MagicButton from "./MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Spotlights container */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      {/* Content container */}
      <div className="relative h-full w-full flex items-center justify-center pt-36 pb-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center z-10">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Design. Develop. Deploy. Deliver."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-colors">
              Andrew
            </span>
            , a{" "}
            <span className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 transition-colors">
              Full Stack Developer
            </span>{" "}
            crafting modern web solutions in{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 transition-colors">
              Little Rock, Arkansas
            </span>
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
