import styled from 'styled-components'

export const HistoryContainer = styled.main`
  padding: 3.5rem;

  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.5rem;
  }
`

export const HistoryTable = styled.div`
  flex: 1;
  margin-top: 2re;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;
      text-align: left;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;

      &:first-child {
        border-bottom-left-radius: 8px;
        width: 50%;
      }

      &:last-child {
        border-bottom-right-radius: 8px;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    border-radius: 50%;
    content: '';
    height: 0.5rem;
    width: 0.5rem;
  }
`
