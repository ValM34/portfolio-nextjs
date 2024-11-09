import Tag from "@/app/components/components/tag";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

export default function ProjectPresentation({ tagList, imagesSrc, title, linksList, gradientColor, children }: Readonly<{ tagList: string[], imagesSrc: string[], title: string, linksList: string[], gradientColor: string, children: React.ReactNode }>) {
  return (
    <div
      id="project_todo_list"
      className={`bg-gradient-to-r from-${gradientColor}-500 to-${gradientColor}-300`}
    >
      <div className="flex flex-col justify-between max-w-6xl mx-auto min-h-screen pt-12">
        <div></div>
        <div className="flex">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              {title}
            </h2>
            <div className="mb-3">
              <ul>
                {tagList.map((tag, index) => {
                  return (
                    <li key={index} className="mr-2 mb-2 inline-block">
                      <Tag>{tag}</Tag>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="text-2xl">
              {children}
            </p>
            <div className="flex justify-start mt-4">
              <Link
                href={linksList[0]}
                className="flex w-fit bg-github rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                target="_blank"
              >
                <div className="mx-4 font-medium">GitHub</div>
              </Link>
              <Link
                href={linksList[1]}
                className="flex w-fit bg-red-600 rounded-full py-4 px-4 text-white text-xl transition-transform hover:scale-105 mr-4"
                target="_blank"
              >
                <div className="mx-4 font-medium">Voir le site</div>
              </Link>
              <Link
                href={linksList[2]}
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
            src={`/${imagesSrc[0]}`}
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
  );
}
