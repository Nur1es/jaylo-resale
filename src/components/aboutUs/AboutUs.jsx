import React from 'react'
import { styled } from 'styled-components'

function AboutUs() {
  return (
    <MainStyle>
      <About>
        <Theme>О Нас</Theme>
        <Text>Официальный представитель всемирно известных брендовых одежд в мире</Text>
      </About>
      <Values>
        <Theme2>ЦЕННОСТИ</Theme2>
        <Text2>
          Для нас важно сохранять серьезную оценку качества каждой вещи и трепетное отношение к комфорту гостей.
          Все наши магазины представляют собой уникальные пространства со своим дизайном и атмосферой.
        </Text2>
      </Values>
    </MainStyle>
  )
}

export default AboutUs
 const MainStyle = styled.main`
 border: 2px solid green;
  width: 1212px;
  height: 844px;
  color: white;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  
 `
 const About = styled.div`
 border: 2px solid red;
  width: 626px;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 `
 const Theme = styled.h1`
  width: 210px;
  height: 94px;
  font-family: sans-serif;
  font-size: 61px;
  font-weight: 500;
  line-height: 94px;
  letter-spacing: 0.1em;
  text-align: left;
 `
 const Text = styled.p`
  width: 626px;
  height: 64px;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: -0.03em;
  text-align: center;
 `
 const Values = styled.h2`
  width: 586px;
  height: 216px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border: 2px solid red;
 `
 const Theme2 = styled.h2`
  width: 157px;
  height: 45px;
  font-family: sans-serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: -0.03em;
  text-align: left;
 `
 const Text2 = styled.p`
  width: 586px;
  height: 160px;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 200;
  line-height: 32px;
  letter-spacing: -0.03em;
  text-align: left;
 `