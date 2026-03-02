export default function ContactPage() {
  return (
    <>
      <section className="bg-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            For membership inquiries, regulatory engagement, partnerships, or media requests.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-2 uppercase tracking-wider">Contact Info</div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight mb-6">Get in Touch</h2>

              <div className="bg-section-alt rounded-xl p-5 border border-border flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-muted font-medium uppercase tracking-wider">Location</div>
                  <div className="text-foreground font-medium">Accra, Ghana</div>
                </div>
              </div>

              <div className="bg-section-alt rounded-xl p-5 border border-border flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-muted font-medium uppercase tracking-wider">Email</div>
                  <a href="mailto:President@dabaghana.com" className="text-foreground font-medium hover:text-primary transition-colors">President@dabaghana.com</a>
                </div>
              </div>

              <div className="bg-section-alt rounded-xl p-5 border border-border flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-xs text-muted font-medium uppercase tracking-wider">Phone</div>
                  <a href="tel:+233598954614" className="text-foreground font-medium hover:text-primary transition-colors">+233 598 954 614</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-section-alt rounded-2xl p-8 md:p-10 border border-border">
                <h2 className="text-2xl font-bold text-foreground tracking-tight mb-8">Send a Message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                      <input type="text" id="name" name="name" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input type="email" id="email" name="email" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <select id="subject" name="subject" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                      <option value="">Select a topic</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="regulatory">Regulatory Engagement</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="Your message..." />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-light transition-colors text-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
