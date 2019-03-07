import styled from 'styled-components'

const Button = styled.button`
  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 140px;
  background-color: #696969;
  border: 1px solid #111111;
  border-radius: 50%;
  line-height: 180px;
  text-align: center;
  text-transform: uppercase;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

  color: black;
  font-weight: bolder;
  font-family: 'cookie';
  font-size:20px

  animation-name: bounce;
  -moz-animation-name: bounce;

  :hover {
    cursor: pointer;
    animation-name: none;
    -moz-animation-name: none;
  }
`
export default Button
