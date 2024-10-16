"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function UserForm() {
  const form = useForm();

  return (
    <div className="mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="mb-6">
        Fill out the form to contact me, and I will get back to you soon.
      </p>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = form.getValues();
            const mailtoLink = `mailto:${data.email}?subject=Kontaktanfrage&body=Name: ${data.name}%0A%0ANachricht:%0A${data.message}`;
            window.location.href = mailtoLink;
          }}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" className="h-10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Message" className="h-36" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-64 px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 ">
            Send Email
          </Button>
        </form>
      </Form>
    </div>
  );
}
