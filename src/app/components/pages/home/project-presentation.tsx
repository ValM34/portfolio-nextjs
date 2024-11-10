import Tag from "@/app/components/components/tag";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPresentation({
  project,
  theme,
  children,
}: Readonly<{
  project: Project;
  theme: string;
  children: React.ReactNode;
}>) {
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
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center lg:text-left">{project.title}</h2>
            <div className="mb-3">
              <ul className="flex flex-wrap justify-center lg:justify-start">
                {project.tagList.map((tag, index) => {
                  return (
                    <li key={index} className="mr-2 mb-2 inline-block">
                      <Tag theme={theme}>{tag}</Tag>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="text-2xl text-center sm:text-justify">{children}</p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start mt-4 mb-4 lg:mb-0">
              {project.linksList.github ? (
                <Link
                  href={project.linksList.github}
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

              {project.linksList.siteUrl ? (
                <Link
                  href={project.linksList.siteUrl}
                  className="flex justify-center w-full sm:w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 sm:mr-4 mb-2 sm:mb-0"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Voir le site</div>
                </Link>
              ) : null}

              {project.linksList.projectPresentation ? (
                <Link
                  href={project.linksList.projectPresentation}
                  className="flex justify-center w-full sm:w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105"
                  target="_blank"
                >
                  <div className="mx-4 font-medium">Détails</div>
                </Link>
              ) : null}
            </div>
          </div>
          <Image
            src={`/${project.imagesSrc[0]}`}
            alt="Photo de Valentin"
            width={1917}
            height={909}
            className="lg:ml-4 w-10/12 lg:w-96 lg:h-96 object-cover shadow-lg	shadow-black/50"
          />
        </div>
      </div>
    </div>
  );
}
