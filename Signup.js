import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link } from 'react-router-dom'
import "./login.css";

const Signup = ({btnText = true}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = (e) => {
        e.preventDefault()
        console.log(email, password)

        // localStorage.setItem('user', JSON.stringify({email, password}))
        // register code
        createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          console.log(res.user)
          alert('Registration successful! Please login to continue...')
          navigate('/login')
        })
       .catch(err => console.log(err))
      
      setEmail('')
      setPassword('')
      
    
        
      }

      const logout = () => {
        localStorage.removeItem('user');
        navigate('/')
      }

  return (
    
      <div >
        <div className='max-w-[350px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-color font-semibold text-3xl flex justify-center'>Register account</h1>
        {/* {error ? <p className='text-red-500 my-2'>{error}</p> : null} */}
        <div className='container bd'>
            <form onSubmit={register}>
                <div className='my-5'>
                    <label className='text-color text-xl' htmlFor="email">Email</label>
                    <div className='form-group my-2 w-full relative rounded-2xl shadow-xl'>
                        <input onChange={(e) => setEmail(e.target.value)} className='form-control w-full p-2 border rounded-2xl' required id='email' type="email" placeholder='Enter Email' />
                        <AiOutlineMail className='absolute right-4 top-3 text-gray-400'/>
                    </div>
                </div>
                <div className='my-5'>
                    <label className='text-color text-xl' htmlFor="password">Password</label>
                    <div className='form-group my-2 w-full relative rounded-2xl shadow-xl'>
                        <input onChange={(e) => setPassword(e.target.value)} className='form-control w-full p-2 border rounded-2xl' required id='password' type="password" placeholder='Enter Password' />
                        <RiLockPasswordLine className='absolute right-4 top-3 text-gray-400'/>
                    </div>
                </div>
                <button className='btn btn-success' type="submit">Sign up</button>
            </form>
            <p className='my-3 text-gray-500 dark:text-gray-400 text-sm'>
                Already have an account? <Link className='text-slate-800 font-semibold dark:text-blue-200' to="/login" >Login now!</Link>
            </p>
        </div>
        
        
    </div>
      </div>


  )
}

export default Signup
