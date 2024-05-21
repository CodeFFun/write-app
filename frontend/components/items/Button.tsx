import { Button } from "../ui/button"

function Btn({buttonText}:{buttonText:string}) {
  return (
    <>
      <Button variant='myApp' size='myApp' >{buttonText}</Button>
    </>
  )
}

export default Btn