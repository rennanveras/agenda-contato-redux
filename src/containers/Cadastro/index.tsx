import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { cadastrarContato } from '../../store/reducers/contatos'

import * as SG from '../../styles'
import * as S from './styles'

const Form = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  function addContato(e: FormEvent) {
    e.preventDefault()

    dispatch(
      cadastrarContato({
        nome,
        telefone,
        email
      })
    )
  }
  return (
    <S.Content>
      <S.AreaForm>
        <S.Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <S.Input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
        />
        <S.Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <SG.Botao type="submit" onClick={(e) => addContato(e)}>
          Adicionar
        </SG.Botao>
      </S.AreaForm>
    </S.Content>
  )
}

export default Form
