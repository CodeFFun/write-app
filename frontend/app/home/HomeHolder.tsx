"use client"
import { useEffect, useState } from "react";
import HomeSideBar from "@/components/items/sidebar/HomeSidebar";
import HomeNav from "@/components/items/navbar/HomeNav";
import HomeMain from "@/components/items/main/HomeMain";

export default function HomeHolder() {
  const [locale, setLocale] = useState('')
  useEffect(() => {
    const localAcess = typeof window !== undefined && window.localStorage
    if(localAcess){
      const localeItem:any = window.localStorage.getItem('user')
      console.log(localeItem)
      setLocale(() => localeItem as string)
    }
  }, [])
  return (
    <div>
      <div>
        <HomeNav />
      </div>
        <div className="grid grid-flow-col grid-cols-5 ">
          <HomeSideBar userId={locale}/>
          <HomeMain userId={locale} />
        </div>
    </div>
  )
}