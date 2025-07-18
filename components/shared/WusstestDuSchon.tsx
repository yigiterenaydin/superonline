import React, { useState } from "react";

const facts = [
  "Die längste deutsche Stadtname ist Hellschen-Heringsand-Unterschaar.",
  "Eine Schnecke kann bis zu drei Jahre schlafen.",
  "Kühe haben beste Freunde und werden gestresst, wenn sie getrennt werden.",
  "Die meisten Menschen können ihre eigene Ellbogen nicht lecken.",
  "Die menschliche Nase kann über eine Billion verschiedene Gerüche unterscheiden.",
  "Bananen sind Beeren, Erdbeeren nicht.",
  "Goldfische können sich an Dinge bis zu 5 Monate erinnern.",
  "Die meisten Menschen atmen etwa 20.000 Mal am Tag.",
  "Der Eiffelturm kann sich im Sommer um bis zu 15 cm ausdehnen.",
  "Pinguine machen ihren Heiratsantrag mit einem Kieselstein.",
  "In Japan gibt es mehr Haustiere als Kinder.",
  "Ein Strauß kann schneller laufen als ein Pferd.",
  "Der erste Wecker konnte nur um 4 Uhr klingeln.",
  "Schlafmangel kann schlimmer sein als Trunkenheit.",
  "Ein Tag auf der Venus ist länger als ein Jahr auf der Venus.",
  "Einige Schildkröten atmen durch ihren Hintern.",
  "Ein Blitz ist fünfmal heißer als die Oberfläche der Sonne.",
  "Der Schmetterling schmeckt mit seinen Füßen.",
  "Oktopusse haben neun Gehirne.",
  "Wasser kann gleichzeitig gefrieren und kochen – das nennt man Tripelpunkt.",
  "Honig verdirbt nie – man kann Tausende Jahre alten Honig essen.",
  "Seesterne haben kein Gehirn.",
  "Tintenfische haben drei Herzen.",
  "Mäuse singen, wenn sie verliebt sind – für das menschliche Ohr nicht hörbar.",
  "Ein Känguru kann nicht rückwärts gehen.",
  "Katzen können über 100 verschiedene Laute von sich geben."
];

export default function WusstestDuSchon() {
  const [fact, setFact] = useState(() => {
    const idx = Math.floor(Math.random() * facts.length);
    return facts[idx];
  });

  const handleNewFact = () => {
    let idx = Math.floor(Math.random() * facts.length);
    setFact(facts[idx]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <span className="text-lg font-semibold text-center">{fact}</span>
      <button
        onClick={handleNewFact}
        className="mt-2 px-4 py-2 bg-sky-500 text-white rounded-xl shadow hover:bg-sky-600 transition"
      >
        Noch ein Fakt
      </button>
    </div>
  );
} 