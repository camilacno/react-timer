import { useState } from 'react'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmoutInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O cliclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O cliclo precisa ser de no máximo 60 minutos'),
})

// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

// Type creation based on the schema (many advantages, like type updated automatically
// by changing the schema)
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCicle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesPassed = Math.floor(currentSeconds / 60)
  const secondPassed = currentSeconds % 60
  const minutes = String(minutesPassed).padStart(2, '0')
  const seconds = String(secondPassed).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action='' onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput
            id='task'
            list='task-suggestions'
            placeholder='Dê um nome para o seu projeto'
            {...register('task')}
          />

          <datalist id='task-suggestions'>
            <option value='Projeto 1' />
            <option value='Projeto 2' />
            <option value='Projeto 3' />
            <option value='Projeto 4' />
          </datalist>

          <label htmlFor='minutesAmount'>durante</label>
          <MinutesAmoutInput
            id='minutesAmount'
            type='number'
            placeholder='00'
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type='submit'>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
