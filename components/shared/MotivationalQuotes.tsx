import React, { useState } from "react";

const quotes = [
  "Träume nicht dein Leben, lebe deinen Traum.",
  "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren.",
  "Erfolg ist die Summe kleiner Anstrengungen.",
  "Gib niemals auf!",
  "Ohne Fleiß kein Preis.",
  "Du kannst mehr, als du denkst.",
  "Jeder Tag ist eine neue Chance.",
  "Mach dein Ding!",
  "Glaube an dich selbst.",
  "Alles beginnt mit dem ersten Schritt.",
  "Der Weg ist das Ziel.",
  "In der Ruhe liegt die Kraft.",
  "Man lernt nie aus.",
  "Zeit heilt alle Wunden.",
  "Weniger ist mehr.",
  "Alles hat seine Zeit.",
  "Heute ist der erste Tag vom Rest deines Lebens.",
  "Wer loslässt, hat beide Hände frei.",
  "Am Ende wird alles gut.",
  "Sei du selbst, alle anderen gibt es schon.",
  "Liebe ist das schönste Gefühl.",
  "Freunde sind die Familie, die wir wählen.",
  "Ein Lächeln sagt mehr als tausend Worte.",
  "Geteilte Freude ist doppelte Freude.",
  "Liebe kennt keine Grenzen.",
  "Ein Freund ist ein Geschenk.",
  "Wo Liebe ist, ist auch Leben.",
  "Zusammen ist man weniger allein.",
  "Vertrauen ist der Anfang von allem.",
  "Echte Freunde sind selten – und kostbar.",
  "Kreativität kennt keine Regeln.",
  "Mut steht am Anfang des Handelns.",
  "Tu, was du liebst.",
  "Wage den Sprung ins Ungewisse.",
  "Jeder Fehler ist eine Lektion.",
  "Anders ist besser als perfekt.",
  "Dein Weg, deine Regeln.",
  "Phantasie ist wichtiger als Wissen.",
  "Sei neugierig!",
  "Träume sind der Anfang der Realität.",
  "Alles ist möglich.",
  "Stillstand ist Rückschritt.",
  "Du bist, was du denkst.",
  "Jeder Anfang ist schwer.",
  "Es gibt keinen Weg zum Glück – Glück ist der Weg.",
  "Jeder Tag zählt.",
  "Niemand ist perfekt.",
  "Es ist nie zu spät.",
  "Glück ist eine Entscheidung.",
  "Vertrauen ist Mut.",
  "Ein Tag ohne Lächeln ist ein verlorener Tag.",
  "Nur wer seinen eigenen Weg geht, kann nicht überholt werden.",
  "Wer nichts wagt, der nichts gewinnt.",
  "Das Leben ist zu kurz für irgendwann.",
  "Glück ist, wenn Gelegenheit auf Vorbereitung trifft.",
  "Tu heute etwas, worauf du morgen stolz sein kannst.",
  "Verändere die Welt, indem du dich veränderst.",
  "Wenn du es träumen kannst, kannst du es tun.",
  "Man sieht nur mit dem Herzen gut.",
  "Die Zukunft gehört denen, die an ihre Träume glauben.",
  "Ziele sind Träume mit einer Deadline.",
  "Schwierigkeiten sind dazu da, um überwunden zu werden.",
  "Ein neuer Tag, ein neues Glück.",
  "Jede Reise beginnt mit dem ersten Schritt.",
  "Mach es einfach.",
  "Wähle einen Beruf, den du liebst.",
  "Einfach anfangen.",
  "Du bist stärker, als du glaubst.",
  "Gib jedem Tag die Chance, der schönste deines Lebens zu sein.",
  "Die beste Zeit ist jetzt.",
  "Lerne aus der Vergangenheit, träume von der Zukunft, lebe in der Gegenwart.",
  "Jeder ist seines Glückes Schmied.",
  "Die Welt verändert sich durch dein Vorbild.",
  "Wer nicht fragt, bleibt dumm.",
  "Nur wer aufgibt, hat verloren.",
  "Fang an, wo du bist. Nutze, was du hast.",
  "Lächle – und die Welt verändert sich.",
  "Dein Leben, deine Entscheidung.",
  "Stark sein bedeutet nicht, nie zu fallen.",
  "Die größten Abenteuer beginnen im Kopf.",
  "Lass los, was du nicht ändern kannst.",
  "Es zählt, was du tust.",
  "Bleib neugierig.",
  "Wachse über dich hinaus.",
  "Träume groß.",
  "Denke positiv.",
  "Ein Ziel ohne Plan bleibt ein Wunsch.",
  "Achte auf deine Gedanken.",
  "Dankbarkeit ist der Schlüssel zum Glück.",
  "Zeit ist das wertvollste Gut.",
  "Jeder Tag ist ein Geschenk.",
  "Vertraue dem Prozess.",
  "Nur du bestimmst deinen Wert.",
  "Du bist einzigartig.",
  "Worte können Welten verändern.",
  "Hab den Mut, anders zu sein.",
  "Verfolge deine Leidenschaft.",
  "Lass dich nicht aufhalten.",
  "Fehler machen dich besser.",
  "Genieße den Moment.",
  "Sei stolz auf dich.",
  "Du bist genug."
];

export default function MotivationalQuotes() {
  const [quote, setQuote] = useState(() => {
    const idx = Math.floor(Math.random() * quotes.length);
    return quotes[idx];
  });

  const handleNewQuote = () => {
    let idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <span className="text-lg font-semibold text-center">{quote}</span>
      <button
        onClick={handleNewQuote}
        className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition"
      >
        Neues Zitat
      </button>
    </div>
  );
} 