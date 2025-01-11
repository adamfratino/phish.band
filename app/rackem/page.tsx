import { redirect } from "next/navigation";

import { getSession } from "@/utils/auth";

import { MessageForm } from "./form";

export default async function Protected() {
  const session = await getSession();

  if (!session.isAuthenticated) {
    redirect(process.env.NEXT_PUBLIC_LOGIN_PATH!);
  }

  return (
    <main className=" w-full max-w-md">
      <MessageForm />
    </main>
  );
}
