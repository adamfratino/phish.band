"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { schema, type FormSchema } from "./schema";
import { submitForm } from "./actions";

export const MessageForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormSchema> = async (formData) => {
    console.log("attempting to submit form...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      form.reset();
      submitForm(formData);
      setHasSubmitted(true);
      console.log("form successfully submitted!");
    } catch (err) {
      console.log("form submission failed!", err);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="flex flex-col gap-2 w-full max-w-md font-bold items-center uppercase">
        <h1 className="text-4xl mb-2 text-center font-bold tracking-tight">
          congrats, you did it!
        </h1>
        <h2 className="text-xs mb-6">
          it&apos;ll take a few moments to rebuild the site
        </h2>
        <Link
          href="/"
          className="text-[mediumseagreen] underline hover:no-underline"
        >
          go back to see if it&apos;s updated
        </Link>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-md"
      >
        <h1 className="text-xl md:text-2xl mb-8 text-center font-bold tracking-tight uppercase">
          ok, post something clever
        </h1>
        <input
          {...register("big_text")}
          id="big-text"
          placeholder="big text"
          className={`mb-4 h-10 text-sm rounded-md w-full text-black p-2 outline-none focus:outline-2 focus:outline-[gold] outline-offset-2 border-2 ${
            errors.big_text ? "outline-[tomato]" : "outline-[mediumseagreen]"
          }`}
        />
        <input
          {...register("small_text")}
          id="small-text"
          placeholder="small text"
          className={`mb-4 h-10 text-sm rounded-md w-full text-black p-2 outline-none focus:outline-2 focus:outline-[gold] outline-offset-2 border-2 ${
            errors.small_text ? "outline-[tomato]" : "outline-[mediumseagreen]"
          }`}
        />
        <input
          {...register("link")}
          id="small-text"
          placeholder="link (optional)"
          className={`mb-4 h-10 text-sm rounded-md w-full text-black p-2 outline-none focus:outline-2 focus:outline-[gold] outline-offset-2 border-2 ${
            errors.link ? "outline-[tomato]" : "outline-[mediumseagreen]"
          }`}
        />
        <button
          type="submit"
          className="font-bold ml-auto py-1 px-3 w-full whitespace-nowrap rounded-md h-10 text-sm transition-colors focus-visible:outline-none  bg-[mediumseagreen] text-background hover:bg-[mediumseagreen]/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "submitting..." : "submit"}
        </button>
      </form>
    </>
  );
};
