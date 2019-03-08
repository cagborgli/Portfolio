import React, { Component } from 'react'
import Text from '../components/Text'
import ButtonContainer from '../components/ButtonContainer'
import AboutButtonContainer from '../components/AboutButtonContainer'
import ProjectButtonContainer from '../components/ProjectButtonContainer'

class Projects extends Component {
  state = {
    text: 'Projects Completed',
    buttonContainers: [
      {
        buttonText: 'Home'
      },
      {
        buttonText: 'About'
      },
      {
        buttonText: 'Download Resume'
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
        <Text> {this.state.text} </Text>
        <ProjectButtonContainer>
          <ProjectButtonContainer.smartshareButton />
          <ProjectButtonContainer.devduelButton />
        </ProjectButtonContainer>{' '}
        <AboutButtonContainer>{buttons}</AboutButtonContainer>
      </div>
    )
  }
}

export default Projects
