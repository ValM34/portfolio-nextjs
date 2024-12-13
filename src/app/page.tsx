import ProjectPresentation from '@/app/ProjectPresentation';
import Contact from '@/components/components/Contact';
import HeroSection from '@/app/HeroSection';
import ErrorComponent from '@/components/components/ErrorComponent';

export default async function Home() {
  const projects: Project[] = await (
    await fetch(`${process.env.NEXT_API_URL}/api/posts/`)
  ).json();

  // console.log(process.env.NEXT_API_URL);
  // return <div>{process.env.NEXT_API_URL}</div>
  // if (!projects) {
  //   return <ErrorComponent />;
  // }

  projects.sort(
    (a: Project, b: Project) =>
      parseInt(b.acf.year_of_production) - parseInt(a.acf.year_of_production)
  );

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
