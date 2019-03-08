import React, { Component } from 'react'
import Text from '../components/Text'
import AboutCard from '../components/AboutCard'
import FrameCard from '../components/FrameCard'
import ButtonContainer from '../components/ButtonContainer'
import AboutButtonContainer from '../components/AboutButtonContainer'

class About extends Component {
  state = {
    text: 'About Me',
    buttonContainers: [
      {
        buttonText: 'Home',
        link: '/'
      },
      {
        buttonText: 'Projects',
        link: '/projects'
      }
    ]
  }

  render () {
    const buttons = this.state.buttonContainers.map(buttonContainer => (
      <ButtonContainer.Button
        key={buttonContainer.buttonText}
        href={buttonContainer.link}
      >
        {buttonContainer.buttonText}
      </ButtonContainer.Button>
    ))

    return (
      <div>
        <Text>{this.state.text}</Text>/>
        <AboutCard>
          <AboutCard.Summary>
            I am a Software Developer with a Bs in Computer Science from the
            Midwestern State University.Programming languages I am proficient in
            are C++,C#,Java,Python{' '}
          </AboutCard.Summary>
          <AboutCard.Story>
            I am from Ghana, located in the Western part of Africa where the
            weather is almost always tropical all season long. Growing up my
            father would enroll me in summer programs just to keep me busy
            during long school vacations. I develpment my affinity for
            technology, software develpment to be specific from my foundation
            for software development summmer program. I had found an easier way
            to complete my math assignments developing math algorithms using
            C.To give me access to more resources and opportunity, myy father
            encouraged my university education her in the United States. While
            enrolled full-time at Midwestern State University, I worked fulltime
            as well in Customer Service.At Midwestern I participated in a
            department wide online competitive Programming contest where I
            solved 50 plus question to develop my algorithm skill, development
            two stand alone application games, collaborated in two major
            development projects.Helping my fellow advocates with questions and
            aiming to be the best team helped me become a better team player.I
            assumed a supervisor position where I developed a minimum of 20
            advocates daily to get them up for success shaped up my leadership
            skills.During my leisure time I watch tv shows, movies, and hangout
            with my friends. I have a dog name "Bubbles" and I volunteering at
            my nearest food bank anytime a chance.{' '}
          </AboutCard.Story>
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
