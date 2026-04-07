import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="YANA Consultancy"
            className={`object-contain transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-navy font-medium transition-colors text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/yourname/consultation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-black font-semibold text-sm px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
          >
            Book Session
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium py-1 hover:text-navy"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/yourname/consultation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-black font-semibold text-sm px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-200 w-full"
          >
            Book Session
          </a>
        </div>
      )}
    </nav>
  )
}
