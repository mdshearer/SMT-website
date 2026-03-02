import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import DonationCard from "@/components/DonationCard";

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

      {/* Sunday Rhythm */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading>Join Us Sunday</SectionHeading>
          <div className="bg-white rounded-xl border-l-4 border-church-amber p-8 shadow-sm">
            <p className="text-4xl md:text-5xl font-bold text-church-blue mb-4">
              9:30 AM
            </p>
            <p className="text-lg mb-2">
              <a
                href="https://maps.google.com/?q=53+Reynolds+Street+Taita+Lower+Hutt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-church-blue hover:text-church-green transition-colors underline underline-offset-4"
              >
                53 Reynolds Street, <span lang="mi">Taitā</span>
              </a>
            </p>
            <p className="text-church-slate text-lg">
              Every Sunday, followed by coffee and{" "}
              <span lang="mi">kai</span> together.
            </p>
          </div>
        </div>
      </section>

      {/* Kāinga Housing */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading subtitle="More than housing — we're building community">
            St Matt&apos;s <span lang="mi">Kāinga</span>
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-lg text-church-slate leading-relaxed mb-4">
                Eight warm, dry homes built on our church site by the Anglican
                Diocese — four one-bedroom, three two-bedroom, and one
                four-bedroom — providing affordable housing for families and
                individuals in{" "}
                <span lang="mi">Taitā</span>.
              </p>
              <p className="text-lg text-church-slate leading-relaxed mb-6">
                Single-storey and designed for community, our{" "}
                <span lang="mi">Kāinga</span> residents are welcome
                neighbours with no obligation to participate in church
                activities.
              </p>
              <a
                href="https://housing.stmattstaita.org.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-church-blue hover:text-church-green transition-colors font-medium underline underline-offset-4"
              >
                Read the full Kāinga story &rarr;
              </a>
            </div>
            <DonationCard />
          </div>
        </div>
      </section>

      {/* Community Garden */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading>Community Garden &amp; Food Forest</SectionHeading>
          <div className="bg-white rounded-xl border-l-4 border-church-green p-8 shadow-sm mb-6">
            <p className="text-sm font-medium text-church-green mb-4">
              Official Eco Church with A Rocha Aotearoa NZ
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-church-blue text-lg mb-2">
                  Wednesdays
                </p>
                <p className="text-church-slate">
                  Open to everyone in the neighbourhood. Come along for
                  shared mahi in the garden and learn to grow your own
                  kai.
                </p>
              </div>
              <div>
                <p className="font-semibold text-church-blue text-lg mb-2">
                  Monthly Sundays
                </p>
                <p className="text-church-slate">
                  Church <span lang="mi">whānau</span> gather for
                  general maintenance and food forest care.
                </p>
              </div>
            </div>
          </div>
          <p className="text-church-slate text-lg leading-relaxed">
            Produce is shared with neighbours in need and{" "}
            <span lang="mi">Taitā Pātaka Kai</span>. No
            experience needed — everyone is welcome.
          </p>
        </div>
      </section>

      {/* Hall Hire */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading>Hall Hire</SectionHeading>
          <div className="bg-white rounded-xl border-l-4 border-church-amber p-8 shadow-sm">
            <p className="text-lg text-church-slate leading-relaxed mb-4">
              Our hall and meeting rooms are available for community groups
              across <span lang="mi">Taitā</span>, Pomare, and Avalon.
              From $15/hour.
            </p>
            <a
              href="/hall-hire"
              className="inline-flex items-center bg-church-amber text-white hover:bg-amber-600 transition-colors px-6 py-3 rounded-xl font-semibold min-h-[44px]"
            >
              View booking details &amp; conditions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
