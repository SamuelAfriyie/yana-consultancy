import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Abena K.',
    role: 'Entrepreneur, Accra',
    initials: 'AK',
    quote:
      'YANA changed my life. I went from being completely stuck in a job I hated to launching my own skincare brand within 6 months. The coaching was practical, personal, and powerful.',
    stars: 5,
    service: 'Business Mentorship',
  },
  {
    name: 'Priscilla M.',
    role: 'HR Manager, Lagos',
    initials: 'PM',
    quote:
      'I finally landed the promotion I had been chasing for 3 years. The career coaching helped me articulate my value and walk into that boardroom with total confidence.',
    stars: 5,
    service: 'Career Coaching',
  },
  {
    name: 'Fatima A.',
    role: 'Nurse & Mother of 3',
    initials: 'FA',
    quote:
      'Life coaching with YANA gave me the clarity I desperately needed. I learned to set boundaries, prioritise myself, and show up as the best version of me — at work and at home.',
    stars: 5,
    service: 'Life Coaching',
  },
  {
    name: 'Chiamaka O.',
    role: 'Tech Professional, Nairobi',
    initials: 'CO',
    quote:
      "The YANA community is unlike anything I've experienced. The monthly masterclasses, the sisterhood, the accountability — it's the support system every woman needs in her corner.",
    stars: 5,
    service: 'Community Support',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/15 text-gold-hover border-gold/30 hover:bg-gold/20 mb-4">
            Women's Voices
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Real stories from real women who chose to rise — and never looked back.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border border-gray-100 bg-[#f9f9fb] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <CardContent className="p-6 flex flex-col gap-4 h-full">
                {/* Opening quote mark — typographic, not emoji */}
                <svg
                  className="w-8 h-8 text-gold/25"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.334C7.334 11.794 8.794 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.666C21.334 11.794 22.794 10 24 10V8z" />
                </svg>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.quote}</p>

                <div className="space-y-1.5">
                  <StarRating count={t.stars} />
                  <span className="inline-block text-xs bg-navy/8 text-navy font-medium px-2 py-0.5 rounded-full">
                    {t.service}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-navy to-navy-light text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Women Transformed' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '10+', label: 'Years of Experience' },
            { value: '12+', label: 'Countries Served' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-3xl font-bold text-gold">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
