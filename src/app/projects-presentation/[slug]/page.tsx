"use client";

import useProjectsStore from "@/stores/project-store";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Tag from "@/components/components/Tag";
import Image from "next/image";

export default function TodolistNextjs() {
  const { projects, setProjects } = useProjectsStore();
  const pathname = usePathname();

  const projectPresentationUrl = pathname.split("/")[pathname.split("/").length - 1];

  let project: Project | undefined;
  let technologies: string[] | undefined;
  if (projects !== undefined) {
    project = projects.find(
      (project) => project.slug === projectPresentationUrl
    );
    technologies = project?.acf.technologies.split(',');
  }

  useEffect(() => {
    (async () => {
      try {
        if (projects === undefined) {
          fetch(
            `${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/wp/v2/posts?_fields=id,title,content,date,acf,slug`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
            .then((response) => response.json())
            .then((data) => {
              data.sort(
                (a: Project, b: Project) => parseInt(b.acf.year_of_production) - parseInt(a.acf.year_of_production)
              )
              setProjects(data);
            });
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
          {project.title.rendered}
        </h1>
        <Image className="mb-4" src={project.acf.main_image} alt={project.title.rendered} width={768} height={768} />
        <ul className="mb-2">
          {technologies && technologies.map((technology, index) => {
            return (
              <li key={index} className="mr-2 mb-2 inline-block">
                <Tag theme="primary">{technology}</Tag>
              </li>
            );
          })}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
      </>
    );
}
