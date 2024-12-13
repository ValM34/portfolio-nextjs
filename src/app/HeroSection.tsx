"use client";

import { ArrowLongDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import GridPattern from '@/components/ui/grid-pattern';
import ShimmerButton from '@/components/ui/shimmer-button';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

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
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className={cn(
              '[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] '
            )}
          />
        </div>
        <ShimmerButton
          background="orange"
          shimmerColor="#0f172a"
          className="shadow-2xl shadow-orange-950"
          onClick={() => router.push('/#projects_list')}
        >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-slate-900 lg:text-lg">
            Mes projets
          </span>
        </ShimmerButton>
      </div>
      <ArrowLongDownIcon className="w-8 h-8 animate-bounce text-slate-300 absolute bottom-0" />
    </div>
  );
}
