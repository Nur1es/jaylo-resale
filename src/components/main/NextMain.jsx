import React from 'react'
import MinaImg1 from '../assets/photo/main2img1.jpg'
import MinaImg2 from '../assets/photo/main2img2.jpg'
import MinaImg3 from '../assets/photo/main2img3.jpg'
import styled from 'styled-components'

function NextMain() {
  return (
    <NextMainStyled>
      <NextMainImgStyled>
        <NextMainImg1 src={MinaImg1} alt="" />
        <NextMainImg2 src={MinaImg2} alt="" />
        <NextMainImg3 src={MinaImg3} alt="" />
      </NextMainImgStyled>
      <NextmainStyledGlobalText>
        <NextMainSpan>сделка недели</NextMainSpan>
        <NextMainH1>Брендовый Магазин Одежды</NextMainH1>
        <NextMainP>Подборка самых лучших, интересных, а главное нескучных нарядов на разные случаи жизни.</NextMainP>
      </NextmainStyledGlobalText>
    </NextMainStyled>
  )
}

export default NextMain

const NextMainSpan = styled.span`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    letter-spacing: -0.72px;
    @media (max-width: 375px) {
        font-size: 13px;
        letter-spacing: -0.39px;;
  }
`
const NextMainH1 = styled.span`
    color: #FFF;
    text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.53);
    font-size: 61px;
    font-style: normal;
    font-weight: 500;
    line-height: 154.44%;
    letter-spacing: 6.1px;
    text-transform: capitalize;
    @media (max-width: 375px) {
        font-size: 15px;
        letter-spacing: 1.5px;
  }
`
const NextMainP = styled.p`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    letter-spacing: -0.72px;
    @media (max-width: 375px) {
        font-size: 9px;
        letter-spacing: -0.27px;
  }
`


const NextMainImg1 = styled.img`
    width: 269px;
    height: 460px;
    @media (max-width: 375px) {
        display: none;
  }
`
const NextMainImg2 = styled.img`
    width: 269px;
    height: 460px;
    @media (max-width: 375px) {
        width: 100px;
        height: 171px;
  }
`
const NextMainImg3 = styled.img`
    width: 269px;
    height: 460px;
    @media (max-width: 375px) {
        width: 100px;
        height: 171px;
  }
`

const NextmainStyledGlobalText = styled.div`
    position: relative;
    left: 43%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 634px;
    height: 346px;
    @media (max-width: 375px) {
        width: 146px;
        height: 122px;
  }
`

const NextMainImgStyled = styled.div`
    position: absolute;
    z-index: -2;
`

const NextMainStyled = styled.main`
    width: 88%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 460px;
    margin: auto;
    margin-top: 130px;
    border: 1px solid red;
    @media (max-width: 375px) {
        height: 171px;
        margin-top: 50px;
        width: 79%;
  }
`
