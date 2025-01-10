import { Message } from "@/components/Message";
import { supabase } from "@/utils/supabase/client";

export default async function Home() {
  const { data, error } = await supabase
    .from("posts")
    .select("link,big_text,small_text")
    .order("id", { ascending: false })
    .limit(1);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);
  const { link, big_text, small_text } = data[0];

  return (
    <div className="max-w-screen-md font-bold flex flex-col items-center uppercase whitespace-pre-line">
      <Message bigText={big_text} smallText={small_text} link={link} />
    </div>
  );
}
