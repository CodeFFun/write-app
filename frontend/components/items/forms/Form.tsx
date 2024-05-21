'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Btn from '../Button'
import Axios from '@/components/lib/axios/Axios'
import { json } from 'stream/consumers'


export default function Form({  formPage }: {formPage:string}) {
  const axios = new Axios()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  })


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await axios.post(`auth/${formPage.toLowerCase()}`, formData)
    if(typeof window !== undefined && window.localStorage){
      localStorage.setItem('user', response.data.data.userId)
    }
    formPage === 'Login' ? router.push('/home') : router.push('/verify-account')  
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        {formPage === 'Register' && (
          <div className='mx-5 my-10 w-full flex flex-col items-start'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              className='w-full rounded-md p-2 shadow-md'
              onChange={onChange}
              value={formData['username']}
            />
          </div>
        )}
        <div className='mx-5 my-10 w-full flex flex-col items-start'>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            className='w-full rounded-md p-2 shadow-md'
            onChange={onChange}
            value={formData['email']}
          />
        </div>
        <div className='m-5 w-full flex flex-col items-start'>
          <input
            type='text'
            name='password'
            id='password'
            placeholder='Password'
            className='w-full rounded-md p-2 shadow-md'
            onChange={onChange}
            value={formData['password']}
          />
        </div>
        <div className={formPage === 'Login' ? 'w-full m-5 flex justify-between' : 'w-full m-5 flex justify-center'}>
          <Link href={formPage === 'Login'? '/register' : '/login'} className='text-md text-green-500'>
            {formPage === 'Login'? 'Create Account' : 'Already have an account'}
          </Link>
          {formPage === 'Login' && (
            <Link href='/login' className='text-md text-green-500'>
              Forgot Password?
            </Link>
          )}
        </div>
        <Btn buttonText={formPage} />
      </form>
    </>
  )
}
