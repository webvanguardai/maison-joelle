'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#0A0808]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-gold text-[10px] tracking-[0.45em] uppercase mb-4">Begin Here</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6 leading-tight">
            Your Story Begins
            <br />
            <em className="text-gold">With a Conversation.</em>
          </h2>
          <p className="text-ivory/50 text-sm leading-relaxed">
            Fill in the form below or reach us directly on WhatsApp. We reply within one business day, in English, Arabic, or French.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3"
          >
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Joëlle Mansour"
                    className="w-full bg-transparent border border-gold/20 group-hover:border-gold/40 focus:border-gold text-ivory placeholder-ivory/20 px-4 py-3.5 text-sm transition-colors duration-300"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent border border-gold/20 group-hover:border-gold/40 focus:border-gold text-ivory placeholder-ivory/20 px-4 py-3.5 text-sm transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Type of Piece
                </label>
                <select
                  name="piece_type"
                  className="w-full bg-[#0A0808] border border-gold/20 group-hover:border-gold/40 focus:border-gold text-ivory/70 px-4 py-3.5 text-sm transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Select a category…</option>
                  <option>Engagement Ring</option>
                  <option>Wedding Band</option>
                  <option>Necklace / Pendant</option>
                  <option>Bracelet</option>
                  <option>Earrings</option>
                  <option>Custom Commission</option>
                  <option>Repair / Redesign</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Tell Us Your Story
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Share the occasion, the person, the feeling behind your commission. The more you tell us, the better we can design something extraordinary…"
                  className="w-full bg-transparent border border-gold/20 group-hover:border-gold/40 focus:border-gold text-ivory placeholder-ivory/20 px-4 py-3.5 text-sm transition-colors duration-300 resize-none"
                />
              </div>

              {/* Budget range */}
              <div className="group">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">
                  Approximate Budget
                </label>
                <select
                  name="budget"
                  className="w-full bg-[#0A0808] border border-gold/20 group-hover:border-gold/40 focus:border-gold text-ivory/70 px-4 py-3.5 text-sm transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Prefer not to say</option>
                  <option>AED 5,000 – 15,000</option>
                  <option>AED 15,000 – 40,000</option>
                  <option>AED 40,000 – 100,000</option>
                  <option>AED 100,000+</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-gold text-[#0A0808] text-[11px] font-semibold tracking-[0.3em] uppercase px-8 py-4 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
                >
                  Send My Story
                </button>

                <a
                  href="https://wa.me/971585324519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border border-[#25D366]/40 text-[#25D366] text-[11px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#25D366]/10 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="border border-gold/15 p-5 hover:border-gold/30 transition-colors duration-300">
                <p className="text-[9px] tracking-[0.4em] uppercase text-gold/50 mb-2">Atelier Address</p>
                <p className="text-ivory/80 text-sm">Gate Building, Level 2<br />Dubai International Financial Centre<br />Dubai, UAE</p>
              </div>
              <div className="border border-gold/15 p-5 hover:border-gold/30 transition-colors duration-300">
                <p className="text-[9px] tracking-[0.4em] uppercase text-gold/50 mb-2">Hours</p>
                <p className="text-ivory/80 text-sm">Monday – Saturday: 10:00 – 20:00<br />By appointment preferred</p>
              </div>
              <div className="border border-gold/15 p-5 hover:border-gold/30 transition-colors duration-300">
                <p className="text-[9px] tracking-[0.4em] uppercase text-gold/50 mb-2">Languages</p>
                <p className="text-ivory/80 text-sm">English · Arabic · French</p>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="relative overflow-hidden" style={{ height: '240px' }}>
              <iframe
                title="Maison Joëlle — DIFC Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8754977555586!2d55.27560687456963!3d25.210520429673783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42857a76c10f%3A0x6c7e0e3e8f1b6b3c!2sDubai%20International%20Financial%20Centre!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="240"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5) brightness(0.7)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-gold/15" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
