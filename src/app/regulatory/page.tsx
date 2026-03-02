const complianceAreas = [
  { title: "Anti-Money Laundering (AML)", description: "Ensuring VASPs implement robust AML controls, customer due diligence, and suspicious transaction reporting mechanisms." },
  { title: "Counter-Terrorism Financing (CFT)", description: "Supporting compliance with CFT requirements to prevent the misuse of digital assets for terrorism financing." },
  { title: "VASP Guidelines", description: "Helping members navigate Virtual Asset Service Provider registration, licensing, and ongoing regulatory requirements." },
  { title: "Risk-Based Compliance Frameworks", description: "Guiding members in implementing risk-based approaches to compliance that are proportionate and effective." },
  { title: "Financial Reporting & Governance", description: "Promoting transparent financial reporting standards and strong corporate governance practices." },
];

export default function RegulatoryPage() {
  return (
    <>
      <section className="bg-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Regulatory &<br />Compliance</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Supporting members in building compliant, trustworthy digital asset operations in Ghana.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Approach</div>
            <h2 className="text-4xl font-bold text-foreground tracking-tight mb-6">Our Approach</h2>
            <p className="text-muted text-lg leading-relaxed">
              DABAGhana facilitates structured engagement between industry stakeholders and national
              regulators to ensure clarity, accountability, and responsible market growth. We support
              members in aligning with Ghana&apos;s evolving regulatory landscape.
            </p>
          </div>

          <div className="max-w-2xl mb-12">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Focus Areas</div>
            <h2 className="text-4xl font-bold text-foreground tracking-tight">Compliance Areas</h2>
          </div>
          <div className="space-y-4">
            {complianceAreas.map((area, i) => (
              <div key={i} className="group bg-white border border-border rounded-2xl p-8 card-modern flex items-start gap-6">
                <div className="text-4xl font-bold text-border group-hover:text-primary/20 transition-colors flex-shrink-0 w-12">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Need Compliance Guidance?</h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
            DABAGhana provides compliance templates, guidance documents, and direct support
            to help members meet regulatory requirements.
          </p>
          <a href="mailto:President@dabaghana.com" className="bg-gold text-dark font-bold px-10 py-4 rounded-xl hover:bg-gold-dark transition-colors text-lg inline-block">
            Reach Out
          </a>
        </div>
      </section>
    </>
  );
}
