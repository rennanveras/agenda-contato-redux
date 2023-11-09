import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  display: block;
  padding: 6px 4px;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  width: 100%;
  background-color: transparent;
  margin: 4px 0 10px 0px;
`

export const AreaForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 24%);
  gap: 1%;
  margin: 30px 0;
`
