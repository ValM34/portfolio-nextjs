import Image from "next/image";
import Link from "next/link";
import {
  ArrowLongDownIcon,
} from "@heroicons/react/24/outline";
import Tag from "@/app/components/components/tag";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-300">
        <div className="flex flex-col justify-between max-w-6xl mx-auto min-h-[calc(100vh-64px)] pt-12">
          <div></div>
          <div className="flex">
            <Image
              src="/photo-valentin-profil.png"
              alt="Photo de Valentin"
              width={300}
              height={300}
              className="rounded-full mr-4 h-full border-amber-500 shadow-lg shadow-indigo-500"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">
                Valentin Moreau développeur web
              </h1>
              <p className="text-2xl">
                <b>Bonjour et bienvenue</b> sur mon <b>portfolio!</b> Je suis Valentin,{" "}
                <b>développeur web</b> en formation depuis 2021. Ici vous
                pourrez voir mes <b>projets web</b> les plus <b>aboutis</b>.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/#project_1"
              className="flex mb-4 mx-auto bg-gradient-to-b from-amber-400 to-amber-500 rounded-full py-4 px-6 text-white text-2xl transition-transform hover:scale-105 w-fit"
            >
              <div className="mx-4 font-medium">Découvrir mes réalisations</div>
            </Link>
            <ArrowLongDownIcon className="size-8 mt-1 text-white animate-bounce" />
          </div>
        </div>

        {/* <div id="resume" className="w-full p-6">
        <h2 className="text-4xl font-bold mb-4">
          Expériences professionnelles
        </h2>
        <ul>
          {experience.map((item) => {
            return (
              <li key={item.id} className="flex flex-col">
                <b>
                  {item.company} | {item.date}
                </b>
                <i className="font-semibold">{item.job}</i>
                <ul>
                  {item.skills.map((skill) => {
                    return (
                      <li className="list-disc" key={skill}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full p-6">
        <h2 className="text-4xl font-bold mb-4">Formation</h2>
        <ul>
          {education.map((item) => {
            return (
              <li key={item.id} className="flex flex-col">
                <b>
                  {item.organism} | {item.date}
                </b>
                <i className="font-semibold">{item.examObtained}</i>
                <ul>
                  {item.skills.map((skill) => {
                    return (
                      <li className="list-disc" key={skill}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div> */}
      </div>
      <div
        id="project_1"
        className="bg-gradient-to-r from-amber-500 to-amber-300"
      >
        <div className="flex flex-col justify-between max-w-6xl mx-auto min-h-screen pt-12">
          <div></div>
          <div className="flex">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">Todo list Next.Js</h2>
              <div className="mb-3">
                <span className="mr-2 mb-2 inline-block"><Tag>NextJs</Tag></span>
                <span className="mr-2 mb-2 inline-block"><Tag>Prisma</Tag></span>
                <span className="mr-2 mb-2 inline-block"><Tag>TypeScript</Tag></span>
                <span className="mr-2 mb-2 inline-block"><Tag>Yup</Tag></span>
                <span className="mr-2 mb-2 inline-block"><Tag>Formik</Tag></span>
                <span className="mr-2 mb-2 inline-block"><Tag>TailwindCss/UI</Tag></span>
                <span className="mr-2 mb-2 inline-block"><Tag>jsonwebtoken/jose/bcrypt</Tag></span>
                <span className="mr-2 mb-2 inline-block"><Tag>Jest</Tag></span>
              </div>
              <p className="text-2xl">
                Ayant terminé ma formation <b>Javascript/React</b> fin 2024,
                j&apos;ai souhaité me former sur le framework <b>Next.Js</b>.
                J&apos;ai donc choisi de faire un <b>projet de Todo list</b>,
                mais ne vous y trompez pas:{" "}
                <b>
                  ce n&apos;est pas une todo list simple réalisable en une
                  après-midi!
                </b>{" "}
                Elle est très complète et m&apos;a apporté une <b>expérience significative</b> en <b>Next.js!</b>
              </p>
              <div className="flex justify-start mt-4">
                <Link
                  href="https://github.com/ValM34/todolist-nextjs"
                  className="flex w-fit bg-github rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">GitHub</div>
                </Link>
                <Link
                  href="https://todolist-valentin-moreau.vercel.app/"
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Voir le site</div>
                </Link>
              </div>
            </div>
            <Image
              src="/checklist.png"
              alt="Photo de Valentin"
              width={300}
              height={320}
              className="ml-4 h-full border-amber-500"
            />
          </div>
          <Link
            href="/#"
            className="flex mb-4 mx-auto bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-full py-4 px-6 text-white text-2xl transition-transform hover:scale-105"
          >
            <div className="mx-4 font-medium">Plus d&apos;infos sur le projet</div>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-500 to-amber-300">
        <h2>Projet Todo list en NextJs</h2>
      </div>
    </>
  );
}
