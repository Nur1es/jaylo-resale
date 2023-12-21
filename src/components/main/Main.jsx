import React from 'react'
import styled from 'styled-components'
import mainPhoto from '../assets/photo/mainImg.jpg'
import mainPoints from '../assets/photo/Group 30 1.png'
import AboutUsFixed from './AboutUsFixed'

function Main() {
  return (
    <MainStyle>
      <MainImg>
        <MainPhoto src={ mainPhoto } alt="" />
        <PointsStyle src={mainPoints} alt="" />
      </MainImg>
      <MainText1>
        <NewCollectionText>Новая колекция</NewCollectionText>
        <MainGlobalText1>Встречаем Новую Неделю Моды</MainGlobalText1>
      </MainText1>
      <AboutUsFixed/>
    </MainStyle>
  )
}

export default Main
const MainPhoto = styled.img`
    width: 463px;
    height: 560px;
    @media (max-width: 375px) {
        width: 140px;
        height: 168px;
  }
`

const PointsStyle = styled.img`
    position: absolute;
    z-index: -1;
    top: 130px;
    left: 120px;
    @media (max-width: 375px) {
        display: none;
  }
`

const NewCollectionText = styled.span`
  font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    letter-spacing: -0.72px;
    @media (max-width: 375px) {
        font-size: 13px;
        line-height: normal;
        letter-spacing: -0.39px;
    }
`

const MainGlobalText1 = styled.h1`
  text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.53);
    font-family: sans-serif;
    font-size: 61px;
    font-style: normal;
    font-weight: 500;
    line-height: 154.44%;
    letter-spacing: 6.1px;
    text-transform: capitalize;
    @media (max-width: 375px) {
        color: #FFF;
        font-size: 15px;
        line-height: 154.44%; /* 23.166px */
        letter-spacing: 1.5px;
    }
`
const MainStyle = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88%;
  height: 630px;
  align-items: center;
  margin: auto;
  margin-top: 12px;
  @media (max-width: 375px) {
        width: 283px;
        height: 168px;
        margin-top: 50px;
    }
`

const MainText1 = styled.div`
  margin-left: 34%;
  color: white;
  width: 795px;
`


const MainImg = styled.div`
  z-index: -1 ;
  position: absolute;
`