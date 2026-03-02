import Link from "next/link";

const categories = [
  { title: "Full Member (VASPs)", description: "Licensed or license-applying digital asset service providers operating in Ghana." },
  { title: "Associate Member", description: "Fintech firms, law firms, audit firms, compliance consultants, and blockchain service providers." },
  { title: "Institutional Member", description: "Banks, financial institutions, investment firms, and corporate entities engaging in digital assets." },
  { title: "Affiliate Member", description: "Students, researchers, blockchain enthusiasts, and technology innovators." },
];

const benefits = [
  "Access to regulatory updates",
  "Participation in policy consultations",
  "Industry workshops and training sessions",
  "Compliance templates and guidance documents",
  "National industry representation",
  "Certification and professional development programs",
];

export default function MembershipPage() {
  return (
    <>
      <section className="bg-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Membership</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Join the leading association shaping Ghana&apos;s digital asset landscape.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Tiers</div>
            <h2 className="text-4xl font-bold text-foreground tracking-tight">Membership Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((cat, i) => (
              <div key={cat.title} className="group bg-white border border-border rounded-2xl p-8 card-modern">
                <div className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-muted leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Perks</div>
            <h2 className="text-4xl font-bold text-foreground tracking-tight">Membership Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-5 border border-border">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground font-medium text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Join?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
              For membership inquiries, contact the DABAGhana Secretariat.
            </p>
            <Link href="/contact" className="bg-gold text-dark font-bold px-10 py-4 rounded-xl hover:bg-gold-dark transition-colors text-lg inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
