import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="ghana-bar" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              </div>
              <span>DABA<span className="text-primary">Ghana</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Digital Asset and Blockchain Association Ghana. Building trust, enabling innovation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Organization</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/membership" className="hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/regulatory" className="hover:text-white transition-colors">Regulatory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>Accra, Ghana</li>
              <li><a href="mailto:President@dabaghana.com" className="hover:text-white transition-colors">President@dabaghana.com</a></li>
              <li><a href="tel:+233598954614" className="hover:text-white transition-colors">+233 598 954 614</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} DABAGhana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
