import styled from 'styled-components'
import smartshareButton from './SmartShareButton'
import devduelButton from './DevDuelButton'

const ProjectButtonContainer = styled.section`
  display: flex;
  flex-direction: csnter;
  justify-content: center;
  align-items: space between;
  margin-top: 130px;
  margin-bottom: 10px;
`
ProjectButtonContainer.smartshareButton = smartshareButton
ProjectButtonContainer.devduelButton = devduelButton

export default ProjectButtonContainer
