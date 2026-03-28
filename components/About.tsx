'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="atelier" className="relative py-32 bg-[#0C0A0A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[550px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9519f94316a5?w=900&q=85"
                alt="Jewelry artisan at work in the atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0C0A0A]/40" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-[#151010] border border-gold/20 p-6 max-w-[200px]">
              <div className="font-display text-3xl text-gold mb-1">18k</div>
              <p className="text-ivory/50 text-[10px] tracking-wider uppercase">Gold purity. Every piece, always.</p>
            </div>

            {/* Side label */}
            <div className="absolute top-8 -left-4 hidden lg:flex items-center gap-2 -rotate-90 origin-right">
              <span className="w-8 h-px bg-gold/30" />
              <span className="text-gold/40 text-[9px] tracking-[0.4em] uppercase whitespace-nowrap">The Atelier</span>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gold text-[10px] tracking-[0.45em] uppercase mb-5">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory mb-8 leading-tight">
              Born Between
              <br />
              <em className="text-gold">Paris & Dubai.</em>
            </h2>

            <div className="space-y-5 text-ivory/60 text-sm leading-relaxed">
              <p>
                Maison Joëlle was founded in 2018 by Joëlle Mansour — a Beirut-born, Paris-trained goldsmith who fell in love with Dubai&apos;s ambition and its clients&apos; stories.
              </p>
              <p>
                After a decade crafting haute joaillerie for Parisian maisons, Joëlle opened her atelier in DIFC with a singular conviction: jewelry should be as personal as a letter, as enduring as a memory.
              </p>
              <p>
                Every commission begins with a conversation. We learn about the person, the occasion, the emotion behind the request — then our goldsmiths bring it to life in 18k gold, platinum, and hand-selected gemstones.
              </p>
            </div>

            <div className="mt-10 flex items-start gap-8">
              <div>
                <div className="font-display text-3xl text-gold mb-1">500+</div>
                <p className="text-ivory/40 text-[10px] tracking-wider uppercase">Bespoke pieces created</p>
              </div>
              <div className="w-px h-12 bg-gold/20 mt-1" />
              <div>
                <div className="font-display text-3xl text-gold mb-1">12</div>
                <p className="text-ivory/40 text-[10px] tracking-wider uppercase">Countries served</p>
              </div>
              <div className="w-px h-12 bg-gold/20 mt-1" />
              <div>
                <div className="font-display text-3xl text-gold mb-1">6+</div>
                <p className="text-ivory/40 text-[10px] tracking-wider uppercase">Years in DIFC</p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-block bg-gold text-[#0A0808] text-[11px] font-semibold tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.25)]"
              >
                Visit The Atelier
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
