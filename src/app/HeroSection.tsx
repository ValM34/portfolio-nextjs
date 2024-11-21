import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import CtaLink from "@/components/components/links/CTALink";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-slate-950 to-slate-900 text-slate-300 min-h-[calc(100vh-65px)] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto pt-12 h-full">
        <div className="flex justify-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            <div className="lg:inline text-center">Valentin Moreau </div>
            <div className="lg:inline text-center bg-slate-300 text-slate-950 px-2 rounded">
              développeur web
            </div>
          </h1>
        </div>
        <div className="mb-4">
          <CtaLink url={'/#projects_list'} theme={'primary'}>
            Mes projets
          </CtaLink>
        </div>
      </div>
      <ArrowLongDownIcon className="w-8 h-8 animate-bounce text-slate-300 absolute bottom-0" />
    </div>
  );
}
