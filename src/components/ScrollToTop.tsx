import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-20 right-6 z-50 w-11 h-11 rounded-full bg-navy border border-navy-light text-white flex items-center justify-center shadow-lg hover:bg-navy-light hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ${
        visible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-3'
      }`}
    >
      <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
    </button>
  )
}
