import Tag from "@/components/components/Tag";
import Image from "next/image";

export default async function TodolistNextjs(
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  let project: Project | undefined;
  let technologies: string[] | undefined;

  const projects: Project[] = await (await fetch(`${process.env.NEXT_API_URL}/api/posts/`)).json();
  projects.sort(
    (a: Project, b: Project) => parseInt(b.acf.year_of_production) - parseInt(a.acf.year_of_production)
  )

  if (projects !== undefined) {
    project = projects.find(
      (project) => project.slug === slug
    );
    technologies = project?.acf.technologies.split(',');
  }

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
