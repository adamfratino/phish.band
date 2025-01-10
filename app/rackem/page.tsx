import { redirect } from "next/navigation";

import { getSession } from "@/utils/auth";

import { MessageForm } from "./form";

export default async function Protected() {
  const session = await getSession();

  if (!session.isAuthenticated) {
    redirect("/luis");
  }

  return (
    <main className=" w-full max-w-md">
      <h1 className="text-2xl mb-2 text-center font-bold tracking-tight">
        post something cool
      </h1>
      <MessageForm />
    </main>
  );
}
