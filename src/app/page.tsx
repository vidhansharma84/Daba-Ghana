import Image from "next/image";
import Link from "next/link";

const objectives = [
  { title: "Regulatory Compliance", desc: "Promote regulatory compliance within Ghana's digital asset sector" },
  { title: "Framework Implementation", desc: "Support implementation of Ghana's digital asset regulatory framework" },
  { title: "Policy Engagement", desc: "Engage policymakers and regulators constructively" },
  { title: "Innovation Advocacy", desc: "Advocate for innovation-friendly policies" },
  { title: "Education & Training", desc: "Provide education, training, and certification programs" },
  { title: "AML/CFT Standards", desc: "Strengthen AML/CFT compliance standards across the industry" },
];

const benefits = [
  { title: "Industry Representation", desc: "A unified voice for Ghana's digital asset community" },
  { title: "Regulatory Dialogue", desc: "Direct engagement channels with financial regulators" },
  { title: "Compliance Support", desc: "Templates, frameworks, and expert guidance" },
  { title: "Industry Networking", desc: "Connect with VASPs, fintechs, and professionals" },
  { title: "Policy Advocacy", desc: "Shape the future of digital asset regulation in Ghana" },
  { title: "Global Partnerships", desc: "Access to a global network of blockchain associations" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="DABAGhana"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary-dark/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red" />
              <div className="w-3 h-3 rounded-full bg-gold" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Advancing Digital
              <br />
              Asset Innovation
              <br />
              <span className="text-gold">in Ghana</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10">
              Building Trust. Enabling Innovation. Strengthening Regulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/membership"
                className="bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors text-lg text-center"
              >
                Become a Member
              </Link>
              <Link
                href="/about"
                className="border border-white/20 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "6+", label: "Leadership Roles" },
              { value: "4", label: "Member Tiers" },
              { value: "5+", label: "Compliance Areas" },
              { value: "5+", label: "Annual Events" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 text-center border-r border-white/10 last:border-r-0">
                <div className="text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* President & About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold/20 rounded-2xl" />
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/president.jpg"
                  alt="HRM Torgbi Xenodzi Dogbey II, President of DABAGhana"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">President</div>
                  <p className="font-bold text-xl text-white">HRM Torgbi Xenodzi Dogbey II</p>
                  <p className="text-white/60 text-sm">President, DABAGhana & The Global Nakamoto Group</p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">About Us</div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Who is<br />DABAGhana?
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                The Digital Asset and Blockchain Association Ghana (DABAGhana) is a national industry
                association representing Virtual Asset Service Providers (VASPs), blockchain innovators,
                fintech institutions, compliance professionals, and digital asset stakeholders.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We work collaboratively with financial regulators and policymakers to promote
                responsible innovation, regulatory clarity, and sustainable growth.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read more about us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Our Principles</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Built on strong values
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { value: "Integrity", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "bg-primary" },
              { value: "Transparency", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", color: "bg-gold" },
              { value: "Compliance", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", color: "bg-red" },
              { value: "Innovation", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "bg-primary" },
              { value: "Collaboration", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "bg-gold" },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white border border-border rounded-2xl p-6 md:p-8 text-center card-modern overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base">{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Objectives</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              What we&apos;re working towards
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 card-modern border border-border"
              >
                <div className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{obj.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Benefits</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Why join DABAGhana?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-2xl p-7 border border-white/10 hover:border-gold/30 transition-colors bg-white/5">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/membership"
              className="bg-gold text-dark font-bold px-10 py-4 rounded-xl hover:bg-gold-dark transition-colors text-lg inline-block"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">Governance</div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Strong leadership,<br />clear direction
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-10">
                DABAGhana is governed by an Executive Committee elected by its members, supported by
                an Advisory Board of industry leaders and legal experts providing strategic oversight.
              </p>
              <div className="bg-dark rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Advisory Board</h3>
                </div>
                <p className="text-white/50 leading-relaxed text-sm">
                  Industry leaders, legal experts, financial professionals, and technology specialists
                  providing strategic oversight and policy guidance to ensure DABAGhana remains at the
                  forefront of Ghana&apos;s digital asset landscape.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { role: "President", desc: "Provides overall strategic leadership and represents DABAGhana at national and international forums" },
                { role: "Vice President", desc: "Supports the President and oversees internal operations and member engagement" },
                { role: "Secretary", desc: "Manages association records, communications, and administrative affairs" },
                { role: "Treasurer", desc: "Oversees financial management, budgeting, and fiscal accountability" },
                { role: "Compliance Director", desc: "Leads regulatory engagement, compliance frameworks, and AML/CFT standards" },
                { role: "Technical Director", desc: "Drives blockchain technology strategy, innovation initiatives, and technical programs" },
              ].map((member, i) => (
                <div key={i} className="group flex items-center gap-5 bg-white rounded-2xl p-5 border border-border card-modern">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-primary font-bold text-sm group-hover:text-white transition-colors">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{member.role}</h3>
                    <p className="text-muted text-sm leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-6 right-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to shape the future?</h2>
              <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
                Join DABAGhana and be part of the movement driving responsible blockchain innovation
                and regulatory clarity in Ghana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-gold-dark transition-colors text-lg"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/membership"
                  className="border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
                >
                  View Membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
