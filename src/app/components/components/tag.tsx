export default function Tag({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <span className="inline-flex text-sm items-center rounded-full bg-white px-4 font-medium py-1">
      {children}
    </span>
  );
}
