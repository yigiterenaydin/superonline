"use client";

import { toast } from "react-hot-toast";
import {
  FaUtensils,
  FaSwimmer,
  FaCamera,
  FaTree,
  FaMusic,
  FaWalking,
  FaFileExcel,
  FaFileWord,
} from "react-icons/fa";
import { MdSportsMartialArts } from "react-icons/md";
import { FiCode } from "react-icons/fi";

export const BackEndStacks = () => {
  const hobbies = [
    { title: "Kochen", icon: <FaUtensils /> },
    { title: "Kung-Fu", icon: <MdSportsMartialArts /> },
    { title: "Schwimmen", icon: <FaSwimmer /> },
    { title: "Musik hören", icon: <FaMusic /> },
    { title: "Natur", icon: <FaTree /> },
    { title: "Fotografieren", icon: <FaCamera /> },
    { title: "Reisen", icon: <FaWalking /> },
    { title: "Word", icon: <FaFileWord /> },
    { title: "Excel", icon: <FaFileExcel /> },
    { title: "Programmieren", icon: <FiCode /> },
  ];

  const onHandleClick = (title: string) => {
    toast.success(title.toUpperCase(), {
      icon: "🔥",
      style: {
        border: "1px solid #d4af37", // A golden-amber border
        background: "#1f2937", // Dark gray background
        color: "#f3f4f6", // Light gray text
        fontWeight: "bold",
      },
    });
  };

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 col-span-full">
      {hobbies.map((hobby) => (
        <div
          key={hobby.title}
          onClick={() => onHandleClick(hobby.title)}
          className="bg-amber-100 border-2 border-amber-500 text-amber-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition-transform duration-300 hover:scale-110 shadow-lg cursor-pointer hover:bg-amber-200"
          title={hobby.title}
        >
          <div className="text-4xl">{hobby.icon}</div>
        </div>
      ))}
    </div>
  );
};
