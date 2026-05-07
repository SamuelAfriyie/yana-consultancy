import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Briefcase, Rocket, Leaf, Users } from 'lucide-react'

const services = [
  {
    Icon: Briefcase,
    title: 'Career Coaching',
    description:
      'Gain clarity in your career path, make confident decisions, and position yourself for growth and opportunities.',
    features: ['Career path clarity', 'Confident decision-making', 'Positioning for growth', 'Identifying opportunities'],
    badge: 'Most Popular',
    badgeClass: 'bg-gold/15 text-gold-hover border-gold/30',
  },
  {
    Icon: Rocket,
    title: 'Business Mentorship',
    description:
      'Learn how to start, structure, and grow your business with practical guidance and strategic thinking.',
    features: ['Business model design', 'Practical start-up guidance', 'Growth strategies', 'Strategic thinking'],
    badge: 'High Demand',
    badgeClass: 'bg-navy/10 text-navy border-navy/20',
  },
  {
    Icon: Leaf,
    title: 'Life Coaching',
    description:
      'Build confidence, emotional strength, and direction in your personal life so you can move forward with purpose.',
    features: ['Confidence building', 'Emotional strength', 'Finding direction', 'Moving forward with purpose'],
    badge: 'Transformative',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    Icon: Users,
    title: 'Community Support',
    description:
      'Join a circle of women who lift each other — peer accountability, shared resources, and a safe space to grow together.',
    features: ['Peer accountability', 'Safe support circle', 'Shared resources', 'Collective growth'],
    badge: 'Community',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f9f9fb] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/15 text-gold-hover border-gold/30 hover:bg-gold/20 mb-4">
            What We Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Three things every woman needs to grow: <strong>Clarity. Support. Strategy.</strong>{' '}
            This is what we provide at YANA Consultancy.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map(({ Icon, title, description, features, badge, badgeClass }) => (
            <Card
              key={title}
              className="group border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg font-bold text-navy leading-snug">
                    {title}
                  </CardTitle>
                  <Badge className={cn('text-xs shrink-0 border', badgeClass)}>
                    {badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-4">
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <ul className="space-y-1.5 mt-auto">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-linear-to-r from-navy to-navy-light rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            If you're serious about growth, let's work together.
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Book a free 20-minute discovery call and let's find the perfect path for you.
          </p>
          <a
            href="https://calendly.com/yourname/consultation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-black font-semibold text-base px-8 py-4 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}
