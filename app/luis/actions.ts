"use server";

import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";

export async function auth(formData: FormData) {
  const session = await getSession();
  const shouldAuthenticate =
    formData.get("password") == process.env.IRON_SESSION_PASSWORD;
  const redirectPath = (formData.get("redirect") as string) || "/rackem";

  session.isAuthenticated = shouldAuthenticate;

  await session.save();

  if (!shouldAuthenticate) {
    redirect(`/luis?redirect=${encodeURIComponent(redirectPath)}`);
  }

  redirect(redirectPath.at(0) == "/" ? redirectPath : "/");
}
