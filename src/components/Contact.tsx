import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'info@yana-consultancy.com',
    href: 'mailto:info@yana-consultancy.com',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: '+233 53 880 3918',
    href: 'https://wa.me/233538803918',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Ghana · Nigeria · Kenya & beyond',
    href: undefined,
  },
  {
    Icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri, 9am – 6pm GMT',
    href: undefined,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up to form backend (e.g. Formspree, EmailJS)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#f9f9fb] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gold/15 text-gold-hover border-gold/30 hover:bg-gold/20 mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Ready to take the next step? Reach out and let's start a conversation about your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-2">Let's Talk</h3>
              <p className="text-gray-500 leading-relaxed">
                Whether you have a question, want to learn more about a programme, or are ready
                to book — our team is here and happy to help.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-navy font-medium hover:text-gold-hover transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-navy font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Book session CTA */}
            <div className="bg-linear-to-br from-navy to-navy-light rounded-xl p-6 text-white">
              <p className="font-semibold mb-1">Prefer to go straight to booking?</p>
              <p className="text-white/65 text-sm mb-4">
                Skip the form and schedule your session directly on Calendly.
              </p>
              <a
                href="https://calendly.com/yourname/consultation"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full bg-gold hover:bg-gold-hover text-black font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Book a Session →
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <svg className="w-7 h-7 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy">Message Received!</h4>
                <p className="text-gray-500 max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  className={cn(buttonVariants({ variant: 'outline' }), 'border-navy text-navy mt-2 hover:shadow-md transition-shadow')}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name</label>
                  <Input
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-gray-200 focus:border-gold transition-shadow focus:shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-gray-200 focus:border-gold transition-shadow focus:shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Service of Interest</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-shadow focus:shadow-sm"
                  >
                    <option value="" disabled>Select a service…</option>
                    <option>Career Coaching</option>
                    <option>Business Mentorship</option>
                    <option>Life Coaching</option>
                    <option>Community Support</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="Tell us a little about where you are and what you're hoping for…"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="border-gray-200 focus:border-gold resize-none transition-shadow focus:shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3 text-base rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
