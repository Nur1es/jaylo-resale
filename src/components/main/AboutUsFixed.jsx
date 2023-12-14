import React from 'react'
import instagramLogo from '../assets/icon/mdi_instagram.png'
import whatsappIcon from '../assets/icon/ic_baseline-whatsapp.png'
import telegramIcon from '../assets/icon/ri_telegram-line.png'
import styled from 'styled-components'

function AboutUsFixed() {
  return (
    <AboutUsFixeded>
      <FixedText>соцсети</FixedText>
      <BorderAbout></BorderAbout>
      <Iconblock>
        <a href=""><img src={ instagramLogo } alt="" /></a>
         <a href=""><img src={ whatsappIcon } alt="" /></a>   
         <a href=""><img src={ telegramIcon } alt="" /></a>   
      </Iconblock>
    </AboutUsFixeded>
  )
}

export default AboutUsFixed
const FixedText = styled.span`
  color: #FFF;
  font-family: sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 5.4px;
  padding: 0px 0px 0px 30px;
  text-transform: uppercase;
  transform: rotate(-90deg);
`
const AboutUsFixeded = styled.div`
  height: 400px;
  width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  position: fixed;
  bottom: 30%;
  left: 94%;
  @media (max-width: 375px) {
        display: none;
  }
`

const BorderAbout = styled.div`
  border: 1px solid white;
  height: 73px;
  width: 0px;
`

const Iconblock = styled.div`
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
`