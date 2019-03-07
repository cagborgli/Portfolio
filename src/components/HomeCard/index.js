import styled from 'styled-components'

import Title from './Title'
import Quote from './Quote'

const HomeCard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95%;
  width: 100%;
`

HomeCard.Title = Title
HomeCard.Quote = Quote

export default HomeCard
