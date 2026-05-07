import { Badge } from '@/components/ui/badge'
import { Heart, Sparkles, Star } from 'lucide-react'

const tiers = [
  {
    Icon: Heart,
    name: 'Clarity Supporter',
    range: 'GHS 150 – 250',
    tagline: 'Entry-level support',
    description:
      'Your donation funds one focused 1-on-1 session for a woman in need — helping her identify her key challenges and walk away with clear action steps.',
    impact: 'Funds a 45–60 min clarity session',
    features: [
      "Supports one woman's first step",
      'Funds key challenge identification',
      'Enables clear action planning',
    ],
    cta: 'Donate GHS 150–250',
    href: 'https://paystack.com/pay/your-link',
    highlight: false,
    badgeText: 'Entry Level',
    badgeClass: 'bg-gray-100 text-gray-600 border-gray-200',
  },
  {
    Icon: Sparkles,
    name: 'Growth Champion',
    range: 'GHS 400 – 700',
    tagline: 'Most impactful',
    description:
      'Your gift sponsors a full month of structured coaching — 3 to 4 personalised sessions with ongoing support for a woman moving from confusion to real progress.',
    impact: 'Sponsors a full month of coaching',
    features: [
      'Funds 3–4 coaching sessions',
      'Personalised guidance for one woman',
      'Ongoing support throughout the month',
    ],
    cta: 'Donate GHS 400–700',
    href: 'https://paystack.com/pay/your-link',
    highlight: true,
    badgeText: 'Most Impactful',
    badgeClass: 'bg-gold/15 text-gold-hover border-gold/30',
  },
  {
    Icon: Star,
    name: 'Transformation Partner',
    range: 'GHS 800 – 1,500',
    tagline: 'Premium impact',
    description:
      'A transformational gift — funding a complete 6 to 8 session programme with a personal strategy plan and priority support for a woman serious about lasting change.',
    impact: 'Funds a full transformation programme',
    features: [
      'Funds 6–8 in-depth sessions',
      'Covers personal strategy planning',
      'Provides priority support access',
    ],
    cta: 'Donate GHS 800–1,500',
    href: 'https://paystack.com/pay/your-link',
    highlight: false,
    badgeText: 'Premium Impact',
    badgeClass: 'bg-navy/10 text-navy border-navy/20',
  },
]

export default function Donate() {
  return (
    <section id="donate" className="py-24 bg-[#f9f9fb] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/15 text-gold-hover border-gold/30 hover:bg-gold/20 mb-4">
            Support Our Mission
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Help a Woman Rise
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            YANA Consultancy runs on the generosity of people who believe every woman deserves
            guidance, support, and a chance to thrive. Your donation directly funds coaching
            for women who cannot afford it on their own.
          </p>
        </div>

        {/* Donation tiers */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-14">
          {tiers.map(({ Icon, name, range, tagline, description, impact, features, cta, href, highlight, badgeText, badgeClass }) => (
            <div
              key={name}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                highlight
                  ? 'bg-linear-to-br from-navy to-navy-light text-white shadow-2xl ring-2 ring-gold/50 scale-[1.02]'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl text-gray-800'
              }`}
            >
              {highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-gold via-gold-hover to-gold" />
              )}

              <div className="p-8 flex flex-col flex-1 gap-5">
                {/* Icon + badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${highlight ? 'bg-gold/20 border border-gold/30' : 'bg-gold/10 border border-gold/20'}`}>
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <Badge className={`text-xs border ${badgeClass}`}>{badgeText}</Badge>
                </div>

                {/* Name + range */}
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${highlight ? 'text-white' : 'text-navy'}`}>
                    {name}
                  </h3>
                  <p className={`text-sm ${highlight ? 'text-white/60' : 'text-gray-400'}`}>{tagline}</p>
                  <p className={`text-3xl font-bold mt-3 ${highlight ? 'text-gold' : 'text-gold'}`}>
                    {range}
                  </p>
                  <p className={`text-xs mt-1 font-medium uppercase tracking-wide ${highlight ? 'text-gold/70' : 'text-gray-400'}`}>
                    Suggested donation
                  </p>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${highlight ? 'text-white/75' : 'text-gray-500'}`}>
                  {description}
                </p>

                {/* Impact line */}
                <div className={`flex items-center gap-2 text-sm font-semibold rounded-lg px-3 py-2 ${highlight ? 'bg-white/10 text-gold' : 'bg-gold/8 text-gold-hover'}`}>
                  <Heart className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                  {impact}
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${highlight ? 'text-white/70' : 'text-gray-500'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ${
                    highlight
                      ? 'bg-gold hover:bg-gold-hover text-black'
                      : 'bg-navy hover:bg-navy-light text-white'
                  }`}
                >
                  <Heart className="w-4 h-4" strokeWidth={2} />
                  {cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom donation nudge */}
        <div className="text-center bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <p className="text-navy font-semibold text-lg mb-2">
            Every donation matters — give what you can.
          </p>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mb-6">
            If you'd like to give a custom amount or make a recurring contribution, reach out directly.
            No amount is too small — together we make change possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://paystack.com/pay/your-link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-black font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Heart className="w-4 h-4" strokeWidth={2} />
              Make a Custom Donation
            </a>
            <a
              href="mailto:info@yana-consultancy.com"
              className="inline-flex items-center gap-2 border border-navy/20 text-navy hover:bg-navy/5 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
            >
              Contact Us About Giving
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
