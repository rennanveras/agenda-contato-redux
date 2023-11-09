import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const { itens: contatos } = useSelector(
    (state: RootReducer) => state.contatos
  )
  return (
    <>
      <h1>Agenda de contados Redux</h1>
      <br />
      <h3>{contatos.length} contatos na agenda</h3>
    </>
  )
}

export default Header
