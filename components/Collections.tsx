'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const collections = [
  {
    category: 'Rings',
    tagline: 'Symbols of Forever',
    desc: 'From solitaire engagement rings to bold signet pieces — each ring is sized, set, and engraved to carry your exact intention.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85',
    alt: 'Bespoke gold engagement ring with diamond',
    href: '#contact',
  },
  {
    category: 'Necklaces',
    tagline: 'Close to Your Heart',
    desc: 'Delicate pendants and statement chains, each crafted in 18k gold. Worn near the skin, layered with meaning, made to last generations.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85',
    alt: 'Elegant gold necklace pendant on skin',
    href: '#contact',
  },
  {
    category: 'Bracelets',
    tagline: 'The Art of Adornment',
    desc: 'Tennis bracelets, charm cuffs, and sculptural bangles. Wrist adornment elevated to art — made for the woman who collects stories.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85',
    alt: 'Luxury gold bracelet and accessories',
    href: '#contact',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-32 bg-[#0A0808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-xl"
        >
          <p className="text-gold text-[10px] tracking-[0.45em] uppercase mb-4">Our Craft</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6 leading-tight">
            Collections
          </h2>
          <p className="text-ivory/50 text-sm leading-relaxed">
            Each category is a world unto itself. Browse for inspiration, then let us create something entirely yours.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          {collections.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0A0808] overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[420px] md:h-[520px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0808] via-[#0A0808]/30 to-transparent" />

                {/* Category tag */}
                <div className="absolute top-6 right-6">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-gold/80 border border-gold/30 bg-[#0A0808]/60 backdrop-blur-sm px-3 py-1.5">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gold text-[9px] tracking-[0.35em] uppercase mb-2">{item.tagline}</p>
                <h3 className="font-display text-2xl text-ivory mb-4">{item.category}</h3>
                <p className="text-ivory/50 text-sm leading-relaxed mb-6">{item.desc}</p>

                <a
                  href={item.href}
                  className="inline-flex items-center gap-3 text-gold text-[10px] tracking-[0.25em] uppercase group-hover:gap-4 transition-all duration-300"
                >
                  Commission a Piece
                  <span className="w-8 h-px bg-gold transition-all duration-300 group-hover:w-12" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
