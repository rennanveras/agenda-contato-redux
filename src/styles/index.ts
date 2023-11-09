import { styled, createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #f1f1f1;
  }
`

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

export const Botao = styled.button`
  display: block;
  background-color: #2e5ad1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  padding: 6px 10px;
  max-height: 34px;
  cursor: pointer;
`
export const BotaoDeletar = styled(Botao)`
  background-color: #ff0000;
`

export const BotaoEditar = styled(Botao)`
  background-color: #efc210;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #008000;
`

export default EstiloGlobal
