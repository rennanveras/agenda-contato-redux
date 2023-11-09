import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { IoIosContact } from 'react-icons/io'

import * as S from './styles'
import * as SG from '../../styles'

import { removerContato, editarContato } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const CardContatos = ({ nome, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeInput, setNomeInput] = useState('')
  const [telefoneInput, setTelefoneInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  useEffect(() => {
    if (nome.length > 0) {
      setNomeInput(nome)
    }
    if (telefone.length > 0) {
      setTelefoneInput(telefone)
    }
    if (email.length > 0) {
      setEmailInput(email)
    }
  }, [nome, telefone, email])

  function setItensForm() {
    setNomeInput(nome)
    setTelefoneInput(telefone)
    setEmailInput(email)
  }

  function cancelarEdicao(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setEstaEditando(false)
    setItensForm()
  }

  return (
    <S.CardContatos>
      <IoIosContact size={50} />
      <S.AreaFormCard>
        <S.AreaInputsCard>
          <label htmlFor="">Nome</label>
          <S.Input
            disabled={!estaEditando}
            type="text"
            value={nomeInput}
            onChange={({ target }) => setNomeInput(target.value)}
          />
          <label htmlFor="">Telefone</label>
          <S.Input
            disabled={!estaEditando}
            type="tel"
            value={telefoneInput}
            onChange={({ target }) => setTelefoneInput(target.value)}
          />
          <label htmlFor="">E-mail</label>
          <S.Input
            disabled={!estaEditando}
            type="email"
            value={emailInput}
            onChange={({ target }) => setEmailInput(target.value)}
          />
        </S.AreaInputsCard>
        <S.AreaButtons>
          {estaEditando ? (
            <>
              <SG.BotaoSalvar
                onClick={() => {
                  dispatch(
                    editarContato({
                      nome,
                      telefone,
                      email,
                      id
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </SG.BotaoSalvar>
              <SG.BotaoDeletar onClick={(e) => cancelarEdicao(e)}>
                Cancelar
              </SG.BotaoDeletar>
            </>
          ) : (
            <>
              <SG.BotaoEditar onClick={() => setEstaEditando(true)}>
                Editar
              </SG.BotaoEditar>
              <SG.BotaoDeletar onClick={() => dispatch(removerContato(id))}>
                Deletar
              </SG.BotaoDeletar>
            </>
          )}
        </S.AreaButtons>
      </S.AreaFormCard>
    </S.CardContatos>
  )
}

export default CardContatos
