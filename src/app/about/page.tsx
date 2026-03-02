import Image from "next/image";

const values = [
  { name: "Integrity", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Transparency", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Compliance", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { name: "Innovation", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { name: "Collaboration", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
];

const governance = [
  "President", "Vice President", "Secretary", "Treasurer", "Compliance Director", "Technical Director",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">About DABAGhana</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Fostering responsible blockchain innovation while ensuring compliance with
            Ghana&apos;s financial laws and global best practices.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary rounded-2xl p-10 text-white">
              <div className="text-gold text-sm font-bold uppercase tracking-wider mb-4">Vision</div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To position Ghana as a leading regulated digital asset hub in Africa.
              </p>
            </div>
            <div className="bg-dark rounded-2xl p-10 text-white">
              <div className="text-gold text-sm font-bold uppercase tracking-wider mb-4">Mission</div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To foster responsible blockchain innovation while ensuring compliance with
                Ghana&apos;s financial laws and global best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Values</div>
            <h2 className="text-4xl font-bold text-foreground tracking-tight">Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((val) => (
              <div key={val.name} className="bg-white rounded-2xl p-6 text-center card-modern border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={val.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground text-sm">{val.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Identity</div>
              <h2 className="text-4xl font-bold text-foreground tracking-tight mb-6">Who We Are</h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                DABAGhana is a national industry association representing Virtual Asset Service
                Providers (VASPs), blockchain innovators, fintech institutions, compliance
                professionals, and digital asset stakeholders in Ghana.
              </p>
              <p className="text-muted leading-relaxed">
                DABAGhana works collaboratively with financial regulators and policymakers to promote
                responsible innovation, regulatory clarity, and sustainable growth within Ghana&apos;s
                digital asset ecosystem.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold/20 rounded-2xl" />
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/president.jpg"
                  alt="HRM Torgbi Xenodzi Dogbey II, President of DABAGhana"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">President</div>
                  <p className="font-bold text-xl text-white">HRM Torgbi Xenodzi Dogbey II</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Leadership</div>
            <h2 className="text-4xl font-bold tracking-tight">Governance Structure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-gold text-sm font-bold uppercase tracking-wider mb-6">Executive Committee</h3>
              <div className="space-y-3">
                {governance.map((role) => (
                  <div key={role} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-medium flex items-center gap-3 hover:border-gold/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                      {role[0]}
                    </div>
                    {role}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-gold text-sm font-bold uppercase tracking-wider mb-6">Advisory Board</h3>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-white/60 leading-relaxed text-lg">
                  Comprised of industry leaders, legal experts, financial professionals, and
                  technology specialists providing strategic oversight and policy guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
