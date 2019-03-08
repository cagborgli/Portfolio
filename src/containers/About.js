import React, { Component } from 'react'
import Text from '../components/Text'
import AboutCard from '../components/AboutCard'
import FrameCard from '../components/FrameCard'
import ButtonContainer from '../components/ButtonContainer'
import AboutButtonContainer from '../components/AboutButtonContainer'

class About extends Component {
  state = {
    text: 'About Me',
    summary: 'I am a Software Developer',
    story: 'Tell My Story ',

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
      <div>
        <Text>{this.state.text}</Text>/>
        <AboutCard>
          <AboutCard.Summary>{this.state.summary} </AboutCard.Summary>
          <AboutCard.Story>{this.state.story} </AboutCard.Story>
        </AboutCard>
        <FrameCard>
          <FrameCard.Frame> </FrameCard.Frame>
        </FrameCard>
        <AboutButtonContainer>{buttons}</AboutButtonContainer>
      </div>
    )
  }
}

export default About
