import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Briefcase, Rocket, Leaf, Users } from 'lucide-react'

const services = [
  {
    Icon: Briefcase,
    title: 'Career Coaching',
    description:
      'Navigate career transitions, negotiate promotions, and build the professional brand that opens doors — with a coach who has walked the path.',
    features: ['Resume & LinkedIn Audit', 'Interview Preparation', 'Salary Negotiation', 'Career Roadmap'],
    badge: 'Most Popular',
    badgeClass: 'bg-gold/15 text-gold-hover border-gold/30',
  },
  {
    Icon: Rocket,
    title: 'Business Mentorship',
    description:
      'From idea to launch and beyond — get strategic mentorship to build a sustainable, profitable business on your own terms.',
    features: ['Business Model Design', 'Marketing Strategy', 'Financial Planning', 'Pitch Coaching'],
    badge: 'High Demand',
    badgeClass: 'bg-navy/10 text-navy border-navy/20',
  },
  {
    Icon: Leaf,
    title: 'Life Coaching',
    description:
      "Reclaim your sense of self, set boundaries, and design a life aligned with your purpose and values — not everyone else's expectations.",
    features: ['Mindset Transformation', 'Work-Life Balance', 'Confidence Building', 'Goal Setting'],
    badge: 'Transformative',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    Icon: Users,
    title: 'Community Support',
    description:
      'Join a circle of driven, supportive women. Monthly masterclasses, peer accountability groups, and a private network that lifts as it climbs.',
    features: ['Monthly Masterclasses', 'Peer Accountability', 'Private Network', 'Resource Library'],
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
            Tailored programmes designed to meet you where you are and carry you to where you need to be.
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
                {/* Icon circle */}
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
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Not sure which programme fits?</h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Book a free 20-minute discovery call and let's figure out the perfect path together.
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
