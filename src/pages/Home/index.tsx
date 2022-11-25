import { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Play, HandPalm } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContext'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O cliclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O cliclo precisa ser de no máximo 60 minutos'),
})

export function Home() {
  const { createNewCycle, interruprActiveCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch /*reset*/ } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action='' onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton onClick={interruprActiveCycle} type='button'>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type='submit'>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
function watch(arg0: string) {
  throw new Error('Function not implemented.')
}
