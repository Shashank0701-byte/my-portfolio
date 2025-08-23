// src/components/IntroAnimation.jsx
import React, { useState, useEffect } from 'react';

const skills = ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Express.js'];

const IntroAnimation = ({ onFinish }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const skillTimer = setInterval(() => {
      setIsChanging(true);
      
      setTimeout(() => {
        setCurrentSkillIndex(prev => {
          if (prev < skills.length - 1) {
            setIsChanging(false);
            return prev + 1;
          } else {
            // After showing all skills, fade out and go to hero
            clearInterval(skillTimer);
            setFadeOut(true);
            setTimeout(() => {
              onFinish();
            }, 1000);
            return prev;
          }
        });
      }, 300); // Transition delay
    }, 1200); // Show each skill for 1.2 seconds

    return () => clearInterval(skillTimer);
  }, [onFinish]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Enhanced animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <div className="text-xl md:text-2xl text-white mb-8 animate-pulse font-medium">
          I work with
        </div>
        <div 
          className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-300 ${
            isChanging ? 'scale-110 opacity-50' : 'scale-100 opacity-100'
          }`}
        >
          {skills[currentSkillIndex]}
        </div>
        <div className="text-sm text-gray-300 animate-pulse">
          {currentSkillIndex + 1} of {skills.length}
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default IntroAnimation;
