'use client';

import ProjectPresentation from '@/app/ProjectPresentation';
import Contact from '@/components/components/Contact';
import { useEffect } from 'react';
import useProjectsStore from '@/stores/project-store';
import HeroSection from '@/app/HeroSection';

export default function Home() {
  const { projects, setProjects } = useProjectsStore();
  console.log(process.env.NEXT_PUBLIC_WP_BASE_URL);

  useEffect(() => {
    (async () => {
      try {
        if (projects === undefined) {
          await fetch(
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
              setProjects(data);
            });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

  console.log(projects);

  return (
    <>
      <HeroSection />

      <div id="projects_list">
        {projects &&
          projects.map((project, index) => {
            return (
              <div key={index}>
                <ProjectPresentation
                  project={project}
                  theme={index % 2 === 0 ? 'secondary' : 'primary'}
                />
              </div>
            );
          })}
      </div>

      <Contact />
    </>
  );
}
