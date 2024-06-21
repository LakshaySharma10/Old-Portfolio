import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import Image from 'next/image';
import profile from '../public/profile.png';

const Hero = () => {
  return (
    <div className="pt-20 pb-10 md:pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
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

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
    </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center justify-between">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <div className="text-left">
            <TextGenerateEffect
              words="Transforming ideas into reality, one line of code at a time"
              className="text-[40px] md:text-5xl lg:text-6xl mb-4"
            />

            <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Lakshay, a Software Developer based in India.
            </p>

            <a href="#about">
              <MagicButton
                title="Curious about me?"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="ml-8">
            <Image
              src={profile}
              alt='Profile'
              className='custom-animation border-3 border-[#2d2e32] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]'
              width={900}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
