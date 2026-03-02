import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-br from-church-blue to-church-green flex items-center justify-center -mt-14">
        <div className="text-center text-white px-6 py-24">
          <div className="mx-auto mb-8 w-20 h-20 md:w-28 md:h-28 rounded-full bg-white p-2 flex items-center justify-center">
            <Image
              src="/smt-logo.jpg"
              alt="St Matthew's Taitā logo — a woven cross in black, white, and red"
              width={112}
              height={112}
              className="rounded-full"
              priority
            />
          </div>
          <p className="text-lg md:text-xl text-white/80 mb-1" lang="mi">
            Nau mai, haere mai
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-6">Welcome</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto">
            St Matthew&apos;s Anglican Church{" "}
            <span lang="mi">Taitā</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            One small church with one big heart
          </p>

          {/* Scroll indicator — aria-hidden because it is purely decorative */}
          <div className="mt-16 animate-gentle-bounce" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-white/60"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
