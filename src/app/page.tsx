import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import ProjectPresentation from "@/app/components/pages/home/project-presentation";
import { projectsList } from "@/utils/localData";
import CtaLink from "@/app/components/components/cta-link";
import Contact from "@/app/components/components/contact";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-950 to-slate-900 text-slate-300 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4">
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto pt-12 h-full">
          <div className="flex justify-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              <div className="lg:inline text-center">Valentin Moreau </div>
              <div className="lg:inline text-center bg-slate-300 text-slate-950 px-2">
                développeur web
              </div>
            </h1>
          </div>
          <div className="mb-4">
            <CtaLink url={"/#projects_list"} theme={"primary"}>
              Mes projets
            </CtaLink>
          </div>
        </div>
        <ArrowLongDownIcon className="w-8 h-8 animate-bounce text-slate-300 absolute bottom-0" />
      </div>

      <div id="projects_list">
        <ProjectPresentation project={projectsList[2]} theme={"secondary"}>
          Souhaitant apprendre à utiliser <b>Strapi</b> tout en consolidant mes
          connaissances sur <b>NextJs</b>, je réalise actuellement le site{" "}
          <b>E-commerce</b> pour une librairie.
        </ProjectPresentation>

        <ProjectPresentation project={projectsList[0]} theme={"primary"}>
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

        <ProjectPresentation project={projectsList[3]} theme={"secondary"}>
          Durant ma formation <b>PHP/Symfony</b> chez <b>Openclassrooms</b>,
          j&apos;ai été amené à développer un site communautaire de snowboard.
        </ProjectPresentation>
      </div>

      <Contact />
    </>
  );
}
