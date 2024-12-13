import Tag from "@/components/components/Tag";
import Image from "next/image";
import Link from "next/link";
import { convertWPACFDateToFullYear } from "@/utils/date-converter";

export default function ProjectPresentation({
  project,
  theme,
}: Readonly<{
  project: Project;
  theme: string;
}>) {

  const technologies = project.acf.technologies.split(',');

  return (
    <div
      className={`
        ${
          theme === "primary"
            ? "bg-gradient-to-r from-slate-950 to-slate-900 text-slate-300 "
            : "bg-gradient-to-r from-slate-200 to-slate-100 "
        }
      px-4`}
    >
      <div className="flex items-center max-w-6xl mx-auto min-h-screen py-12">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-center lg:text-left">{project.title.rendered}</h2>
            <p className="mb-4 text-xl sm:text-2xl font-semibold">{convertWPACFDateToFullYear(project.acf.year_of_production)}</p>
            <div className="mb-3">
              <ul className="flex flex-wrap justify-center lg:justify-start">
                {technologies && technologies.map((technology, index) => {
                  return (
                    <li key={index} className="mr-2 mb-2 inline-block">
                      {/* <Tag theme={theme}>{technology.name}</Tag> */}
                      <Tag theme={theme}>{technology}</Tag>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="text-xl sm:text-2xl text-center lg:text-left">
              <div dangerouslySetInnerHTML={{ __html: project.acf.post_resume }} />
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start mt-4 mb-4 lg:mb-0">
              {project.acf.github ? (
                <Link
                  href={project.acf.github}
                  className="flex justify-center w-full sm:w-fit bg-slate-200 border-2 border-slate-900 rounded-full py-4 px-4 text-github text-xl transition-transform hover:scale-105 sm:mr-4 mb-2 sm:mb-0"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">
                    GitHub{" "}
                    <Image
                      src="/github-mark.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="inline-block w-6"
                    />
                  </div>
                </Link>
              ) : null}

              {project.acf.site_url ? (
                <Link
                  href={project.acf.site_url}
                  className="flex justify-center w-full sm:w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 sm:mr-4 mb-2 sm:mb-0"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Voir le site</div>
                </Link>
              ) : null}

              {project.content.rendered ? (
                <Link
                  href={`/projects-presentation/${project.slug}`}
                  className="flex justify-center w-full sm:w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105"
                >
                  <div className="mx-4 font-medium">Détails</div>
                </Link>
              ) : null}
            </div>
          </div>
          <Image
            src={`${project.acf.main_image}`}
            alt="Photo de Valentin"
            width={1917}
            height={909}
            className="lg:ml-4 w-full md:w-96 md:h-96 object-cover shadow-lg	shadow-black/50"
          />
        </div>
      </div>
    </div>
  );
}
