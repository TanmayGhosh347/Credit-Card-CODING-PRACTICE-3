import {useState} from 'react'

import {
  AppContainer,
  FirstContainer,
  SecondContainer,
  MainHeading,
  Br,
  CardContainer,
  Number,
  Paragraph,
  Name,
  FormContainer,
  FormHeading,
  InputContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, updateCardNumber] = useState('')
  const [name, cardHolderName] = useState('')

  const onchangeName = event => cardHolderName(event.target.value)
  const onchangeCardNumber = event => updateCardNumber(event.target.value)

  return (
    <AppContainer>
      <FirstContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <Br />
        <CardContainer data-testid="creditCard">
          <Number>{cardNo}</Number>
          <Paragraph>CARDHOLDER NAME</Paragraph>
          <Name>{name}</Name>
        </CardContainer>
      </FirstContainer>
      <SecondContainer>
        <FormContainer>
          <FormHeading>Payment Method</FormHeading>
          <InputContainer
            type="text"
            placeholder="Card Number"
            value={cardNo}
            onChange={onchangeCardNumber}
          />
          <InputContainer
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onchangeName}
          />
        </FormContainer>
      </SecondContainer>
    </AppContainer>
  )
}

export default CreditCard
