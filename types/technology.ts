type Technology = {
  id: number;
  // name: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
}

type Technologies = {
  assignedAt: Date;
  assignedBy: string | null;
  projectId: number;
  technologyId: number;
  technology: Technology;
}
