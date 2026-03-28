'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Joëlle took a story I had never told anyone and turned it into a ring that makes me cry every time I look at it. There is no other place I would trust with something this personal.',
    name: 'Nadia Al Rashid',
    title: 'Dubai, UAE',
    initial: 'N',
  },
  {
    quote: 'I flew from London just for the consultation. The experience is unlike any jeweler I have ever visited — more like therapy, more like art direction. The necklace they made is my most treasured possession.',
    name: 'Sophie Beaumont',
    title: 'London, UK',
    initial: 'S',
  },
  {
    quote: 'We commissioned our wedding bands and engagement ring here. Three pieces, all perfect. The process was collaborative, transparent, and deeply thoughtful. Maison Joëlle is in a league of its own.',
    name: 'Khalil & Lara Hayek',
    title: 'Beirut — Dubai',
    initial: 'K',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#080606] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,169,110,0.05),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[18vw] text-gold/[0.025] leading-none tracking-tight whitespace-nowrap">
          Stories
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-gold text-[10px] tracking-[0.45em] uppercase mb-4">Their Words</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6">
            Every Piece Has a Voice
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gold/30" />
            <span className="w-2 h-2 border border-gold/40 rotate-45 inline-block" />
            <span className="w-16 h-px bg-gold/30" />
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative group border border-gold/10 p-8 hover:border-gold/25 transition-colors duration-500"
            >
              {/* Quote mark */}
              <div className="font-display text-6xl text-gold/20 leading-none mb-4 -mt-2 group-hover:text-gold/30 transition-colors duration-300">
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="text-ivory/70 text-sm leading-relaxed mb-8 italic font-display">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="font-display text-gold text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="text-ivory text-sm font-medium">{t.name}</p>
                  <p className="text-gold/50 text-[10px] tracking-wider uppercase">{t.title}</p>
                </div>
              </div>

              {/* Gold corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/20 group-hover:border-gold/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
