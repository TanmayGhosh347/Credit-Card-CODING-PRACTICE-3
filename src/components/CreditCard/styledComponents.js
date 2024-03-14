import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3b4b69;
  width: 50vw;
  height: 100vh;
`

export const SecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 36px;
`

export const Br = styled.br`
  border: 1px solid #ffd773;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  padding-top: 40px;
  height: 50vh;
  width: 80%;
`

export const Number = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 36px;
  margin-bottom: 10px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 10px;
`
export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 10px;
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 50vh;
  width: 80%;
  border-radius: 10px;
  border: 1px;
`

export const FormHeading = styled.h1`
  font-family: 'Roboto';
  color: #344e7a;
  font-size: 22px;
`

export const InputContainer = styled.input`
  outline: none;
  border: none;
  height: 30px;
  font-size: 12px;
  border: 0.5px solid #c3cad9;
  margin: 10px;
  color: #475569;
  border-radius: 5px;
  padding: 10px;
`
