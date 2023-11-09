import { useSelector } from 'react-redux'

import CardContatos from '../../components/Card'
import * as S from './styles'

import { RootReducer } from '../../store'

const Contatos = () => {
  const { itens: contatos } = useSelector(
    (state: RootReducer) => state.contatos
  )
  return (
    <S.AreaContatos>
      <ul>
        {contatos.map((item) => (
          <li key={item.id}>
            <CardContatos
              nome={item.nome}
              telefone={item.telefone}
              email={item.email}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </S.AreaContatos>
  )
}

export default Contatos
