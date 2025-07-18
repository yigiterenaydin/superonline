"use client";

import CustomButton from "../shared/CustomButton";
import Image from "next/image";

interface ICertif {
  name?: string;
  from?: string;
  issued?: string;
  credential?: string;
  img?: string;
  title: string;
  link: string;
}

export const Certificate = () => {
  const expertCerficiates = [
    {
      name: "Zweite Klasse der Sekundarschule",
      from: "Mein Zeugnisse des zweiten Sekundarstufe",
      issued: "Ausgestellt im Februar 2025",
      credential: "",
      title: "Go to Credential Page💳",
      link: "/pdf/SekundarSchuleZeugnisse2sek.pdf",
      img: "/certif/Zeu21.png",
    },
    {
      name: "Erste Klasse der Sekundarschule",
      from: "Mein Zeugnisse des ersten Sekundarstufe",
      issued: "Ausgestellt im Jahr 2024",
      credential: "",
      title: "Go to Credential Page💳",
      link: "/pdf/SekundarSchuleZeugnisse1sek.pdf",
      img: "/certif/Zeu1.png",
    },
  ];

  // PDF veya linki direkt indir veya aç
  const handleDirectDownload = (certif: ICertif) => {
    const isPdf = certif.link.endsWith(".pdf");
    if (isPdf) {
      const aTag = document.createElement("a");
      aTag.href = certif.link;
      aTag.setAttribute("download", "");
      aTag.setAttribute("target", "_blank");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } else {
      window.open(certif.link, "_blank");
    }
  };

  return (
    <div className="mt-8 w-full max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="font-extrabold text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 mb-4">
          Meine Zeugnisse
        </h2>

        <div className="w-72 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mx-auto mb-6"></div>

        <p className="text-gray-800 text-lg lg:text-xl max-w-2xl mx-auto">
          Zeugnisse, die ich während meiner Schulzeit erhalten habe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {expertCerficiates.map((expert) => (
          <div
            key={expert.img}
            className="border-2 border-sky-500 bg-sky-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-sky-200 group transform hover:scale-105"
          >
            <div className="bg-sky-200 flex justify-center items-center border-b border-sky-500">
              <Image
                src={expert.img}
                alt={expert.name || "Certificate"}
                width={300}
                height={200}
                className="w-full h-56 object-contain"
              />
            </div>

            <div className="p-3 space-y-2">
              <h3 className="font-bold text-base text-sky-800 group-hover:text-sky-800">
                {expert.name}
              </h3>
              <p className="text-sky-700 group-hover:text-sky-700 text-xs leading-relaxed">
                {expert.from}
              </p>
              <p className="text-sky-600 group-hover:text-sky-600 text-xs">
                {expert.issued}
              </p>
              {expert.credential && (
                <p className="text-sky-600 group-hover:text-sky-600 text-xs">
                  {expert.credential}
                </p>
              )}

              <CustomButton
                btnType="button"
                title="Zeugnis ansehen"
                containerStyles="w-full mt-2 border-sky-500 bg-sky-200 hover:bg-sky-300 hover:shadow-lg transition-all duration-300 rounded-lg py-2"
                textStyles="text-sky-800 font-semibold text-xs"
                onClick={() => handleDirectDownload(expert)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};