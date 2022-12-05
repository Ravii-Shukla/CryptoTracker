import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link } from 'react-router-dom'
import "./login.css";

const Login = ({btnText = true, setUser}) => {
    console.log(btnText)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

      const login = (e) => {
        e.preventDefault()
             signInWithEmailAndPassword(auth, email, password)
             .then((res) => {
               console.log(res)
               localStorage.setItem('user', JSON.stringify({email, password}))
               const data = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
            setUser(data)
               navigate('/')
             })
             .catch(err => alert('something went wrong!!'))
             
      }

      const logout = () => {
        localStorage.removeItem('user');
        navigate('/')
      }

  return (
    <div>
         <div className='max-w-[350px] mx-auto min-h-[600px] px-4 py-20'>
         <h1 className='text-color font-semibold text-3xl flex justify-center'>Sign in</h1>
         <div className='container bd'>
            <form onSubmit={login}>
                <div className='my-5'>
                    <label className='text-color text-xl' htmlFor="email">Email</label>
                    <div className='form-group my-2 w-full relative rounded-2xl shadow-xl'>
                        <input onChange={(e) => setEmail(e.target.value)} className='form-control w-full p-2 border rounded-2xl' required id='email' type="email" placeholder='Enter Email' />
                        {/* <AiOutlineMail className='absolute right-4 top-3 text-gray-400'/> */}
                    </div>
                </div>
                <div className='my-5'>
                    <label className='text-color text-xl' htmlFor="password">Password</label>
                    <div className='form-group my-2 w-full relative rounded-2xl shadow-xl'>
                        <input onChange={(e)=>setPassword(e.target.value)} className='form-control w-full p-2 border rounded-2xl' required id='password' type="password" placeholder='Enter Password' />
                        {/* <RiLockPasswordLine className='absolute right-4 top-3 text-gray-400'/> */}
                    </div>
                </div>
                <button className='btn btn-success' type="submit">Sign in</button>
            </form>
            <p className='my-3 text-gray-500 dark:text-gray-400 text-sm'>
                Don't have an account? <Link className='text-slate-800 font-semibold dark:text-blue-200' to="/signup">Register now!</Link>
            </p>
         </div>
    </div>

    </div>
  )
}

export default Login
