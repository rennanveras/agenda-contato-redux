import styled from 'styled-components'

export const CardContatos = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  background-color: #e8e8e8;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`

export const AreaFormCard = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .areaInputs {
    width: 80%;
  }
`
export const AreaInputsCard = styled.div`
  width: 80%;

  label {
    color: #7d7d7d;
    padding: 2px;
  }
`

export const Input = styled.input`
  display: block;
  padding: 6px 2px;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  width: 100%;
  background-color: transparent;
  margin: 4px 0 10px 0px;
`

export const AreaButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
