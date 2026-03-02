const events = [
  { title: "National Blockchain & Digital Asset Summit", description: "Ghana's premier gathering of blockchain leaders, regulators, and innovators discussing the future of digital assets.", type: "Summit" },
  { title: "AML/CFT Compliance Workshops", description: "Practical workshops on Anti-Money Laundering and Counter-Terrorism Financing compliance for VASPs.", type: "Workshop" },
  { title: "Digital Asset Licensing Masterclasses", description: "In-depth masterclasses guiding organizations through the digital asset licensing process in Ghana.", type: "Masterclass" },
  { title: "Industry Roundtable Discussions", description: "Invitation-only roundtables bringing together regulators, industry players, and policymakers.", type: "Roundtable" },
  { title: "Annual General Meeting (AGM)", description: "The yearly gathering of all DABAGhana members to review progress, elect leadership, and set strategic direction.", type: "AGM" },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Events &<br />Programs</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Engage, learn, and connect through our industry events and professional programs.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((event, i) => (
              <div key={event.title} className={`group bg-white border border-border rounded-2xl p-8 card-modern ${i === 4 ? "md:col-span-2 md:max-w-lg md:mx-auto md:w-full" : ""}`}>
                <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  {event.type}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                <p className="text-muted leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Stay Connected</div>
          <h2 className="text-4xl font-bold text-foreground tracking-tight mb-4">Stay Updated</h2>
          <p className="text-muted max-w-xl mx-auto mb-10 text-lg">
            Contact us to receive information about upcoming events and programs.
          </p>
          <a href="mailto:President@dabaghana.com" className="bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-light transition-colors text-lg inline-block">
            Get Notified
          </a>
        </div>
      </section>
    </>
  );
}
