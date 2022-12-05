import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Signup from './Signup'
import Login from './Login'

const Buttons = ({btnText = ""}) => {


  return (
    <div>
        <Signup /> 
    </div>
  )
}

export default Buttons
