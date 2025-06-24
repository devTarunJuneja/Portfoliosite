import React, { useRef, useEffect, useMemo } from 'react'

export default function CanvasNetworkBackground({
  theme = 'light', // pass 'light' or 'dark'
  numPoints = 60,
  maxVelocity = 1.0,
  connectionDistance = 120,
  perturbation = 0.1,
  lineOpacityFactor = 0.7,
}) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const pointsRef = useRef([])

  // 🎨 Dynamic color config based on theme
  const { pointColor, lineColor, backgroundColor } = useMemo(() => {
    if (theme === 'dark') {
      return {
        pointColor: 'rgba(255,255,255,0.6)',
        lineColor: 'rgba(255,255,255,1)',
        backgroundColor: 'transparent',
      }
    }
    return {
      pointColor: 'rgba(34,34,34,0.7)',
      lineColor: 'rgba(34,34,34,1)',
      backgroundColor: 'transparent',
    }
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = canvas.parentElement.clientWidth
    let height = canvas.parentElement.clientHeight

    const resizeCanvas = () => {
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.resetTransform()
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    resizeCanvas()

    const initPoints = () => {
      const pts = []
      for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * maxVelocity
        const vx = Math.cos(angle) * speed
        const vy = Math.sin(angle) * speed
        pts.push({ x, y, vx, vy })
      }
      pointsRef.current = pts
    }
    initPoints()

    const handleResize = () => {
      resizeCanvas()
      initPoints()
    }
    window.addEventListener('resize', handleResize)

    const animate = () => {
      if (backgroundColor === 'transparent') {
        ctx.clearRect(0, 0, width, height)
      } else {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
      }

      const pts = pointsRef.current
      for (let p of pts) {
        p.vx += (Math.random() * 2 - 1) * perturbation
        p.vy += (Math.random() * 2 - 1) * perturbation
        const vmag = Math.hypot(p.vx, p.vy)
        if (vmag > maxVelocity) {
          p.vx = (p.vx / vmag) * maxVelocity
          p.vy = (p.vy / vmag) * maxVelocity
        }
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x += width
        else if (p.x > width) p.x -= width
        if (p.y < 0) p.y += height
        else if (p.y > height) p.y -= height
      }

      for (let i = 0; i < pts.length; i++) {
        const p1 = pts[i]
        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j]
          let dx = p1.x - p2.x
          let dy = p1.y - p2.y
          if (Math.abs(dx) > width / 2) {
            dx = dx > 0 ? dx - width : dx + width
          }
          if (Math.abs(dy) > height / 2) {
            dy = dy > 0 ? dy - height : dy + height
          }
          const distSq = dx * dx + dy * dy
          if (distSq < connectionDistance * connectionDistance) {
            const dist = Math.sqrt(distSq)
            const alpha = 1 - dist / connectionDistance
            const rgbaMatch = lineColor.match(/rgba?\(([^)]+)\)/)
            if (rgbaMatch) {
              const parts = rgbaMatch[1].split(',').map(s => s.trim())
              const r = parts[0], g = parts[1], b = parts[2]
              ctx.strokeStyle = `rgba(${r},${g},${b},${(alpha * lineOpacityFactor)})`
            } else {
              ctx.strokeStyle = lineColor
            }
            ctx.lineWidth = 1
            let x2 = p2.x, y2 = p2.y
            if (Math.abs(p1.x - p2.x) > width / 2) {
              x2 = p2.x + (p1.x - p2.x > 0 ? width : -width)
            }
            if (Math.abs(p1.y - p2.y) > height / 2) {
              y2 = p2.y + (p1.y - p2.y > 0 ? height : -height)
            }
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = pointColor
      const radius = 2
      for (let p of pts) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fill()
        if (p.x < connectionDistance) {
          ctx.beginPath()
          ctx.arc(p.x + width, p.y, radius, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.x > width - connectionDistance) {
          ctx.beginPath()
          ctx.arc(p.x - width, p.y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
        if (p.y < connectionDistance) {
          ctx.beginPath()
          ctx.arc(p.x, p.y + height, radius, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.y > height - connectionDistance) {
          ctx.beginPath()
          ctx.arc(p.x, p.y - height, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [
    pointColor,
    lineColor,
    backgroundColor,
    numPoints,
    maxVelocity,
    connectionDistance,
    perturbation,
    lineOpacityFactor,
  ])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ display: 'block' }}
    />
  )
}
