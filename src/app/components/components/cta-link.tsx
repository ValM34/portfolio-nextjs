import Link from "next/link";

export default function CtaLink({
  url,
  theme,
  children,
}: Readonly<{
  url: string;
  theme: string | null;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={url}
      className={`${
        theme === "primary" || theme === undefined
          ? "bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900"
          : "bg-gradient-to-b from-slate-700 to-slate-900 text-slate-300"
      } rounded-full py-4 px-4 text-2xl transition-transform hover:scale-105 w-fit inline-block`}
    >
      <div className="mx-4 font-medium">{children}</div>
    </Link>
  );
}
