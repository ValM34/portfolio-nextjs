'use client';

import ProjectPresentation from '@/app/ProjectPresentation';
import Contact from '@/app/components/components/Contact';
import { useEffect } from 'react';
import useProjectsStore from '@/stores/project-store';
import HeroSection from '@/app/HeroSection';
import { getProjects } from '@/infrastructure/repositories/project-repository';

export default function Home() {
  const { projects, setProjects } = useProjectsStore();

  useEffect(() => {
    // (async () => {
    //   try {
    //     await fetch(
    //       'http://localhost:1337/api/projects?populate=*&sort=yearOfProduction:desc'
    //     )
    //       .then((res) => res.json())
    //       .then((res) => {
    //         if (res.data && res.data.length > 0 && projects === undefined) {
    //           setProjects(res.data);
    //         }
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();

    (async () => {
      try {
        const data = await getProjects();
        console.log(data);
        if(projects === undefined) {
          setProjects(data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

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
