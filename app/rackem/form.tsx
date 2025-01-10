"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
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
    // setValue,
    // setError,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FormSchema> = async (formData) => {
    console.log("attempting to submit form...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      submitForm(formData);
      console.log("form successfully submitted!");
    } catch (err) {
      console.log("form submission failed!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-md"
    >
      <textarea
        {...register("big_text")}
        id="big-text"
        placeholder="big text"
        className="mb-4 h-24 text-sm rounded-md w-full text-black p-2 outline-none focus:outline-2 focus:outline-[mediumseagreen] outline-offset-2"
      />
      {/* {errors.big_text && (
          <div className="absolute top-full text-xs text-red-500">
            {errors.big_text.message}
          </div>
        )} */}
      <input
        {...register("small_text")}
        id="small-text"
        placeholder="small text"
        className="mb-4 h-10 text-sm rounded-md w-full text-black indent-2 outline-none focus:outline-2 focus:outline-[mediumseagreen] outline-offset-2"
      />
      {/* {errors.smal_text && (
          <div className="absolute top-full text-xs text-red-500">
            {errors.small_text.message}
          </div>
        )} */}
      <input
        {...register("link")}
        id="small-text"
        placeholder="link (optional)"
        className="mb-4 h-10 text-sm rounded-md w-full text-black indent-2 outline-none focus:outline-2 focus:outline-[mediumseagreen] outline-offset-2"
      />
      {/* {errors.link && (
          <div className="absolute top-full text-xs text-red-500">
            {errors.link.message}
          </div>
        )} */}
      <button
        type="submit"
        className="font-bold ml-auto py-1 px-3 w-full whitespace-nowrap rounded-md h-10 text-sm transition-colors focus-visible:outline-none  bg-[mediumseagreen] text-background hover:bg-[mediumseagreen]/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting..." : "submit"}
      </button>
    </form>
  );
};
