"use server";

import { supabase } from "@/utils/supabase/client";

import type { FormSchema } from "./schema";

export async function submitForm(formData: FormSchema) {
  console.log(formData);

  try {
    const { data, error } = await supabase.from("posts").insert(formData);

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("error submitting post to database!");
  }
}
