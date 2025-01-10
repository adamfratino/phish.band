type Message = {
  bigText?: string;
  smallText?: string;
  link?: string;
};

const defaults: Message = {
  bigText: `Love & Light\nMotherfuckers`,
  smallText: "Clever Crew '24",
  link: "https://www.youtube.com/watch?v=KmHjM5q3tis",
};

export const Message = ({
  bigText = defaults.bigText,
  smallText = defaults.smallText,
  link = defaults.link,
}: Message) => {
  if (link) {
    return (
      <a href={link} target="_blank" className="contents">
        <h1 className="text-4xl mb-3 text-center">{bigText}</h1>
        <h2 className="text-xs">{smallText}</h2>
      </a>
    );
  } else {
    return (
      <>
        <h1 className="text-4xl mb-3 text-center">{bigText}</h1>
        <h2 className="text-xs">{smallText}</h2>
      </>
    );
  }
};
