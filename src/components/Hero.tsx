import { CalendarCheck, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-navy via-navy-light to-[#0d2e4d] flex flex-col items-center justify-between text-white text-center px-6 pt-32 md:pt-28 pb-10 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6 flex-1 justify-center py-8">
        {/* Badge */}
        <span className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
          Women's Empowerment &amp; Support
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm Patricia.{' '}
          <span className="block text-gold mt-2">You Are Not Alone.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
          I help women gain clarity, confidence, and direction in life, career, and business.
          You don't have to figure it all out alone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a
            href="#donate"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-black font-semibold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <Heart className="w-4 h-4" strokeWidth={2} />
            Support Our Mission
          </a>
          <a
            href="https://calendly.com/yourname/consultation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white bg-white/5 hover:bg-white hover:text-navy hover:border-white font-semibold px-8 py-3 text-base rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
          >
            <CalendarCheck className="w-4 h-4" strokeWidth={2} />
            Book a Session
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 mt-6 pt-6 border-t border-white/10 w-full">
          {[
            { value: '500+', label: 'Women Supported' },
            { value: '10+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-gold">{stat.value}</p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1 text-white/40 text-xs pb-2">
        <span>Scroll</span>
        <div className="w-0.5 h-8 bg-white/20 rounded-full relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  )
}
