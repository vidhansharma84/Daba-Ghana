const publicationTypes = [
  { title: "Regulatory Updates", description: "Stay informed on the latest regulatory developments affecting Ghana's digital asset ecosystem.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "Policy Papers", description: "In-depth analysis and recommendations on digital asset policy for Ghana and the broader region.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: "Industry Reports", description: "Comprehensive reports on the state of blockchain and digital assets in Ghana.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { title: "Meeting Minutes", description: "Records of DABAGhana committee meetings and key decisions made by the association.", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { title: "Press Releases", description: "Official statements and announcements from DABAGhana on industry matters.", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" },
];

export default function NewsPage() {
  return (
    <>
      <section className="bg-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">News &<br />Publications</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Stay informed with the latest updates, research, and publications from DABAGhana.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {publicationTypes.map((pub) => (
              <div key={pub.title} className="bg-white border border-border rounded-2xl p-8 card-modern text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pub.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{pub.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 border border-border">
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">Coming Soon</h2>
            <p className="text-muted max-w-xl mx-auto text-lg">
              DABAGhana is preparing its first round of publications. Stay tuned for regulatory
              updates, policy papers, and industry reports.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
