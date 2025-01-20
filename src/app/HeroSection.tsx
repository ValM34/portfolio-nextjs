import Image from 'next/image';
import { ArrowDown, MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-background text-slate-300 flex flex-col items-center justify-center px-4 min-h-[calc(100vh)]">
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto pt-12 h-full">
        <div className="flex justify-center mb-8">
          <div className="mb-4 w-full flex gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold lg:leading-tight mb-4">
                Vous souhaitez recruter un développeur <span className="text-primary">fiable</span>, <span className="text-primary">compétent</span> et <span className="text-primary">motivé</span> ?
              </h1>
              <h2 className="text-xl sm:text-3xl font-bold mb-4 w-full">
              <div className="flex items-center gap-2"><MoveRight className="w-8 h-8" /> Je pense que je peux correspondre à vos attentes.</div>
              </h2>
            </div>
            <Image src="/photo-profile.png" alt="Logo" width={300} height={300} className="rounded-full" />
          </div>
        </div>
      </div>
      <ArrowDown className="w-8 h-8 animate-bounce text-slate-300 absolute bottom-0" />
    </div>
  );
}
