import React, { useState } from "react";
import styled from "styled-components";
import logo from '../././../assets/logo/Logo.png';
import phone from "./../../assets/icons/ic_baseline-phone.png";
import logoTextt from "./../../assets/logo/JAYLO.png";
import Modal from "./Modal";
import BurgerMenu from "./BurgerMenu";


const Header = () => {

  const [state,setState]= useState(false)

  const clickHandler = () => {
    setState ((prev) => !prev);
  }
  return (
    <div>
        {state && (
        <Modal blockModal={clickHandler}>
        <h4>главная</h4>
        <h4>O нас</h4>
        <h4>Контакты</h4>
        <h3>Бренды</h3>
            <ul style={{ listStyle: "none", color: "black" }}>
              <li>+996 709 590 511</li>
              <li>+996 228 905 707</li>
            </ul>
        </Modal>
      )}
      <HeaderContainer>
          <Logo src={logo} alt="" />
          <LogoText src={logoTextt} alt="" />
          <BurgerMenu onClick={clickHandler}/>
          <nav>
            <Ul>
              <li>Главная</li>
              <li>O нас</li>
              <li>Контакты</li>
              <li>Бренды</li>
            </Ul>
          </nav>
          <ContainerPhone>
            <img src={phone} alt="" />
            <ul style={{ listStyle: "none", color: "white" }}>
              <li>+996 709 590 511</li>
              <li>+996 228 905 707</li>
            </ul>
          </ContainerPhone>
      </HeaderContainer>
    </div>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 178px;
  background: linear-gradient(180deg, #16171d 52.6%, rgba(22, 23, 29, 0) 100%);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
 @media(max-width: 375px){
  width: 375px;
  height: 100px;

 }
`
const Logo = styled.img`
  @media(max-width: 375px){
     width: 34px;
     height: 34px;
  }
`
const LogoText = styled.img`
  @media(max-width: 375px){
     width: 56px;
     height: 15px;
     margin-right:90px;
  }
`
const Ul = styled.ul`
  width: 470px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  @media(max-width:375px){
    display: none;
  }
`
const ContainerPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width:375px){
    display: none;
  }
`
