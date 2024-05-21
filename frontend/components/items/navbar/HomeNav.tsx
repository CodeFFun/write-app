'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from '@/components/ui/input'



export default function HomeNav() {
  return (
    <nav className='grid grid-flow-col grid-cols-4 auto-cols-max p-5 border-b-2 overscroll-none'>
      <div className='col-span-1'>
        <h1>Logo</h1>
      </div>
      <div className='flex col-span-2'>
        <Input placeholder='Search your document'/>
      </div>
      <div></div>
      < >
        <NavigationMenu className='col-span-1 '>
            <NavigationMenuList >
                <NavigationMenuItem >
                    <NavigationMenuTrigger >
                        <Avatar>
                            <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='flex flex-col w-full'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle() }>Settings</NavigationMenuLink>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Profile</NavigationMenuLink>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Signout</NavigationMenuLink>     
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
      </>
    </nav>
  )
}
