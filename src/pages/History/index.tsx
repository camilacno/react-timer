import { HistoryContainer, HistoryTable, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <Status statusColor='green'>Concluído</Status>
            </tr>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <Status statusColor='green'>Concluído</Status>
            </tr>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <Status statusColor='yellow'>Em andamento</Status>
            </tr>
            <tr>
              <td>Descrição da tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <Status statusColor='red'>Interrompido</Status>
            </tr>
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  )
}
