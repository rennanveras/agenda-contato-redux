import { Provider } from 'react-redux'

import Contatos from './containers/Contatos'
import Form from './containers/Cadastro'
import Header from './containers/Header'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Form />
        <Contatos />
      </Container>
    </Provider>
  )
}

export default App
