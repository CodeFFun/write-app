
export default function LandingNav() {
  return (
    <div className="m-5 p-5 flex flex-row justify-between">
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="na">
            <ul className="flex text-sm">
                <a href="#">
                    <li className="mr-5 px-3 pb-2 hover:border-solid hover:border-b-2 hover:border-green-500 hover:text-green-500">Home</li>
                </a>
                <a href="#">
                    <li className="mr-5 px-3 pb-2 hover:border-solid hover:border-b-2 hover:border-green-500 hover:text-green-500">About</li>
                </a>
                <a href="/login">
                    <li className="mr-5 px-3 pb-2 hover:border-solid hover:border-b-2 hover:border-green-500 hover:text-green-500">SignIn</li>
                </a>
                <a href="/register">
                    <li className="mr-5 px-3 pb-2 hover:border-solid hover:border-b-2 hover:border-green-500 hover:text-green-500">Register</li>
                </a>
               
            </ul>
        </div>
    </div>
  )
}
