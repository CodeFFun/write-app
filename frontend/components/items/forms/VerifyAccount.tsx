'use client' 

import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import Axios from '../../lib/axios/Axios'
import Btn from '../Button'

export default function VerifyAccount() {
  const axios = new Axios()
  const queryClient = useQueryClient()
  const [token, setToken] = useState('')

  const userData: any = queryClient.getQueryData(['FormData'])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value as string)
  }

  const onSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData.id)
    axios
      .post('auth/verify-token', { token: token, userId: userData?.id })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <>
      <div className='w-[35vw] text-center absolute left-[30rem] top-[8rem] p-5 flex-column'>
        <h1 className='font-bold text-4xl m-5'>Verify Account</h1>
        <p className='text-xl m-3'>
          A email has been sent to {userData?.email}{' '}
        </p>
        <form onSubmit={onSubmit}>
          <div className='flex w-full justify-center m-3'>
            <input
              onChange={onChange}
              value={token}
              type='text'
              className='border-2 shadow-md outline-none rounded-md m-5 p-2 w-3/4'
              placeholder='Enter your token here'
            />
          </div>
          <a href=''>
            <p className='text-sm text-green-500 m-2'>
              No token yet? Press here to send the token again.
            </p>
          </a>
          <div>
            <Btn buttonText='Verify' />
          </div>
        </form>
      </div>
    </>
  )
}
