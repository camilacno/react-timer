import React, { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../..'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )
        if (secondsDifference >= totalSeconds) {
          // setCycles((state) =>
          //   state.map((cycle) => {
          //     if (cycle.id === activeCycleId) {
          //       return { ...cycle, finishedDate: new Date() }
          //     } else {
          //       return cycle
          //     }
          //   })
          // )
          markCurrentCycleCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesPassed = Math.floor(currentSeconds / 60)
  const secondsPassed = currentSeconds % 60
  const minutes = String(minutesPassed).padStart(2, '0')
  const seconds = String(secondsPassed).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Counter: ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
