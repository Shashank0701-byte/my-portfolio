import React, { useEffect, useState } from "react";

import PROFILE_PIC from "../assets/images/profile-pic.jpg";
import ICON_1 from "../assets/images/icon-1.png"; // React
import ICON_2 from "../assets/images/icon-2.png"; // JavaScript
import ICON_3 from "../assets/images/icon-3.png"; // HTML5
import ICON_4 from "../assets/images/icon-4.png"; // Node.js
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
  // ✅ Add loader logic
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sound = new Audio("/windows-startup.mp3"); // optional
      sound.play();
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  // ✅ Show loader if loading
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white font-mono">
        <img
          src="/windows-logo.png"
          alt="Windows Logo"
          className="w-24 h-24 animate-pulse mb-6"
        />
        <p className="text-lg">Loading Windows...</p>
        <div className="mt-4 w-48 h-1 bg-gray-700 overflow-hidden rounded-full">
          <div className="h-full w-1/3 bg-blue-500 animate-loading-bar"></div>
        </div>
      </div>
    );
  }

  // 🔽 Unchanged rest of your component
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">👋Hi, I'm Shashank Chakraborty</h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">Building Scalable & User Centric Web Apps</h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I'm a passionate Full Stack Developer crafting responsive,
            accessible, and dynamic web experiences using React, Node.js, and
            Tailwindcss.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">View My Work</button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">Download Resume</button>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic"/>

          {/* --- ICONS WITH TOOLTIPS --- */}

          <div className="group icon-img -left-10 bottom-20 rotate-[1.75deg]">
            <img src={ICON_1} alt="Icon 1" className="w-full h-full" />
            <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              React.js
            </div>
          </div>

          <div className="group icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]">
            <img src={ICON_2} alt="Icon 2" className="w-full h-full" />
            <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              JavaScript (ES6+)
            </div>
          </div>

          <div className="group icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]">
            <img src={ICON_3} alt="Icon 3" className="w-full h-full" />
            <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              HTML5
            </div>
          </div>

          <div className="group icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom rotate-[4.75deg]">
            <img src={ICON_4} alt="Icon 4" className="w-full h-full" />
            <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              Node.js
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
