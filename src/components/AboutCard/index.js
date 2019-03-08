import styled from 'styled-components'

import Story from './Story'
import Summary from './Summary'

const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1000px;
  margin-left:10px
  float: left;
  height: 100px;
`

AboutCard.Summary = Summary
AboutCard.Story = Story

export default AboutCard
