import React, { Component } from 'react'
import Text from '../components/Text'
import ButtonContainer from '../components/ButtonContainer'
import AboutButtonContainer from '../components/AboutButtonContainer'
import ProjectButtonContainer from '../components/ProjectButtonContainer'
import { Redirect } from 'react-router-dom'

class Projects extends Component {
  state = {
    text: 'Portfolio/Resume',
    smartshareLink: 'https://github.com/cagborgli/.NET-SmartShare',
    dev_duelLink: 'https://github.com/cagborgli/Dev-Duel',
    buttonContainers: [
      {
        buttonText: 'Home',
        link: '/'
      },
      {
        buttonText: 'About',
        link: '/about'
      },
      {
        buttonText: 'Download Resume',
        link:
          'https://drive.google.com/file/d/1VrWf9DSKu-ENyJUP2sCoWMOx5qYTTeM2/view?usp=sharing'
      }
    ]
  }

  render () {
    const buttons = this.state.buttonContainers.map(buttonContainer => {
      return (
        <ButtonContainer.Button
          key={buttonContainer.buttonText}
          href={buttonContainer.link}
        >
          {buttonContainer.buttonText}
        </ButtonContainer.Button>
      )
    })

    return (
      <div>
        <Text> {this.state.text} </Text>
        <ProjectButtonContainer>
          <ProjectButtonContainer.smartshareButton
            href={this.state.smartshareLink}
          />
          <ProjectButtonContainer.devduelButton
            href={this.state.dev_duelLink}
          />
        </ProjectButtonContainer>{' '}
        <AboutButtonContainer>{buttons}</AboutButtonContainer>
      </div>
    )
  }
}

export default Projects
