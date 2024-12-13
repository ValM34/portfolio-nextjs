'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ErrorComponent() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-4xl">Erreur</h1>
      <p className="text-3xl mb-4 text-center">
        Nous n&apos;avons pas réussi à charger la page
      </p>
      <div className="text-center">
        <p className="lg:inline">Vous pouvez </p>
        <button
          onClick={() => router.refresh()}
          className="underline text-primary"
        >
          Actualiser la page
        </button>
        <p className="lg:inline"> ou </p>
        <button
          onClick={() => router.back()}
          className="underline text-primary"
        >
          Retourner à la page précédente
        </button>
        <p className="lg:inline"> ou </p>
        <Link href="/" className="underline text-primary">
          Retourner à la page d&apos;accueil
        </Link>
      </div>
    </div>
  );
}
