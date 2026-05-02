import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  const fallbackLabel = Language
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        {TechStackIcon ? (
          <img
            src={TechStackIcon}
            alt={`${Language} icon`}
            className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
          />
        ) : (
          <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-[#6366f1]/25 to-[#a855f7]/25 border border-white/10 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-white">
              {fallbackLabel}
            </span>
          </div>
        )}
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 
