'use client';

import { useForm } from 'react-hook-form';
import { updateProjectSchema } from '@/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { getProjects } from '@/infrastructure/repositories/project-repository';
import useProjectsStore from '@/stores/admin/projects-store';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function UpdateProject() {
  const { projects, updateProject, setProjects } = useProjectsStore();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const pathname = usePathname();
  const projectId = pathname.split('/')[pathname.split('/').length - 1];
  const router = useRouter();

  const form = useForm<z.infer<typeof updateProjectSchema>>({
    defaultValues: {
      name: "",
      imageSrc: "",
      github: "",
      siteUrl: "",
      projectPresentationUrl: "",
      projectPresentationName: "",
    },
    resolver: zodResolver(updateProjectSchema),
  });

  async function onSubmit(values: z.infer<typeof updateProjectSchema>) {
    console.log('submit')
    if (project === undefined) return;
    updateProject({
      ...values,
      id: project.id,
      yearOfProduction: project.yearOfProduction,
      description: project.description,
      technologies: project.technologies,
      projectPresentationPost: project.projectPresentationPost,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
    });
    router.push('/admin/projects');
  }

  useEffect(() => {
    if (projects === undefined) {
      (async () => {
        try {
          const data = await getProjects();
          setProjects(data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
    setProject(
      projects?.find((project) => project.id.toString() === projectId)
    );

    if(project) {
      if(project) {
        form.setValue('name', project.name);
        form.setValue('imageSrc', project.imageSrc);
        form.setValue('github', project.github as string);
        form.setValue('siteUrl', project.siteUrl as string);
        form.setValue('projectPresentationUrl', project.projectPresentationUrl as string);
        form.setValue('projectPresentationName', project.projectPresentationName as string);
      }
    }
  }, [projects, projectId, setProjects, form, project]);

  return (
    <>
      {project && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageSrc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="imageSrc"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="github"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="siteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="siteUrl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectPresentationUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project presentation URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="projectPresentationUrl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectPresentationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project presentation name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="projectPresentationName"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </>
  );
}
