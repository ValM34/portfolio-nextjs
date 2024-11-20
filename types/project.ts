type Project = {
  name: string;
  imageSrc: string;
  github: string | null;
  siteUrl: string | null;
  createdAt: string;
  updatedAt: string;
  yearOfProduction: string;
  description: string;
  id: number;
  projectPresentationUrl: string | null;
  projectPresentationName: string | null;
  // projectPresentationPost: Array<object> | null;
  projectPresentationPost: object[];
  technologies: Technology[] | null;
}
