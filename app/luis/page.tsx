import Link from "next/link";
import { redirect } from "next/navigation";

import { getSession } from "@/utils/auth";

import { auth } from "./actions";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SignIn(props: Props) {
  const searchParams = await props.searchParams;
  const session = await getSession();

  if (session.isAuthenticated) {
    redirect("/rackem");
  }

  return (
    <main className=" w-full max-w-md">
      <h1 className="text-xl md:text-2xl mb-8 text-center font-bold tracking-tight uppercase">
        are you clever?
      </h1>
      <form action={auth} className="flex flex-col gap-3">
        <input
          name="redirect"
          type="hidden"
          defaultValue={searchParams.redirect}
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          className="h-10 text-sm rounded-md w-full text-black indent-2 outline-none focus:outline-2 focus:outline-[mediumseagreen] outline-offset-2"
          required
          autoFocus
        />
        <button
          type="submit"
          className="font-bold ml-auto py-1 px-3 w-full whitespace-nowrap rounded-md h-10 text-sm transition-colors focus-visible:outline-none  bg-[mediumseagreen] text-background hover:bg-[mediumseagreen]/90"
        >
          submit
        </button>
      </form>
    </main>
  );
}
