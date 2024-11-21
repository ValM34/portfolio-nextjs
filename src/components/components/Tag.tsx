export default function Tag({
  theme,
  children,
}: Readonly<{ theme: string | null; children: React.ReactNode }>) {
  return (
    <span
      className={`${
        theme === "primary" || theme === undefined
          ? "bg-slate-300 text-slate-900"
          : "bg-slate-900 text-slate-200"
      } inline-flex text-sm items-center rounded-full px-4 font-medium py-1`}
    >
      {children}
    </span>
  );
}
