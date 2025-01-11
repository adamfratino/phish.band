import { LastUpdate } from "@/components/LastUpdate";
import { Message } from "@/components/Message";
import { supabase } from "@/utils/supabase/client";

export default async function Home() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const { link, big_text, small_text, created_at } = data[0];

  return (
    <>
      <div className="max-w-screen-md font-bold flex flex-col items-center uppercase whitespace-pre-line text-balance">
        <Message bigText={big_text} smallText={small_text} link={link} />
      </div>
      <LastUpdate createdAt={created_at} />
    </>
  );
}
