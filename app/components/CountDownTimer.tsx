'use client'

import { useEffect, useState } from "react"

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Data do webinar: 27 de Abril de 2024 às 21h (Horário de Brasília)
    const targetDate = new Date('2024-04-27T21:00:00-03:00')
    
    const updateTimer = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor(
          (difference % (1000 * 60)) / 1000
        )

        setTimeLeft({ 
          days,
          hours,
          minutes,
          seconds 
        })
      }
    }

    // Atualiza imediatamente e a cada segundo
    updateTimer()
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="text-white">
      <span className="block text-sm">Workshop começa em:</span>
      <div className="flex gap-4 text-2xl font-bold">
        <span className="tabular-nums">
          {String(timeLeft.days).padStart(2, '0')}d 
          {String(timeLeft.hours).padStart(2, '0')}h 
          {String(timeLeft.minutes).padStart(2, '0')}m 
          {String(timeLeft.seconds).padStart(2, '0')}s
        </span>
      </div>
    </div>
  )
}