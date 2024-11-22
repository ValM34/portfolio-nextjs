'use client';

import ProjectPresentation from '@/app/(public-portfolio)/ProjectPresentation';
import Contact from '@/components/components/public/Contact';
import { useEffect } from 'react';
import useProjectsStore from '@/stores/project-store';
import HeroSection from '@/app/(public-portfolio)/HeroSection';
import { getProjects } from '@/infrastructure/repositories/project-repository';

export default function Home() {
  const { projects, setProjects } = useProjectsStore();

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
