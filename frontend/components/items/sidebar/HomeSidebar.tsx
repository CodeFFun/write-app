import Button from '@/components/items/Button'
import Axios from '@/components/lib/axios/Axios'
import { useRouter } from 'next/navigation'


export default function HomeSideBar({userId}:{userId:string}) {
  const router = useRouter()
  const axios = new Axios()
  const createFile =  async () => {
    const res = await axios.post('/file', {userId:userId})
    router.push(`/workspace/${res.data.data.fileId}`)
    console.log(res.data.data.fileId)
  }
  return (
    <>
      <aside className='col-span-1  h-screen border-r-2'>
        <div className='grid grid-flow-row grid-rows-11'>
          <div className='mb-3 border-b-2 row-span-5 py-3'>
            <div className='w-3/4' onClick={createFile}>
              <Button buttonText='Create new Document' />
            </div>
            <ul className='w-full '>
              <li className='py-2 text-center my-3  hover:cursor-pointer hover:bg-green-100 hover:border-r-8 hover:border-green-400'>
                <p>Your work</p>
              </li>
              <li className='py-2 text-center my-3 hover:cursor-pointer hover:bg-green-100 hover:border-r-8 hover:border-green-400'>
                <p>Recent</p>
              </li>
              <li className='py-2 text-center my-3 hover:cursor-pointer hover:bg-green-100 hover:border-r-8 hover:border-green-400'>
                <p>Starred</p>
              </li>
            </ul>
          </div>
          <div className='border-b-2 row-span-5'>
            <div>
                <h4>Folders</h4>
            </div>
            <p>No folder yet create folder to see .</p>
          </div>
          <div className='row-span-1'>
            <p className='py-2 text-center my-3 hover:cursor-pointer hover:bg-red-100 hover:border-r-8 hover:border-red-400'>Trash</p>
          </div>
        </div>
      </aside>
    </>
  )
}
