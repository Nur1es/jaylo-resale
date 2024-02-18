import React from 'react'
import { styled } from 'styled-components'
import MiImg from '../assets/photo/Group 30 1.png'


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
      <ImgStyle>
        <img src={MiImg} alt="" />
      </ImgStyle>
      <NumStyle>
        <Num1>1231+</Num1>
        <Num2>продукты для вас</Num2>
      </NumStyle>
    </MainStyle>
  )
}

export default AboutUs
 const MainStyle = styled.main`
  width: 100%;
  height: 1000px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
 `
 const About = styled.div`
  width: 626px;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 100px;
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
  position: relative;
  right: 500px;
  top: 210px;
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
 const ImgStyle = styled.div`
  width: 482px;
  height: 323px;
  position: relative;
  left: 300px;
 `
 const NumStyle = styled.div`
  width: 316px;
  height: 126px;
  position: relative;
  left: 500px;
  bottom: 150px;
 `
 const Num1 = styled.main`
  width: 210px;
  height: 94px;
  font-family: sans-serif;
  font-size: 61px;
  font-weight: 500;
  line-height: 94px;
  letter-spacing: 0.1em;
  text-align: left;

 `
 const Num2 = styled.main`
  width: 314px;
  height: 45px;
  font-family: sans-serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: -0.03em;
  text-align: left;

 `