export const LastUpdate = ({ createdAt }: { createdAt: Date }) => {
  const date = new Date(createdAt);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(date);

  return (
    <p className="fixed bottom-0 mx-auto p-4 text-xs font-bold uppercase">
      Last updated {formattedDate}
    </p>
  );
};
