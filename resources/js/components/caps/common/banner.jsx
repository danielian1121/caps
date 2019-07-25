import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  width: 100%;
  height: 115px;
  overflow:hidden;
`

const Image = styled.img`
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  right: 10px;
  width: 296px;
  height: 77px;
`

const Button = styled.a`
  height: 71px;
  width: ${props => props.width || '53px'};
  background-image: url(${props => props.url || ''});
  background-size: cover;
  cursor: pointer;
  :hover {
    background-image: url(${props => props.hover || props.url || ''});
  }
`

const Banner = props => {
  return (
    <Body>
      <Image src='/image/banner.jpg' />
      <Nav>
        <Button url='/image/button_01.png' width='70px' hover='/image/button_014.png'/>
        <Button url='/image/button_04.png' hover='/image/button_044.png'/>
        <Button url='/image/button_05.png' hover='/image/button_054.png'/>
        <Button url='/image/button_06.png' width='60px' hover='/image/button_064.png'/>
        <Button url='/image/button_08.png' hover='/image/button_083.png'/>
      </Nav>
    </Body>
  )
}

export default Banner
