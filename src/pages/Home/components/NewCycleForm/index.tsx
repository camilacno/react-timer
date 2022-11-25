import React from 'react'
import * as zod from 'zod'

import { FormContainer, MinutesAmoutInput, TaskInput } from './styles'

export function NewCycleForm() {

  // interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

// Type creation based on the schema (many advantages, like type updated automatically
// by changing the schema)
  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O cliclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O cliclo precisa ser de no máximo 60 minutos'),
})

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
)

  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em</label>
      <TaskInput
        id='task'
        list='task-suggestions'
        placeholder='Dê um nome para o seu projeto'
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
function useForm<T>(arg0: { resolver: any; defaultValues: { task: string; minutesAmount: number } }): { register: any; handleSubmit: any; watch: any; reset: any } {
  throw new Error('Function not implemented.')
}

function zodResolver(newCycleFormValidationSchema: zod.ZodObject<{ task: zod.ZodString; minutesAmount: zod.ZodNumber }, "strip", zod.ZodTypeAny, { task: string; minutesAmount: number }, { task: string; minutesAmount: number }>): any {
  throw new Error('Function not implemented.')
}

