import Image from "next/image";
import Link from "next/link";
import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";
import Tag from "@/app/components/components/tag";
import ProjectPresentation from "@/app/components/pages/home/project-presentation";
import { projectsList } from "@/utils/localData";

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
              width={268}
              height={282}
              className="mr-4 shadow-lg	shadow-black/50 w-64 h-64 object-cover"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">
                Valentin Moreau développeur web
              </h1>
              <p className="text-2xl">
                <b>Bonjour et bienvenue</b> sur mon <b>portfolio!</b> Je suis
                Valentin, <b>développeur web</b> en formation depuis 2021. Ici
                vous pourrez voir mes <b>projets web</b> les plus <b>aboutis</b>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/#project_todo_list"
              className="flex mb-4 mx-auto bg-gradient-to-b from-amber-400 to-amber-500 rounded-full py-4 px-6 text-white text-2xl transition-transform hover:scale-105 w-fit"
            >
              <div className="mx-4 font-medium">Découvrir mes réalisations</div>
            </Link>
            <ArrowLongDownIcon className="size-8 mt-1 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <ProjectPresentation
        tagList={projectsList[0].tagList}
        imagesSrc={projectsList[0].imagesSrc}
        title={projectsList[0].title}
        linksList={projectsList[0].linksList}
        gradientColor={"amber"}
      >
        Ayant terminé ma formation <b>Javascript/React</b> fin 2024, j&apos;ai
        souhaité me former sur le framework <b>Next.Js</b>. J&apos;ai donc
        choisi de faire un <b>projet de Todo list</b>, mais ne vous y trompez
        pas:{" "}
        <b>
          ce n&apos;est pas une todo list simple réalisable en une après-midi!
        </b>{" "}
        Elle est très complète et m&apos;a apporté une{" "}
        <b>expérience significative</b> en <b>Next.js!</b>
      </ProjectPresentation>

      <div
        id="project_todo_list"
        className="bg-gradient-to-r from-amber-500 to-amber-300"
      >
        <div className="flex flex-col justify-between max-w-6xl mx-auto min-h-screen pt-12">
          <div></div>
          <div className="flex">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">
                Todo list Next.Js | 2024
              </h2>
              <div className="mb-3">
                <span className="mr-2 mb-2 inline-block">
                  <Tag>NextJs</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Prisma</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>TypeScript</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Yup</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Formik</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>TailwindCss/UI</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>jsonwebtoken/jose/bcrypt</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Jest</Tag>
                </span>
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
                Elle est très complète et m&apos;a apporté une{" "}
                <b>expérience significative</b> en <b>Next.js!</b>
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
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Voir le site</div>
                </Link>
                <Link
                  href="#"
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">
                    Plus d&apos;infos sur le projet
                  </div>
                </Link>
              </div>
            </div>
            <Image
              src="/overview-todo-list-project.png"
              alt="Photo de Valentin"
              width={1917}
              height={909}
              className="ml-4 w-96 h-96 object-cover shadow-lg	shadow-black/50"
            />
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/#project_portfolio"
              className="flex mb-4 mx-auto bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-full py-4 px-6 text-white text-2xl transition-transform hover:scale-105 w-fit"
            >
              <div className="mx-4 font-medium">Projet suivant</div>
            </Link>
            <ArrowLongDownIcon className="size-8 mt-1 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <div
        id="project_portfolio"
        className="bg-gradient-to-r from-indigo-500 to-indigo-300"
      >
        <div className="flex flex-col justify-between max-w-6xl mx-auto min-h-screen pt-12">
          <div></div>
          <div className="flex">
            <Image
              src="/checklist.png"
              alt="Photo de Valentin"
              width={300}
              height={320}
              className="mr-4 h-full border-amber-500"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">
                Portfolio Next.js & Strapi
              </h2>
              <div className="mb-3">
                <span className="mr-2 mb-2 inline-block">
                  <Tag>NextJs</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Prisma</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>TypeScript</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Yup</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Formik</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>TailwindCss/UI</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>jsonwebtoken/jose/bcrypt</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Jest</Tag>
                </span>
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
                Elle est très complète et m&apos;a apporté une{" "}
                <b>expérience significative</b> en <b>Next.js!</b>
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
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Voir le site</div>
                </Link>
                <Link
                  href="#"
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">
                    Plus d&apos;infos sur le projet
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/#project_e_commerce_tout_un_concept"
              className="flex mb-4 mx-auto bg-gradient-to-b from-amber-400 to-amber-500 rounded-full py-4 px-6 text-white text-2xl transition-transform hover:scale-105 w-fit"
            >
              <div className="mx-4 font-medium">Projet suivant</div>
            </Link>
            <ArrowLongDownIcon className="size-8 mt-1 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <div
        id="project_e_commerce_tout_un_concept"
        className="bg-gradient-to-r from-amber-500 to-amber-300"
      >
        <div className="flex flex-col justify-between max-w-6xl mx-auto min-h-screen pt-12">
          <div></div>
          <div className="flex">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">
                E-commerce Next.js & Strapi
              </h2>
              <div className="mb-3">
                <span className="mr-2 mb-2 inline-block">
                  <Tag>NextJs</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Prisma</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>TypeScript</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Yup</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Formik</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>TailwindCss/UI</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>jsonwebtoken/jose/bcrypt</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Jest</Tag>
                </span>
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
                Elle est très complète et m&apos;a apporté une{" "}
                <b>expérience significative</b> en <b>Next.js!</b>
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
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Voir le site</div>
                </Link>
                <Link
                  href="#"
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">
                    Plus d&apos;infos sur le projet
                  </div>
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
          <div className="flex flex-col items-center">
            <Link
              href="/#snowtricks"
              className="flex mb-4 mx-auto bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-full py-4 px-6 text-white text-2xl transition-transform hover:scale-105 w-fit"
            >
              <div className="mx-4 font-medium">Projet suivant</div>
            </Link>
            <ArrowLongDownIcon className="size-8 mt-1 text-white animate-bounce" />
          </div>
        </div>
      </div>

      <div
        id="snowtricks"
        className="bg-gradient-to-r from-indigo-500 to-indigo-300"
      >
        <div className="flex flex-col justify-between max-w-6xl mx-auto min-h-screen pt-12">
          <div></div>
          <div className="flex">
            <Image
              src="/overview-snowtricks-project.png"
              alt="Photo de Valentin"
              width={1904}
              height={913}
              className="mr-4 w-96 h-96 object-cover shadow-lg	shadow-black/50"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">
                Site communautaire en Symfony | 2022
              </h2>
              <div className="mb-3">
                <span className="mr-2 mb-2 inline-block">
                  <Tag>PHP</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Symfony</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>Twig</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>SQL</Tag>
                </span>
                <span className="mr-2 mb-2 inline-block">
                  <Tag>JavaScript</Tag>
                </span>
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
                Elle est très complète et m&apos;a apporté une{" "}
                <b>expérience significative</b> en <b>Next.js!</b>
              </p>
              <div className="flex justify-start mt-4">
                <Link
                  href="https://github.com/ValM34/OP-DA-P6"
                  className="flex w-fit bg-github rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">GitHub</div>
                </Link>
                <Link
                  href="https://snowtricks.valentin-moreau.com/"
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Voir le site</div>
                </Link>
                <Link
                  href="#"
                  className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">
                    Plus d&apos;infos sur le projet
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <ArrowLongUpIcon className="size-8 mt-1 text-white animate-bounce" />
            <Link
              href="/#main_header"
              className="flex mb-4 mx-auto bg-gradient-to-b from-amber-400 to-amber-500 rounded-full py-4 px-6 text-white text-2xl transition-transform hover:scale-105 w-fit"
            >
              <div className="mx-4 font-medium">Remonter la page</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
