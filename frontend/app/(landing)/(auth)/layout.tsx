import '../../globals.css'
import { FcGoogle } from 'react-icons/fc'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative min-w-[40vh] max-w-[screen] mx-5 my-12'>
      <div className='absolute left-1/3 w-[30vw] p-5 text-center'>
        <h1 className='text-4xl font-bold m-5'> Get Started</h1>
        <div className='w-full border-2 border-black flex justify-center items-center p-3 mx-5 my-10'>
          <FcGoogle className='text-2xl' />
          <p> Sign-In with google</p>
        </div>
        <>{children}</>
      </div>
    </div>
  )
}
