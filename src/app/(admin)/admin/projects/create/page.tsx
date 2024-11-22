'use client';

import { useForm } from 'react-hook-form';
import { createProjectSchema } from '@/validators';
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
import { createProject } from '@/infrastructure/repositories/project-repository';
import { useRouter } from 'next/navigation';

export default function CreateProject() {
  const router = useRouter();
  const form = useForm<z.infer<typeof createProjectSchema>>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: '',
      imageSrc: '',
      github: '',
      siteUrl: '',
      projectPresentationUrl: '',
      projectPresentationName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof createProjectSchema>) {
    await createProject(values);
    router.push('/admin/projects');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
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
                <Input placeholder="imageSrc" {...field} />
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
                <Input placeholder="github" {...field} />
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
                <Input placeholder="siteUrl" {...field} />
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
                <Input placeholder="projectPresentationUrl" {...field} />
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
                <Input placeholder="projectPresentationName" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
