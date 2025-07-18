import React from "react";

interface JourneyProps {
  // headingColor prop removed as it's not used
}

export const Journey: React.FC<JourneyProps> = () => {
  const experiences = [
    {
      id: 1,
      title: "Kindergarten Döltschiweg",
      timespan: "Von August 2014 bis Juli 2016.",
      place: "Sammle meine ersten Erfahrungen",
    },
    {
      id: 2,
      place: "Lerne verschiedene Fächer kennen.",
      title: "Schule Küngenmatt",
      timespan: "Von August 2017 bis Juli 2023",
    },
     {
      id: 3,
      place: "Ich lerne schwierigere Fächer kennen.",
      title: "Schule Rebhügel",
      timespan: "Von August 2023 bis Heute",
    },
  ];

  return (
    <div className="mt-8 max-w-6xl mx-auto">
       <div className="text-center mb-8">
        <h2 className="font-bold text-transparent text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 mb-2 leading-tight">
           Meine Schulische Laufbahn
        </h2>
        <hr className="w-96 mx-auto p-1 bg-gradient-to-r from-sky-400 to-sky-600 border-none rounded-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {experiences.map((experience) => (
          <div
            key={experience.place}
            className="bg-sky-100 border-2 border-sky-500 text-sky-800 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105 duration-300 group hover:bg-sky-200"
          >
            <h3 className="text-lg font-bold text-sky-800 mb-3">
              {experience.place}
            </h3>
            <h4 className="font-semibold text-sky-700 mb-2 text-base">
              {experience.title}
            </h4>
            <p className="text-sky-600 text-sm italic">
              {experience.timespan}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}; 