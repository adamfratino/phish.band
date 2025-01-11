"use server";

import { AtpAgent } from "@atproto/api";

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

    const agent = new AtpAgent({
      service: "https://bsky.social",
    });

    const { big_text, small_text, link } = formData;

    const messageWithoutLink =
      big_text.toLocaleUpperCase() + "\n\n" + small_text.toLocaleUpperCase();

    const messageWithLink = messageWithoutLink + "\n\n" + link;

    await agent.login({
      identifier: process.env.BLUESKY_IDENTIFIER!,
      password: process.env.BLUESKY_PASSWORD!,
    });

    await agent.post({
      text: link ? messageWithLink : messageWithoutLink,
      facets: [
        {
          index: {
            byteStart: messageWithoutLink.length + 2,
            byteEnd: messageWithLink.length,
          },
          features: [
            {
              $type: "app.bsky.richtext.facet#link",
              uri: link,
            },
          ],
        },
      ],
      createdAt: new Date().toISOString(),
    });

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("error submitting post to database!");
  }
}
