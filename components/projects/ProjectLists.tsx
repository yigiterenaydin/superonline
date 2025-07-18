"use client";

import { useState } from 'react';
import Image from "next/image";
import { SiReact, SiPython, SiOpenai, SiSharp, SiUnity } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoHtml5,
} from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import CustomButton from "../shared/CustomButton";

interface ProjectListsProps {
  headingColor?: string;
}

export const ProjectLists: React.FC<ProjectListsProps> = ({ headingColor }) => {
  const projects = [
    {
      name: "Zürcher Kantonalbank Schnupperparcours KV Branche Bank",
      description:
        "Ich erhielt einen vielseitigen Einblick in die kaufmännische Ausbildung bei der Zürcher Kantonalbank, inklusive Tätigkeiten, Lehrablauf, Lernorte sowie Austausch mit Mitarbeitenden und Informationen zum Bewerbungsprozess..",
      link: "/certif/KBSP.pdf",
      img: "/project/KBSP.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-orange-600 w-full h-full" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Zürcher Kantonalbank ",
      description:
        "Einblick in die Zürcher Kantonalbank und ihre Ausbildungswelt, erste Erfahrungen in der Informatik, Gestaltung einer einfachen Website mit HTML/CSS sowie Austausch mit Lernenden, Mitarbeitenden und Ausbildungsverantwortlichen.",
      link: "/certif/KB5.pdf",
      img: "/project/KB.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-orange-600 w-full h-full" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "UBS BANK ",
      description:
        "Ich erhielt einen spannenden Einblick in zentrale Aufgabenbereiche der UBS, lernte spielerisch bankspezifische Themen kennen und bekam Informationen zur Lehre und zum Rekrutierungsprozess, ergänzt durch Gespräche mit Lernenden und Mitarbeitenden.",
      link: "/certif/ubs.pdf",
      img: "/project/UBS.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-orange-600 w-full h-full" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Kornhaus Verwaltungs AG ",
      description:
        "Ich erhielt einen spannenden Einblick in zentrale Aufgabenbereiche der Kornhaus Verwaltung.",
      link: "/certif/korn.pdf",
      img: "/project/KORN.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-orange-600 w-full h-full" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Ergon Smart Software ",
      description:
        "Ich erhielt einen Einblick in die Applikationsentwicklung bei Ergon Informatik AG, lernte Projekte und Anforderungen kennen und konnte mich mit Lernenden austauschen.",
      link: "/certif/ergon.pdf",
      img: "/project/ERGON.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-orange-600 w-full h-full" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "E. Weber & Cie AG  ",
      description:
        "Während des Schnuppertags erhielt ich einen vielseitigen Einblick in die kaufmännischen Abläufe eines großen Unternehmens – insbesondere in die Bereiche Kundendienst, Buchhaltung, Einkauf, Marketing und Verkauf.",
      link: "/certif/Eweber.pdf",
      img: "/project/EW.png",
      stacks: [
        {
          name: "C#",
          logo: <SiSharp className="text-orange-600 w-full h-full" />,
        },
        {
          name: "Unity",
          logo: <SiUnity className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Zürcher KantonalbankInformationsveranstaltung KV Branche Bank Mediamatik.",
      description:
        "Ich erhielt einen Einblick in die Zürcher Kantonalbank, den Ablauf der KV- und Mediamatik-Lehre, lernte die drei Lernorte kennen und tauschte mich mit Lernenden und Ausbildungsverantwortlichen aus.",
      link: "/certif/KB4.pdf",
      img: "/project/KB4.png",
      stacks: [
        {
          name: "Java",
          logo: <BiLogoJava className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Sunrise GmbH",
      description:
        " Teilnahme am informationstag mit Fokus auf Einblicke in die Telekommunikationsbranche.",
      link: "/certif/Sun.pdf",
      img: "/project/SUN.png",
      stacks: [
        {
          name: "CSS",
          logo: <BiLogoCss3 className="text-orange-600 w-full h-full" />,
        },
        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-orange-600 w-full h-full" />,
        },
        {
          name: "HTML",
          logo: <BiLogoHtml5 className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Zürcher Kantonalbank Informationsveranstaltung Informatik Entwicklung digitales Business",
      description:
        "Ich lernte die Zürcher Kantonalbank und ihre Ausbildungswelt kennen, erhielt Einblick in die IT- und EDB-Lehre, die drei Lernorte sowie den Bewerbungsprozess und konnte mich mit Lernenden und Ausbildungsverantwortlichen austauschen.",
      link: "/certif/KB2.pdf",
      img: "/project/KB3.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-orange-600 w-full h-full" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "EWZ Berufsinformations Veranstaltung",
      description:
        "Ich durfte einen spannenden Schnuppertag bei EWZ erleben. Dabei erhielt ich einen Einblick in die Tätigkeiten und Ausbildungswege des Unternehmens. Ich konnte Fragen stellen, mich mit Mitarbeitenden und Lernenden austauschen und habe ein besseres Verständnis für die verschiedenen Berufsmöglichkeiten bei EWZ gewonnen.",
      link: "/certif/EWZ.pdf",
      img: "/project/EWZ.png",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-orange-600 w-full h-full" />,
        },
        {
          name: "OpenAI",
          logo: <SiOpenai className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Post Immobilien AG, Zürich",
      description:
        " Einblick in die kaufmännischen Abläufe eines grossen Unternehmens.",
      link: "/certif/kita.pdf",
      img: "/project/PO.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-orange-600 w-full h-full" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-orange-600 w-full h-full" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-orange-600 w-full h-full" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-orange-600 w-full h-full" />,
        },
      ],
    },
    {
      name: "Kita Bärlis Oerlikon",
      description:
        " Unterstützung bei der Betreuung der Kinder (Baby bis 3 jährige). Hilfe beim Aufräumen und Organisieren von Materialien",
      link: "/certif/kita.pdf",
      img: "/project/KITA.png",
      stacks: [
        {
          name: "React",
          logo: <SiReact className="text-orange-600 w-full h-full" />,
        },
        {
          name: "Tailwind CSS",
          logo: <BiLogoTailwindCss className="text-orange-600 w-full h-full" />,
        },
        {
          name: "Javascript",
          logo: <BiLogoJavascript className="text-orange-600 w-full h-full" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-orange-600 w-full h-full" />,
        },
      ],
    },
  ];

  // PDF ise direkt indir, değilse yeni sekmede aç
  const onHandleClick = (link: string) => {
    if (link.endsWith(".pdf")) {
      const aTag = document.createElement("a");
      aTag.href = link;
      aTag.setAttribute("download", "");
      aTag.setAttribute("target", "_blank");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="mt-8 w-full max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h1 className={`text-4xl font-bold mb-2 text-center ${headingColor || ''}`}>
          Projekte
        </h1>

        <hr className="w-96 mb-6 p-1 bg-gradient-to-r from-orange-400 to-orange-600 border-none rounded-sm mx-auto" />

        <p className="text-gray-800 text-base lg:text-xl text-center">
        Meine bisherigen Schnupperlehren
      </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.img}
            className="border-2 border-orange-500 bg-orange-100 text-orange-800 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300 group hover:bg-orange-200 flex flex-col h-full">
            <div className="relative flex justify-center items-center">
              <Image
                src={project.img}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </div>
            <div className="flex flex-col px-3 py-3 flex-1">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-lg text-orange-800">
                  {project.name}
                </p>

                <div className="flex items-center justify-end gap-1">
                  {project.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="w-6 h-6 bg-orange-200 border border-orange-500 rounded-full flex items-center justify-center"
                      title={stack.name}>
                      <div className="w-4 h-4">
                      {stack.logo}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 min-h-0">
                <p className="text-orange-700 text-xs leading-relaxed">
                {project.description}
              </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-orange-300">
                <CustomButton
                  btnType="button"
                  title={
                    <div className="flex items-center justify-center gap-2">
                      <span>Dokument ansehen</span>
                      <FaFilePdf />
                    </div>
                  }
                  containerStyles="border-orange-500 bg-orange-200 hover:bg-orange-300 hover:shadow-lg transition-all duration-300 rounded-lg py-2 px-3"
                  textStyles="text-orange-800 font-semibold text-sm"
                  onClick={() => onHandleClick(project.link)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};