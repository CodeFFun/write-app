'use client'
import { useEffect } from "react"

export default function LandingMain() {
  useEffect(() => {
    if(typeof window !== undefined && window.localStorage){
        localStorage.removeItem('user')
    }
  }, [])
  return (
    <>LandingMain</>
  )
}
