'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'We begin with an intimate conversation — your story, your vision, the occasion. Over tea or over the phone, we listen before we draw.',
    duration: '1–2 Sessions',
  },
  {
    number: '02',
    title: 'Design Sketch',
    desc: 'Our artisans translate your vision into hand-drawn sketches and 3D renders. Every proportion, every gemstone placement, reviewed together.',
    duration: '5–7 Days',
  },
  {
    number: '03',
    title: 'Crafting',
    desc: 'Skilled goldsmiths shape precious metals by hand. Gemstones are ethically sourced and set with millimetre precision in our Dubai atelier.',
    duration: '3–6 Weeks',
  },
  {
    number: '04',
    title: 'Delivery',
    desc: 'Your piece arrives in our signature box — with a certificate of authenticity, a care guide, and the story of how it came to be.',
    duration: 'Private Ceremony',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="bespoke" className="relative py-32 bg-[#0C0A0A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,169,110,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-gold text-[10px] tracking-[0.45em] uppercase mb-4">How We Work</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6">
            The Bespoke Journey
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gold/30" />
            <span className="w-2 h-2 border border-gold/40 rotate-45 inline-block" />
            <span className="w-16 h-px bg-gold/30" />
          </div>
        </motion.div>

        {/* Steps grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative group p-8 lg:p-10 border-t border-l border-gold/10 hover:bg-gold/[0.03] transition-colors duration-500"
            >
              {/* Step number */}
              <div className="font-display text-6xl text-gold/10 group-hover:text-gold/20 transition-colors duration-500 leading-none mb-8 font-bold">
                {step.number}
              </div>

              {/* Gold accent line */}
              <div className="w-8 h-px bg-gold mb-6 transition-all duration-500 group-hover:w-16" />

              {/* Title */}
              <h3 className="font-display text-2xl text-ivory mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-ivory/50 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Duration tag */}
              <span className="inline-block text-gold/60 text-[9px] tracking-[0.3em] uppercase border border-gold/20 px-3 py-1">
                {step.duration}
              </span>

              {/* Connector arrow (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                  <div className="w-6 h-px bg-gold/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-transparent border border-gold/40 text-gold text-[11px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold hover:text-[#0A0808] hover:border-gold transition-all duration-300"
          >
            Start Your Bespoke Journey
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
