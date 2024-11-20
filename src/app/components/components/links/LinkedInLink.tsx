import Link from 'next/link';

export default function LinkedInLink() {
  return (
    <Link
      href="https://www.linkedin.com/in/valentin-moreau-devweb/"
      target="_blank"
      className="text-base font-semibold sm:text-lg rounded-full text-linkedin transition-transform hover:scale-105 inline-block"
    >
      Linked<span className="bg-linkedin text-slate-200 px-1 rounded">In</span>
    </Link>
  );
}
