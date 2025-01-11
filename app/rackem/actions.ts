"use server";

import { supabase } from "@/utils/supabase/client";

import type { FormSchema } from "./schema";

export async function submitForm(formData: FormSchema) {
  try {
    const { data, error } = await supabase.from("posts").insert(formData);

    if (error) throw error;

    const buildHookURL = process.env.VERCEL_BUILD_HOOK_URL;

    const response = await fetch(buildHookURL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        "Failed to trigger Vercel build hook:",
        response.statusText
      );
    } else {
      console.log("Vercel build triggered successfully");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("error submitting post to database!");
  }
}
