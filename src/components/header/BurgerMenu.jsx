import React from 'react'
import burgerMenu from '../../assets/icons/Group 31.png'
import styled from 'styled-components'

const BurgerMenu = ({onClick}) => {

  return (
    <div>
      <BurgerMenuS onClick={onClick} src={burgerMenu} alt="" />
    </div>
  )
}

export default BurgerMenu

const BurgerMenuS = styled.img`
    display: none;
    @media(max-width: 375px){
        display: block;
        width: 25px;
        height: 12px;
        margin-left:30px;
        cursor: pointer;
    }
`
