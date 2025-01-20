import ProjectPresentation from '@/app/ProjectPresentation';
import Contact from '@/components/components/Contact';
import HeroSection from '@/app/HeroSection';
import ErrorComponent from '@/components/components/ErrorComponent';
import { CheckCircle, MoveRight } from 'lucide-react';

export const revalidate = 86400;

export default async function Home() {
  const projects: Project[] = await (
    await fetch(`${process.env.NEXT_API_URL}/api/posts/`)
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
      <section className="bg-slate-950">
        <div className="max-w-6xl flex flex-col justify-center mx-auto gap-12 py-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-5xl font-bold">
              De McDonald&apos;s au développement web
            </h2>
            <p>
              Suite à la déclaration d&apos;une maladie inflammatoire (j&apos;ai une
              RQTH), j&apos;ai pris la décision de me reconvertir en tant que
              développeur web.
            </p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 flex gap-2 text-primary"><MoveRight className="w-8 h-8" />À McDo, on apprend des choses essentielles :</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <div className="flex items-center gap-2">
                  <p>
                    <CheckCircle className="w-8 h-8" />
                  </p>
                  <p className="font-semibold">
                    Le travail d&apos;équipe :
                  </p>
                </div>
                <p className="text-lg sm:text-xl">
                  Lors d&apos;un rush, si un seul employé s&apos;arrête de
                  travailler c&apos;est tout le restaurant qui est bloqué.
                </p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <p>
                    <CheckCircle className="w-8 h-8" />
                  </p>
                  <p className="font-semibold">
                    La communication :
                  </p>
                </div>
                <p className="text-lg sm:text-xl">
                  à McDonald&apos;s, on apprend à communiquer efficacement et en allant à l&apos;essentiel.
                </p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <p>
                    <CheckCircle className="w-8 h-8" />
                  </p>
                  <p className="font-semibold">
                    La gestion du temps :
                  </p>
                </div>
                <p className="text-lg sm:text-xl">
                  On apprend à gérer le temps et à être efficace.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p>Je pense que toutes ces choses sont essentielles aussi pour un développeur web.</p>
          </div>
        </div>
      </section>
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
