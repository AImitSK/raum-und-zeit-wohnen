import Image from "next/image";
import Reveal from "./Reveal";

type SplitSectionProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  bullets: string[];
  reverse?: boolean;
  dark?: boolean;
};

export default function SplitSection({
  image,
  alt,
  eyebrow,
  title,
  text,
  bullets,
  reverse = false,
  dark = false,
}: SplitSectionProps) {
  const classes = [
    "split",
    reverse ? "split--reverse" : "",
    dark ? "forest" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section style={{ padding: 0 }}>
      <Reveal className={classes}>
        <div className="split__media">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="split__body">
          <div className="eyebrow">{eyebrow}</div>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="microlist">
            {bullets.map((bullet, i) => (
              <span key={i}>{bullet}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
