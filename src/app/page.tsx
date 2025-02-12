import ProjectPresentation from '@/app/ProjectPresentation';
import Contact from '@/components/components/Contact';
import HeroSection from '@/app/HeroSection';
import ErrorComponent from '@/components/components/ErrorComponent';

export const revalidate = 86400;

export default async function Home() {
  const projects: Project[] = await (
    await fetch(`${process.env.WP_BASE_URL}/wp-json/wp/v2/posts?_fields=id,title,content,date,acf,slug`)
  ).json();

  if (!projects) {
    return <ErrorComponent />;
  }

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
