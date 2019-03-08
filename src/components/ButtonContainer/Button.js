import styled from 'styled-components'

const Button = styled.button`
  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 140px;
  background-color: #696969;
  border: 1px solid #111111;
  border-radius: 50%;
  text-align: center;
  text-transform: uppercase;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  color: black;
  font-weight: bolder;
  font-family: 'cookie';
  font-size:20px
  animation-name: bounce;
  :hover {
    cursor: pointer;
    animation-name: none;
  }
`
export default Button
