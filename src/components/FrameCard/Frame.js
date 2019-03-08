import styled from 'styled-components'
import img from '../../images/ProfileImage.jpg'

const Frame = styled.div`
  width: 330px;
  height: 380px;
  background-image: url(${img});
  background-size: cover;
  border-radius: 25px;
  box-shadow: 0 8px 6px -6px black;
`
export default Frame
