import { ChevronsDown } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="mt-20 relative overflow-hidden rounded-2xl">
      <div className="w-full h-screen overflow-hidden flex items-center justify-center relative">
        <Image
          src="/images/heroImg.jpg"
          fill
          alt="hero-img"
          className="object-cover brightness-50"
        />
        <div className="absolute "></div>
      </div>
      <section className="absolute space-y-4 bottom-0 text-white lg:flex justify-between bg-linear-to-t from-purple-700/70  to-transparent w-full items-end">
        <div className="space-y-4 max-w-xl">
          <h1>Engineering Immersive Sound Experiences</h1>
          <p>
            We deliver high-fidelity audio systems and acoustic solutions,
            ensuring every note and voice is heard with perfect balance and
            crystal-clear precision.
          </p>
        </div>
        <div className="inline-flex justify-center mt-4 lg:mt-0 gap-2 font-medium">
          <p>Explore</p>
          <div className="animate-bounce">
            <ChevronsDown />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection