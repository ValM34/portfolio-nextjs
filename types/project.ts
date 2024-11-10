type Project = {
  tagList: string[];
  title: string;
  imagesSrc: string[];
  linksList: {
    github: string | null;
    siteUrl: string | null;
    projectPresentation: string | null;
  };
  date: string;
}
