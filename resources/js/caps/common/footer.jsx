import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  overflow:hidden;
`

const Image = styled.img`
  width: 100%;
`

const Footer = props => {
  return (
    <Body>
      <Image src='/image/footer.jpg' />
    </Body>
  )
}

export default Footer
