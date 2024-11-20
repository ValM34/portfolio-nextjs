import { create } from 'zustand'

type State = {
  projects: Project[] | undefined;
}

type Action = {
  setProjects: (projects: Project[]) => void;
}

const initialState: State = {
  projects: undefined,
}

const useProjectsStore = create<State & Action>((set) => ({
  ...initialState,
  setProjects: (projects) => set(() => ({ projects })),
}))

export default useProjectsStore;
