'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function GoldParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle system
    const count = 80
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      alphaDir: (Math.random() - 0.5) * 0.005,
    }))

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(201, 169, 110, ${(1 - dist / 120) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 169, 110, ${p.alpha})`
        ctx.fill()

        // Update
        p.x += p.vx
        p.y += p.vy
        p.alpha += p.alphaDir
        if (p.alpha > 0.6 || p.alpha < 0.05) p.alphaDir *= -1
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0808]">
      {/* Background gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120D0D] via-[#0A0808] to-[#0D0A05]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,169,110,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0808] to-transparent" />
      </div>

      {/* Canvas particles */}
      <GoldParticleCanvas />

      {/* Decorative corner ornaments */}
      <div className="absolute top-28 left-8 md:left-16 w-16 h-16 border-t border-l border-gold/20" />
      <div className="absolute top-28 right-8 md:right-16 w-16 h-16 border-t border-r border-gold/20" />
      <div className="absolute bottom-16 left-8 md:left-16 w-16 h-16 border-b border-l border-gold/20" />
      <div className="absolute bottom-16 right-8 md:right-16 w-16 h-16 border-b border-r border-gold/20" />

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-headline label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-10 h-px bg-gold/40" />
          <span className="text-gold text-[10px] tracking-[0.45em] uppercase font-light">
            Dubai · DIFC · Est. 2018
          </span>
          <span className="w-10 h-px bg-gold/40" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] tracking-[-0.01em] mb-6"
          >
            Every Piece
            <br />
            <em className="text-gold not-italic">Begins With</em>
            <br />
            a Story.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-ivory/60 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-10 tracking-wide"
          >
            Bespoke fine jewelry, conceived in Paris, crafted by hand in Dubai.
            Each commission is a collaboration — your life, your love, transformed into a piece that endures.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-block bg-gold text-[#0A0808] text-[11px] font-semibold tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
            >
              Begin Your Design
            </a>
            <a
              href="#collections"
              className="inline-block border border-gold/50 text-gold text-[11px] font-medium tracking-[0.3em] uppercase px-10 py-4 hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              View Collections
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/30 text-[9px] tracking-[0.4em] uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
