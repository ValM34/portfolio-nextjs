'use client';

import Table from '@/components/components/admin/admin-table';
import useProjectsStore from '@/stores/admin/projects-store';
import { useEffect } from 'react';
import { getProjects } from '@/infrastructure/repositories/project-repository';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Projects() {
  const { projects, setProjects } = useProjectsStore();
  const router = useRouter();
  const { deleteProject } = useProjectsStore();

  useEffect(() => {
    (async () => {
      try {
        if (projects === undefined) {
          const data = await getProjects();
          setProjects(data);
          router.push('/admin/projects');
        }
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <div>
      <Link href="/admin/projects/create">
        <Button>New project</Button>
      </Link>
      {projects && projects.length > 0 && <Table data={projects} handleDelete={deleteProject} />}
    </div>
  );
}
