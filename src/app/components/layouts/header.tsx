import Link from "next/link";

export default function Header() {
  return (
    <nav id="main_header" className="flex justify-evenly bg-gradient-to-r from-indigo-500 to-indigo-300">
      <Link className="hover:scale-110 transition-transform text-center text-2xl font-medium p-4" href="/">Accueil</Link>
      <Link className="hover:scale-110 transition-transform text-center text-2xl font-medium p-4" href="/page">Blog</Link>
      <Link className="hover:scale-110 transition-transform text-center text-2xl font-medium p-4" href="/#project_todo_list">Mes projets</Link>
      <Link className="hover:scale-110 transition-transform text-center text-2xl font-medium p-4" href="/contact">Contact</Link>
    </nav>
  );
}
