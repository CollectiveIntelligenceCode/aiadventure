'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  targetAlpha: number
  colorIndex: number
}

const COLORS = [
  'rgba(79, 127, 255,',
  'rgba(99, 102, 241,',
  'rgba(139, 92, 246,',
  'rgba(148, 163, 184,',
]

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const sizeRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h
      sizeRef.current = { width: w, height: h }
    }

    function createParticle(): Particle {
      const { width, height } = sizeRef.current
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        alpha: 0,
        targetAlpha: Math.random() * 0.5 + 0.1,
        colorIndex: Math.floor(Math.random() * COLORS.length),
      }
    }

    function initParticles() {
      const { width, height } = sizeRef.current
      const count = Math.min(Math.floor((width * height) / 8000), 120)
      particlesRef.current = Array.from({ length: count }, createParticle)
    }

    function animate() {
      const { width, height } = sizeRef.current
      ctx!.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      const maxDist = 160

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
        p.alpha += (p.targetAlpha - p.alpha) * 0.02
        if (Math.abs(p.alpha - p.targetAlpha) < 0.01) {
          p.targetAlpha = Math.random() * 0.5 + 0.05
        }
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = `${COLORS[p.colorIndex]}${p.alpha})`
        ctx!.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.07
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(79, 127, 255, ${opacity})`
            ctx!.lineWidth = 0.5
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(animate)
    }

    resize()
    initParticles()
    animate()

    const ro = new ResizeObserver(() => {
      resize()
      initParticles()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  )
}
