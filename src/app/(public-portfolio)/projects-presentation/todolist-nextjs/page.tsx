"use client";

import useProjectsStore from "@/stores/project-store";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Tag from "@/components/components/public/Tag";
import { getProjects } from "@/infrastructure/repositories/project-repository";

export default function TodolistNextjs() {
  const { projects, setProjects } = useProjectsStore();
  const pathname = usePathname();

  const projectPresentationUrl =
    pathname.split("/")[pathname.split("/").length - 1];

  let project: Project | undefined;
  if (projects !== undefined) {
    project = projects.find(
      (project) => project.projectPresentationUrl === projectPresentationUrl
    );
  }

  useEffect(() => {
    (async () => {
      try {
        if(projects === undefined) {
          const data = await getProjects();
          setProjects(data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

  if (project !== undefined)
    return (
      <>
        <h1>
          {project.projectPresentationName}
        </h1>
        <ul className="mb-12">
          {project.technologies && project.technologies.map((technology, index) => {
            return (
              <li key={index} className="mr-2 mb-2 inline-block">
                <Tag theme="primary">{technology.technology.name}</Tag>
              </li>
            );
          })}
        </ul>
        <BlocksRenderer
          content={project.projectPresentationPost as BlocksContent}
        />
      </>
    );
}
