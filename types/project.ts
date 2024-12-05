// type Project = {
//   name: string;
//   imageSrc: string;
//   github: string | null;
//   siteUrl: string | null;
//   createdAt: Date | null;
//   updatedAt: Date | null;
//   yearOfProduction: string;
//   description: string;
//   id: number;
//   projectPresentationUrl: string | null;
//   projectPresentationName: string | null;
//   // projectPresentationPost: Array<object> | null;
//   projectPresentationPost: object[];
//   technologies: Technologies[];
// }

type Project = {
  acf: {
    github: string | null;
    main_image: string;
    site_url: string | null;
    technologies: string;
    year_of_production: string;
    post_resume: string | TrustedHTML;
  };
  content: {
    rendered: string | TrustedHTML;
  };
  date: string;
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
};
