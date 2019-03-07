import React, { Component } from 'react'
import HomeCard from '../components/HomeCard'
import ButtonContainer from '../components/ButtonContainer'

class Home extends Component {
  state = {
    quote: 'The Dream Is Free But The Hustle Is Sold Separately',
    name: ' Christopher Gborgli',
    buttonContainers: [
      {
        buttonText: 'About'
      },
      {
        buttonText: 'Projects'
      }
    ]
  }

  render () {
    const buttons = this.state.buttonContainers.map(buttonContainer => (
      <ButtonContainer.Button key={buttonContainer.buttonText}>
        {buttonContainer.buttonText}
      </ButtonContainer.Button>
    ))

    return (
      <HomeCard>
        <HomeCard.Title>{this.state.name}</HomeCard.Title>
        <HomeCard.Quote>{this.state.quote}</HomeCard.Quote>
        <ButtonContainer>{buttons}</ButtonContainer>
      </HomeCard>
    )
  }
}

export default Home
