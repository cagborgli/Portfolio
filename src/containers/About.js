import React, { Component } from 'react'
import FrameCard from '../components/FrameCard'
import ButtonContainer from '../components/ButtonContainer'

class About extends Component {
  state = {
    buttonContainers: [
      {
        buttonText: 'Home'
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
        <FrameCard>
            <ButtonContainer>{buttons}</ButtonContainer>
            </FrameCard>     
    )
  }
}

export default About
