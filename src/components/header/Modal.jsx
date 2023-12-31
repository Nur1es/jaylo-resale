import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'
import Becdrop from './Becdrop'

const Modal = (props) => {
  return (
    <Fragment>

     <Becdrop blockModal={props.blockModal}/>
      {createPortal(
        <ModalStyle>{props.children}</ModalStyle>,
        document.getElementById("modal")

      )}

    </Fragment>

  )
}

export default Modal 

const ModalStyle = styled.div`
  width: 250px;
  height: 250px;
  padding: 13% 15%;
  background-color: white;
  border-radius:10px;
  position:absolute;
  top: 35%;
  left: 48%;
  z-index:3;
  transform:translate(-50%,-50%)
`
