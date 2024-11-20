'use client';

import { useForm } from 'react-hook-form';
import { createBlogPostSchema } from '@/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createBlogPost } from '@/infrastructure/repositories/blog-post-repository';

export default function CreateBlogPost() {
  const form = useForm<z.infer<typeof createBlogPostSchema>>({
    resolver: zodResolver(createBlogPostSchema),
    defaultValues: {
      name: '',
      post: '',
    },
  });

  async function onSubmit(values: z.infer<typeof createBlogPostSchema>) {
    console.log(values);
    await createBlogPost(values);
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="post"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post</FormLabel>
              <FormControl>
                <Input placeholder="post" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
