import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="transform hover:scale-110 motion-reduce:transform-none">{"←"}</a>
      </Link>
    </h2>
  );
}
