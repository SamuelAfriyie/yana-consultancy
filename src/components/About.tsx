import { Badge } from '@/components/ui/badge'
import { Heart, Flame, Globe, Trophy } from 'lucide-react'

const values = [
  {
    Icon: Heart,
    title: 'Empathy First',
    desc: 'We meet every woman exactly where she is — no judgement, only understanding.',
  },
  {
    Icon: Flame,
    title: 'Bold Action',
    desc: 'We believe in moving forward with courage, even when the path feels uncertain.',
  },
  {
    Icon: Globe,
    title: 'Community Power',
    desc: 'Transformation is faster and richer when women support one another.',
  },
  {
    Icon: Trophy,
    title: 'Excellence',
    desc: 'We hold the highest standards — for ourselves and for the women we serve.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/15 text-gold-hover border-gold/30 hover:bg-gold/20 mb-4">
            Our Story
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            About YANA Consultancy
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            YANA — <em>You Are Not Alone</em> — was born from a simple but powerful truth:
            every woman deserves a safe space to grow, heal, and lead without apology.
          </p>
        </div>

        {/* Two-column layout: story + founder */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Story */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-navy text-center md:text-left">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              We are a women-led consultancy dedicated to helping women navigate life's toughest
              transitions — from career pivots and business launches to personal reinvention and
              leadership development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're an aspiring entrepreneur, a seasoned professional feeling stuck, or
              someone ready to reclaim her voice — YANA is your partner from where you are to
              where you're meant to be.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Career Coaching', 'Business Strategy', 'Life Coaching', 'Community'].map((tag) => (
                <span
                  key={tag}
                  className="bg-navy/5 text-navy text-sm font-medium px-3 py-1 rounded-full border border-navy/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Founder card */}
          <div className="bg-linear-to-br from-navy to-navy-light text-white rounded-2xl p-8 shadow-xl">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gold/20 border-2 border-gold/50 mb-5 flex items-center justify-center shrink-0">
              <img
                src="/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-gold/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`
                  }
                }}
              />
            </div>
            <h4 className="text-xl font-bold mb-1">Founder &amp; Lead Coach</h4>
            <p className="text-gold text-sm font-medium mb-4">YANA Consultancy</p>
            <p className="text-white/75 leading-relaxed text-sm">
              "I built YANA because I know what it feels like to stand at a crossroads with no map
              and no one in your corner. My mission is to be that person for women everywhere —
              the guide, the cheerleader, and the accountability partner all in one."
            </p>
            <a
              href="https://calendly.com/yourname/consultation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center mt-6 bg-gold hover:bg-gold-hover text-black font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a Session
            </a>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-navy text-center mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h4 className="text-navy font-semibold mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
