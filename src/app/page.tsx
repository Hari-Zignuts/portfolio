import Image from 'next/image';
import devImage from "../assets/developer.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-20 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col items-center justify-center gap-4 p-6 sm:p-10 md:p-12   rounded-lg ">
        <Image src={devImage} alt="my image" className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Hari Malam Portfolio</h1>
        <p className="text-center text-sm sm:text-base md:text-lg border-2 border-blue-500 p-2 rounded-lg animate-pulse">Coming Soon</p>
      </main>
    </div>
  );
}
