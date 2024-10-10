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

export default function UserForm() {
  const form = useForm();

  return (
    <div className=" mt-10 p-6 shadow-lg rounded-lg border">
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

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </Form>
    </div>
  );
}
