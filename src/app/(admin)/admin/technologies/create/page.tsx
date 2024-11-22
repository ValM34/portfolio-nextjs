'use client';

import { useForm } from 'react-hook-form';
import { createTechnologySchema } from '@/validators';
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
import { createTechnology } from '@/infrastructure/repositories/technology-repository';

export default function CreateTechnology() {
  const form = useForm<z.infer<typeof createTechnologySchema>>({
    resolver: zodResolver(createTechnologySchema),
    defaultValues: {
      name: '',
    },
  });

  async function onSubmit(values: z.infer<typeof createTechnologySchema>) {
    await createTechnology(values);
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
