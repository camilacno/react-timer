import styled from 'styled-components'

export const FormContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: bold;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  height: 2.5rem;
  padding: 0 0.5rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
    box-shadow: none;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmoutInput = styled(BaseInput)`
  width: 4rem;
`
